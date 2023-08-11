import { useState } from 'react';
import { connect } from 'react-redux';
import Rooms from 'pages/chat/Rooms';
import MessagesPopup from "./Messages";

const Chat = ({ uid }) => {

  const [choiseRoom, setChoiseRoom] = useState(0);
  const [currentUser, setCurrentUser] = useState([]);
  return (
    <>
      {choiseRoom === 0 ? (
        <Rooms
          uid={uid}
          setChoiseRoom={setChoiseRoom}
          setCurrentUser={setCurrentUser}
          type='popup'
        />
      ) :
        (
          <MessagesPopup
            uid={uid}
            roomId={choiseRoom}
            currentUser={currentUser}
            setChoiseRoom={setChoiseRoom}
          />
        )}

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(Chat);