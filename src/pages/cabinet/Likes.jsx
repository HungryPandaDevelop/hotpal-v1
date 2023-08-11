import Tabs from 'pages/cabinet/parts/Tabs';
import LikesItem from 'pages/cabinet/parts/LikesItem'
import { connect } from 'react-redux';

const Sympathy = ({ uid, likes }) => {



  return (
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs
          active={3}
        />
        <div className="border-container border-null-top account-main" >
          <div className="main-grid">
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

        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    likes: state.globalState.likes,
  }
}

export default connect(mapStateToProps)(Sympathy);