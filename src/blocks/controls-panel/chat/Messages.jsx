import { useEffect } from "react";

import Messages from "pages/chat/Messages"
import ChatForm from 'pages/chat/Form';
import ChatHead from "./ChatHead"

import { updateRead } from 'services/chatEvents';

const MessagesPopup = ({ uid, roomId, currentUser }) => {

  useEffect(() => {
    console.log("chat popup")
  }, [])

  return (
    <>
      <ChatHead currentUser={currentUser} roomId={roomId} />
      <Messages uid={uid} roomId={roomId} type='popup' />
      <ChatForm roomId={roomId} type='popup' />
    </>
  )
}

export default MessagesPopup
