// import LikesItemMini from "./LikesItemMini"
import LikesItem from 'pages/cabinet/parts/LikesItem'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Likes = ({ uid, likes }) => {
  return (
    <div className="main-grid likes-popup custom-scroll">
      {likes.length === 0 ? (
        <div className='empty-room col-12'>
          <div className='empty-room-container'>
            <h3>Делайте больше поисков, ищите, вступайте в диалоги и Вас заметят!</h3>
            <Link to="/users-catalog" className="btn btn--blue">Начать поиск</Link>
          </div>
        </div>) :
        (<>
          <div className='col-6'>
            <h3>Входящие</h3>
            {
              likes.map((like, index) => {
                if (like) {
                  return (
                    <LikesItem
                      key={index}
                      uid={uid}
                      like={like.data}
                      likes={likes}
                      typeLike="in"
                    />
                  )
                }
              })
            }
          </div>
          <div className='col-6'>
            <h3>Отправленные</h3>
            {
              likes.map((like, index) => {
                if (like) {
                  return (
                    <LikesItem
                      key={index}
                      uid={uid}
                      like={like.data}
                      likes={likes}
                      typeLike="out"
                    />
                  )
                }
              })
            }
          </div>
        </>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    likes: state.globalState.likes,
  }
}

export default connect(mapStateToProps)(Likes);

