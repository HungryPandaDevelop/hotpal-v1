
import { connect } from 'react-redux';
import { calcUnreadMessage } from 'pages/chat/hooks/calcUnread';
import { calcUnread } from 'pages/chat/hooks/calcUnread';

const TotalCountMessage = ({ rooms, likes, uid, type }) => {


  if (type === 'rooms') {
    if (calcUnreadMessage(rooms, uid) === 0) return false;

    return (
      <span>
        {calcUnreadMessage(rooms, uid)}
      </span>
    )
  }
  if (type === 'likes') {
    if (calcUnread(likes, uid) === 0) return false;

    return (
      <span>
        {calcUnread(likes, uid)}
      </span>
    )
  }


}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    rooms: state.globalState.rooms,
    likes: state.globalState.likes,
  }
}

export default connect(mapStateToProps)(TotalCountMessage);
