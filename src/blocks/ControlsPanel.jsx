import { useState, useEffect, useRef } from "react";
import Popup from "blocks/controls-panel/Popup";
import ControlsBtn from "blocks/controls-panel/ControlsBtn";
import ControlsLink from "blocks/controls-panel/ControlsLink";
import TotalCount from "blocks/controls-panel/parts/TotalCount";
import { fn } from "moment";

const ControlsPanel = () => {

  const popupRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {

    document.addEventListener("click", handleClick);

    document.body.addEventListener('click', bodyClick);

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("click", bodyClick)
    };



    function bodyClick(e) {
      console.log('cl body', e.target)
    }

    function handleClick(e) {
      console.log('s')
      if ((popupRef && popupRef.current)) {
        const ref = popupRef.current;
        if (!ref.contains(e.target)) {

          setPopupActive(false);
          setIdActive('');
        }

      }
    }

  }, []);



  const [popupActive, setPopupActive] = useState(false);
  const [nameActive, setNameActive] = useState('');
  const [idActive, setIdActive] = useState(0);

  const arrNames = [
    ['chat', 'Личные сообщения (1)'],
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

        {popupActive && <Popup
          setPopupActive={setPopupActive}
          nameActive={nameActive}
          idActive={idActive}
          setIdActive={setIdActive}
          popupRef={popupRef}

        />}
      </div>

    </div>
  )
}

export default ControlsPanel
