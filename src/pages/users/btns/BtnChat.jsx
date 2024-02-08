import { useNavigate } from 'react-router-dom';
import { createRoom } from 'services/chatEvents';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import {timestampCustom} from 'services/timestampCustom';

// import { animateScroll as scroll } from 'react-scroll';

import { addChat } from 'pages/mysql/addChat';

const BtnChat = ({ user, uid, ActionFn, name }) => {

  const navigate = useNavigate();

  const onInviteChat = (user) => {
    // console.log(uid, user.uid)

    createRoom(uid, user.uid).then(res => {

      addChat({
        'id_chat': res,
        'userRefName': name,
        'userRef': uid,
        'userLikesName': user.name,
        'userLikes': user.uid,
        'timestamp': timestampCustom()
      });

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
    uid: state.account.uid,
    name: state.account.name
  }
}

export default connect(mapStateToProps, { ActionFn })(BtnChat);