import { useState, useEffect } from 'react';

import { updateRead } from 'services/chatEvents';


import { userImg } from 'pages/users/catalog/UsersItem/userImg';

import { getCurrentTime } from 'pages/chat/RoomItem/getCurrentTime';

import { getSingleListing } from 'services/getSingleListing';

import LinkWrap from 'pages/chat/RoomItem/LinkWrap';

const RoomItem = ({
  room,
  roomUrl,
  uid,
  onDeleteRoom,
  setChoiseRoom,
  setCurrentUser,
  type
}) => {

  const invite = room.data.connectUsersUid[0] === uid ? room.data.connectUsersUid[1] : room.data.connectUsersUid[0];

  const [roomUserInfo, setRoomUserInfo] = useState({});
  const [countUnread, setCountUnread] = useState(0);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    getSingleListing('users', invite).then(res => {

      setLoading(false);
      setRoomUserInfo(res);
    });

    let count = 0;
    room.data.messages.map(undread => {
      if (!undread.read && undread.uid !== uid) {
        count++;
      }
    });
    setCountUnread(count);

  }, [room]);

  useEffect(() => {
    if (roomUrl === room.id) {
      updateRead(roomUrl, room, uid);
    }
  }, [roomUrl]);






  if (loading) { return 'Loading...' }

  return (
    <div
      className={`rooms-item ${roomUrl === room.id ? 'active' : ''}`}
    >
      <LinkWrap
        path={`/cabinet/chat/${room.id}`}
        type={type}
        room={room}
        roomUserInfo={roomUserInfo}
        setChoiseRoom={setChoiseRoom}
        setCurrentUser={setCurrentUser}
      >

        <>
          <div
            className="rooms-item-face img-use-bg" style={userImg(roomUserInfo)}>
            {countUnread !== 0 && (<div className="rooms-item-count">{countUnread}</div>)}
          </div>
          <div className="rooms-item-info">
            <div className="rooms-item-name">
              {roomUserInfo.name}
            </div>
            <span className="rooms-item-date">
              {getCurrentTime(roomUserInfo)}
            </span>
          </div></>
      </LinkWrap>



      <div
        className="btn-trash"
        onClick={() => { onDeleteRoom(room.id) }}
      ></div>
    </div>
  )
}

export default RoomItem
