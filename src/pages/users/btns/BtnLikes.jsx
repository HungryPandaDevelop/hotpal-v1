import { useState, useEffect } from 'react';

import { addCardsDefault } from 'services/addListing';

import { deleteListing } from 'services/getListings';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const BtnLikes = ({
  user,
  uid,
  likes,
  showPopup,
  setIdPoup
}) => {

  const base = 'likes';

  const [status, setStatus] = useState(false);
  const [invite, setInvite] = useState(false);



  useEffect(() => {
    console.log('likes', likes)
    setInvite(false);
    setStatus(false);

    if (likes.length > 0) {
      likes.map((like) => {


        // if (user.uid === like.data.userLikes) {
        //   setStatus(like.data.id);
        // }

        if (user.uid === like.data.userLikes) {
          setStatus(like.data.id); // у меня на экране
        }

        if (user.uid === like.data.userRef) {
          //   setStatus(like.data.id); // у него на экране
          setInvite(true);
        }



      })
    }

  }, [likes]);

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
    <>
      {invite ? <Link className='btn-ico--like btn-ico active' to='/cabinet/likes'>Перейти</Link> : (
        <div
          className={`btn-ico--like btn-ico ${status ? 'active' : ''}`}
          onClick={() => { onStatusChange(user) }}
        ></div>
      )}
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
    likes: state.globalState.likes,
  }
}

export default connect(mapStateToProps)(BtnLikes);