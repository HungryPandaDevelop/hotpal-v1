import { useNavigate } from 'react-router-dom';
import { createRoom } from 'services/chatEvents';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { animateScroll as scroll } from 'react-scroll';

const BtnChat = ({ user, uid, ActionFn }) => {

  const navigate = useNavigate();

  const onInviteChat = (user) => {
    // console.log(uid, user.uid)

    createRoom(uid, user.uid).then(res => {

      if (window.innerWidth > 576) {
        navigate('/cabinet/chat/' + res, { replace: true });
      } else {
        // scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
        ActionFn('STATE_PANEL', {
          panelState: true,
          panelId: 'chat',
          panelName: 'Личные сообщения',
        });

        ActionFn('SET_CURRENT_ROOM', { roomUserInfo: user, panelChatRoom: res })

      }

      console.log('res', res)



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

export default connect(mapStateToProps, { ActionFn })(BtnChat);