import { Link } from "react-router-dom"



const LinkWrap = ({
  children,
  type,
  path,
  room,
  roomUserInfo,
  setChoiseRoom,
  setCurrentUser

}) => {

  const choiseRoom = (user, roomUserInfo) => {
    setChoiseRoom(user.id)
    setCurrentUser(roomUserInfo)
  }

  if (type === 'page') {
    return (
      <Link to={path}>
        {children}
      </Link>
    )
  } else {
    return (
      <div onClick={() => choiseRoom(room, roomUserInfo)}>
        {children}
      </div>
    )
  }

}

export default LinkWrap
