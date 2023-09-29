import Tabs from 'pages/cabinet/parts/Tabs';
import TravelItem from 'pages/cabinet/parts/TravelItem';
import { getListing } from 'services/getListings';
import { useState, useEffect } from 'react'
import { deleteListing } from 'services/getListings';
import { connect } from 'react-redux';

const Travel = ({ uid }) => {

  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState([]);

  useEffect(() => {

    setLoading(true);
    getListing('travel', 'userRef', uid).then((res) => {
      setListing(res);
      console.log(res)
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
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs
          active={6}
        />
        <div className="border-container border-null-top account-main" >
          <div className="main-grid">
            {listing.map(item => (
              <div key={item.id} className="col-4">
                <TravelItem item={item} onDelete={onDelete} />
              </div>
            ))}

          </div>

        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Travel);

