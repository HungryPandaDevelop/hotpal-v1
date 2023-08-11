import { useNavigate } from 'react-router-dom';
import { createRoom } from 'services/chatEvents';
import { connect } from 'react-redux';


const BtnChat = ({ user, uid }) => {

  const navigate = useNavigate();

  const onInviteChat = (user) => {
    console.log(uid, user.uid)
    createRoom(uid, user.uid).then(res => {
      navigate('/cabinet/chat/' + res, { replace: true });
    });
  };


  return (
    <div
      className="btn-ico--chat btn-ico"
      onClick={() => { onInviteChat(user) }}
    ></div>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid
  }
}

export default connect(mapStateToProps)(BtnChat);