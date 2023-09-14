import Messages from "pages/chat/Messages"
import ChatForm from 'pages/chat/Form';
import ChatHead from "./ChatHead"

const MessagesPopup = ({ uid, roomId, currentUser, setChoiseRoom }) => {
  return (
    <>
      <ChatHead currentUser={currentUser} roomId={roomId} setChoiseRoom={setChoiseRoom} />
      <Messages uid={uid} roomId={roomId} type='popup' />
      <ChatForm roomId={roomId} type='popup' />
    </>
  )
}

export default MessagesPopup
