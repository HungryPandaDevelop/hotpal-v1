import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListing } from 'services/getListings';

import { connect } from 'react-redux';


const BtnLikes = ({
  user,
  uid,
  likes,
  showPopup,
  setIdPoup
}) => {

  const base = 'likes';

  const [status, setStatus] = useState(false);


  useEffect(() => {

    likes && likes.map((collection) => {
      if (uid === collection.data.interlocutors[0] && user.uid === collection.data.interlocutors[1]) {
        setStatus(collection.data.id);
      };
    });

  }, []);

  const onAdd = (userInfo) => {

    addCardsDefault({
      'interlocutors': [uid, userInfo.uid],
      'status': 'see',
      'read': false,
      'userRef': uid,
      'userLikes': userInfo.uid,
    }, base).then(res => {
      setIdPoup('likes');
      showPopup(true);
      setStatus(res);
    });
  };

  const onDelete = () => {
    deleteListing(base, status)
    showPopup(false);
  };

  const onStatusChange = (userInfo) => {
    if (status) {
      onDelete();
      setStatus(false);
    } else {
      onAdd(userInfo);
    }
  }


  return (
    <div
      className={`btn-ico--like btn-ico ${status ? 'active' : ''}`}
      onClick={() => { onStatusChange(user) }}
    ></div>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
    likes: state.globalState.likes,
  }
}

export default connect(mapStateToProps)(BtnLikes);