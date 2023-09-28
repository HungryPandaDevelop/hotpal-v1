import { useState, useEffect } from 'react';
import RenderForm from 'components/forms/RenderFormTravel';
import moment from "moment";
import { settingsTrave } from 'base/forms/settingsFields';
import { addCardsDefault } from 'services/addListing';
import { connect } from 'react-redux';
import { getListing } from 'services/getListings';
import TravelUserList from 'pages/hotels/detail/TravelUserList';
import { deleteListing } from 'services/getListings';


const RoomsSearchPanel = ({
  formData,
  listing,
  uid
}) => {

  const [travelList, setTravelList] = useState([]);
  const [travelListLoad, setTravelListLoad] = useState(true);
  const [stateTravelForm, setTravelStateForm] = useState(true);
  const [myTravel, setMyTravel] = useState(null);

  useEffect(() => {

    getListing('travel', 'userRef', listing.id).then((res) => {
      res.map(el => {
        if (el.uid === uid) {
          setTravelStateForm(false)
          setMyTravel(el);
        }
      })
      setTravelList(res);
      setTravelListLoad(false)
    });

  }, []);

  const onDelete = (id) => {
    deleteListing('travel', id).then(res => {
      setTravelStateForm(true)
    })

  };

  const submitSuccess = () => {
    console.log(formData.values, uid, listing.id, listing.images[0])

    const travelObj = {
      'dateTravel': formData.values.dateTravelRange,
      'uid': uid,
      'idHotel': listing.id,
      'imgHotel': listing.images[0]
    }

    addCardsDefault(
      travelObj, 'travel').then(res => {
        setMyTravel(travelObj)
        setTravelStateForm(false)
      });
  }

  if (travelListLoad) {
    return 'Load...'
  }


  return (

    <>
      {stateTravelForm ? (<RenderForm
        fields={settingsTrave}
        btnSubmitText="Я буду в эти даты"
        initialValues={{ dateTravelRange: moment().format('DD.MM.YYYY') + ' - ' + moment().add(2, 'days').format('DD.MM.YYYY') }}
        submitSuccess={submitSuccess}
        listing={listing}
      />) : (<div className="main-grid travel-info-panel border-container">
        <div className="col-4">
          <h3>Буду в эти даты</h3>
        </div>
        <div className="col-4">
          <div className='travel-info-date'>{myTravel.dateTravel}</div>
        </div>
        <div className="col-4">
          <div className="btn-container">
            <div
              className="btn btn--blue"
              onClick={() => { onDelete(myTravel.id) }}
            >Изменить дату</div>
          </div>
        </div>

      </div>)}


      <TravelUserList travelList={travelList} uid={uid} />
    </>

  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(RoomsSearchPanel);

