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
            <div className="col-12">
              <h3>Входящие</h3>
            </div>
            {likes.map((like, index) => {

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
            }
            )}
            <div className="col-12">
              <h3>Отправленные</h3>
            </div>
            {likes.map((like, index) => {

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