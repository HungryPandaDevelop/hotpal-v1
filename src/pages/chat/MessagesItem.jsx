import moment from "moment";

const MessagesItem = ({ message, uid }) => {

  const whose = message.uid === uid;

  const dateMessage = moment.unix(message.timestamp.seconds).format("DD.MM.YYYY HH:mm");



  return (
    <div
      className={`${!message.read ? 'messages--noanswer' : ''} ${whose ? 'messages-item' : 'messages-item--answer'}`}
    >
      <div className={`messages-item ${whose ? 'messages-box' : 'messages-box--answer'}`}>{message.text}</div>
      <div className="messages-date">{dateMessage}</div>
    </div>
  )
}

export default MessagesItem
