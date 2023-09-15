// import LikesItemMini from "./LikesItemMini"
import LikesItem from 'pages/cabinet/parts/LikesItem'
import { connect } from 'react-redux';

const Likes = ({ uid, likes }) => {
  return (
    <div className="main-grid likes-popup custom-scroll">

      {likes.map((like, index) => {
        if (like) {
          return (
            <LikesItem
              key={index}
              uid={uid}
              like={like.data}
              likes={likes}

            />
          )
        }
      }
      )}
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