import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getMyRoomMessages, stopWatch } from 'services/chatEvents';

import MessagesItem from './MessagesItem';
import MessagesHead from './MessagesHead';

import { updateRead } from 'services/chatEvents';

const Messages = ({ uid, roomId, type, rooms }) => {

  const [allMessages, setAllMessages] = useState([]);

  // const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {

    getMyRoomMessages(setAllMessages, roomId);
    const currentRoom = rooms && rooms.find(el => el.id === roomId);
    console.log('cr', currentRoom)
    updateRead(roomId, currentRoom, uid)
    return () => {
      stopWatch();
    }
  }, [roomId]);


  const renderMessages = () => {
    if (allMessages.length <= 0) {
      return 'Список сообщений пуст';
    }
    return allMessages.map((message, index) => <MessagesItem
      key={index}
      message={message}
      uid={uid}
      roomId={roomId}
      index={index}
    />)
  }

  return (
    <>
      {type !== 'popup' && <MessagesHead />}
      <div className="messages-container custom-scroll">

        {renderMessages()}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    rooms: state.globalState.rooms,
  }
}

export default connect(mapStateToProps)(Messages);