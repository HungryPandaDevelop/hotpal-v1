import moment from "moment";
import { updateInvite } from 'services/chatEvents';


const MessagesItem = ({ message, uid, roomId, index }) => {

  const whose = message.uid === uid;

  const dateMessage = moment.unix(message.timestamp.seconds).format("DD.MM.YYYY HH:mm");

  const changeInvite = (status, index) => {

    updateInvite(roomId, status, index)
  }

  return (
    <div
      className={`${!message.read ? 'messages--noanswer' : ''} ${whose ? 'messages-item' : 'messages-item--answer'}`}
    >
      <div className={`messages-item ${whose ? 'messages-box' : 'messages-box--answer'}`}>
        {message.invite.type ? message.invite.text : message.text}
        {message.imgs && (<div>
          {message.imgs.map((img, index) => (
            <img className="messages-img" src={img} key={index} alt={img} />
          ))}
        </div>)}
      </div>
      {message.invite.status === 'agree' && (<div><div className="invite-status invite-status--agree">Предложение принято</div></div>)}
      {message.invite.status === 'disagree' && (<div><div className="invite-status invite-status--disagree">Предложение отклонено</div></div>)}
      {(message.invite.status === 'see' && message.uid !== uid) && (
        <div className="messages-invite-btns">
          <div className="btn-apply btn-invite" onClick={() => changeInvite('agree', index)}><i> </i><span>Принять</span></div>
          <div className="btn-dismiss btn-invite" onClick={() => changeInvite('disagree', index)}><i></i><span>Оклонить</span></div>
        </div>
      )}

      <div className="messages-date">{dateMessage}</div>
    </div>
  )
}

export default MessagesItem
