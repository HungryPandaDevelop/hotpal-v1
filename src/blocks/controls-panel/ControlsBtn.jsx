import TotalCount from "./parts/TotalCount";

const ControlsBtn = ({
  name,
  setPopupActive,
  setNameActive,
  setIdActive,
  idActive,
  btnRef
}) => {

  const activeEl = (name) => {

    setPopupActive(true);

    setNameActive(name[1]);
    setIdActive(name[0]);
  }

  return (
    <div
      className={`controls-btn controls-${name[0]} ${name[0] === idActive && 'active'}`}
      onClick={() => activeEl(name)}
      ref={btnRef}
    ><i></i>
      {name[0] === 'chat' && <TotalCount type="rooms" />}
      {name[0] === 'like' && <TotalCount type="likes" />}

    </div>
  )
}

export default ControlsBtn
