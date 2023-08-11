import { useState } from "react";
import Popup from "blocks/controls-panel/Popup";
import ControlsBtn from "blocks/controls-panel/ControlsBtn";
import ControlsLink from "blocks/controls-panel/ControlsLink";

const ControlsPanel = () => {

  const [popupActive, setPopupActive] = useState(false);
  const [nameActive, setNameActive] = useState('');
  const [idActive, setIdActive] = useState(0);

  const arrNames = [
    ['chat', 'Чат'],
    ['like', 'Симпатии'],
    ['invite', 'Приглашения'],
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

      />}
    </div>
  )
}

export default ControlsPanel
