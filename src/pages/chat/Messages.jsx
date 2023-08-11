import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getMyRoomMessages, stopWatch } from 'services/chatEvents';

import MessagesItem from './MessagesItem';

const Messages = ({ uid, roomId }) => {

  const [allMessages, setAllMessages] = useState([]);

  // const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {

    getMyRoomMessages(setAllMessages, roomId);

    return () => {
      stopWatch();
    }
  }, [roomId]);


  const renderMessages = () => {
    if (allMessages.length <= 0) {
      return 'Список сообщений пукст';
    }
    return allMessages.map((message, index) => <MessagesItem
      key={index}
      message={message}
      uid={uid}
    />)
  }

  return (
    <div className="chat-messages">
      <div className="messages-container">

        {renderMessages()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Messages);