import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const ControlsLink = ({
  name,
  setPopupActive,
  setIdActive,
  idActive
}) => {

  const location = useLocation();

  const activeEl = (name) => {
    setPopupActive(false);
    setIdActive(name);
  }


  useEffect(() => {
    activeEl(location.pathname)
  }, [location.pathname])


  return (
    <Link
      className={`controls-btn controls-${name[0]} ${name[1] === idActive && 'active'}`}
      to={name[1]}
    ><i></i>
    </Link>
  )
}

export default ControlsLink
