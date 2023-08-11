import BtnLikes from 'pages/users/btns/BtnLikes';
import BtnChat from 'pages/users/btns/BtnChat';

const Btns = ({ user, uid }) => {

  return (
    <div className="btn-container">
      <div className="btn-container-inner">
        <BtnLikes
          user={user}

        />
        <BtnChat
          user={user}
        />
      </div>
    </div>
  )
}

export default Btns;
