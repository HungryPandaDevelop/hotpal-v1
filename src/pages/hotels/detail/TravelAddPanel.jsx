import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from "moment";

import RenderForm from 'components/forms/RenderFormTravel';
import { settingsTravel } from 'base/forms/settingsFields';

import { addCardsDefault } from 'services/addListing';
import { getListing } from 'services/getListings';
import { deleteListing } from 'services/getListings';


const RoomsSearchPanel = ({
  formData,
  hotel,
  uid
}) => {


  const [stateTravelForm, setTravelStateForm] = useState(true);
  const [myTravel, setMyTravel] = useState(null);

  useEffect(() => {

    getListing('travel', 'travel', hotel.id).then((res) => {
      console.log('hotel.id', hotel.id)
      res.map(el => {
        if (el.uid === uid && el.idHotel === hotel.id) {
          setTravelStateForm(false)
          setMyTravel(el);
        }
      })
    });

  }, []);

  const onDelete = (id) => {
    deleteListing('travel', id).then(res => {
      setTravelStateForm(true)
    })

  };

  const submitSuccess = () => {
    // console.log(formData.values, uid, hotel.id, hotel.images[0])

    const travelObj = {
      'dateTravel': formData.values.dateTravelRange,
      'uid': uid,
      'idHotel': hotel.id,
      'nameHotel': hotel.name,
      'imgHotel': hotel.images[0]
    }

    addCardsDefault(
      travelObj, 'travel').then(res => {
        setMyTravel(travelObj)
        setTravelStateForm(false)
      });
  }




  return (

    <>
      {stateTravelForm ? (<RenderForm
        fields={settingsTravel}
        btnSubmitText="Я буду в эти даты"
        initialValues={{ dateTravelRange: moment().format('DD.MM.YYYY') + ' - ' + moment().add(2, 'days').format('DD.MM.YYYY') }}
        submitSuccess={submitSuccess}
        listing={hotel}
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

