import moment from "moment";

const MessagesItem = ({ message, uid }) => {

  const whose = message.uid === uid;

  const dateMessage = moment.unix(message.timestamp.seconds).format("DD.MM.YYYY HH:mm");



  return (
    <div
      className={`${!message.read ? 'messages--noanswer' : ''} ${whose ? 'messages-item' : 'messages-item--answer'}`}
    >
      <div className={`messages-item ${whose ? 'messages-box' : 'messages-box--answer'}`}>
        {message.text}
        {message.imgs && (<div>
          {message.imgs.map((img, index) => (
            <img className="messages-img" src={img} key={index} alt={img} />
          ))}
        </div>)}
      </div>
      {message?.invite?.type && (
        <div className="messages-invite-btns">
          <div className="btn-apply btn-invite"><i> </i><span>Принять</span></div>
          <div className="btn-dismiss btn-invite"><i></i><span>Оклонить</span></div>
        </div>
      )}

      <div className="messages-date">{dateMessage}</div>
    </div>
  )
}

export default MessagesItem
