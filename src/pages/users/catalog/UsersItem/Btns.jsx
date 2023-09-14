import BtnLikes from 'pages/users/btns/BtnLikes';
import BtnChat from 'pages/users/btns/BtnChat';

import { useState, useEffect } from 'react'


import Popup from 'components/Popup';
import BtnPopupLikes from 'pages/users/btns/BtnPopupLikes';
import BtnPopupBlacklist from 'pages/users/btns/BtnPopupBlacklist';


const Btns = ({ user }) => {

  const [showStart, setShowStart] = useState(false);
  const [idPopup, setIdPoup] = useState('');
  const showPopup = (status) => {
    setShowStart(status);
  }


  return (
    <div className="btn-container">
      <Popup
        showStart={showStart} // дома доделать
        setShowStart={setShowStart} // дома доделать
        showPopup={showPopup}
      >
        {idPopup === 'likes' ? (<BtnPopupLikes />) : (<BtnPopupBlacklist />)}

      </Popup>

      <div className="btn-container-inner">
        <BtnLikes
          user={user}
          showPopup={showPopup}
          setIdPoup={setIdPoup}
        />
        <BtnChat
          user={user}
        />
      </div>
    </div>
  )
}

export default Btns;
