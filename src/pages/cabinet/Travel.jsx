
import TravelItem from 'pages/cabinet/parts/TravelItem';
import { getListing } from 'services/getListings';
import { useState, useEffect } from 'react'
import { deleteListing } from 'services/getListings';
import { connect } from 'react-redux';
const Travel = ({ uid }) => {

  const [travelList, setTravelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState([]);

  useEffect(() => {

    // setLoading(true);

    getListing('travel', 'userUid', uid).then((res) => {
      setListing(res);

      getListing('travel', 'travelAll', uid).then((res) => {
        setTravelList(res);
      });

      setLoading(false);
    });

  }, []);

  const onDelete = (id) => {
    deleteListing('travel', id).then(res => {
      setListing(listing.filter(el => el.id !== id))
    })
  };

  if (loading) { return 'Loading...' };


  return (
    <div className='input-box'>
      <label><b>Будущие путешествия</b></label>
      {listing.map(item => (
        <div key={item.id} >
          <TravelItem
            item={item}
            onDelete={onDelete}
            travelList={travelList}
            uid={uid}
          />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Travel);

