import { useState, useEffect, useRef } from "react";
import Popup from "blocks/controls-panel/Popup";
import ControlsBtn from "blocks/controls-panel/ControlsBtn";
import ControlsLink from "blocks/controls-panel/ControlsLink";
import totalCountMessage from "blocks/controls-panel/parts/totalCountMessage";
import { fn } from "moment";
import $ from 'jquery';
import { connect } from 'react-redux';

const ControlsPanel = ({
  uid,
  rooms,
  likes,
}) => {

  const popupRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {

    document.body.addEventListener('click', bodyClick);

    return () => {
      document.removeEventListener("click", bodyClick)
    };



    function bodyClick(e) {
      if (!$(e.target).is('.link-back, .link-back *, .controls-panel-popup, .controls-panel-popup  *, .controls-btn, .controls-btn  *, .rooms-item, .rooms-item  *')) {
        setPopupActive(false);
        setIdActive('');
      }
    }

    // function handleClick(e) {
    //   console.log('s')
    //   if ((popupRef && popupRef.current)) {
    //     const ref = popupRef.current;

    //     if (!btnRef.current.classList.contains('controls-btn')) {

    //       if (!ref.contains(e.target)) {

    //         setPopupActive(false);
    //         setIdActive('');
    //       }
    //     }
    //   }
    // }

  }, []);



  const [popupActive, setPopupActive] = useState(false);
  const [nameActive, setNameActive] = useState('');
  const [idActive, setIdActive] = useState(0);
  const countTotalMessage = totalCountMessage('rooms', uid, rooms);
  const arrNames = [
    ['chat', 'Личные сообщения (' + countTotalMessage + ')'],
    ['like', 'Симпатии'],
    // ['invite', 'Приглашения'],
  ];

  const arrLinks = [
    ['search', '/users-catalog'],
    ['settings', '/cabinet/settings']];

  const renderBtn = (arrNames) => {
    return arrNames.map(name => <ControlsBtn
      name={name}
      key={name[1]}
      idActive={idActive}
      setPopupActive={setPopupActive}
      setNameActive={setNameActive}
      setIdActive={setIdActive}
      btnRef={btnRef}
      uid={uid}
      rooms={rooms}
      likes={likes}
    />)
  }
  const renderLink = (arrNames) => {
    return arrNames.map(name => <ControlsLink
      key={name[1]}
      name={name}
      idActive={idActive}
      setPopupActive={setPopupActive}
      setNameActive={setNameActive}
      setIdActive={setIdActive}
    />)
  }

  return (
    <div>
      <div className="controls-panel">
        {renderBtn(arrNames)}
        {renderLink(arrLinks)}
      </div>
      {popupActive && <Popup
        setPopupActive={setPopupActive}
        nameActive={nameActive}
        idActive={idActive}
        setIdActive={setIdActive}
        popupRef={popupRef}

      />}
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    rooms: state.globalState.rooms,
    likes: state.globalState.likes,
  }
}

export default connect(mapStateToProps)(ControlsPanel);