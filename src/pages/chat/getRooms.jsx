import { useEffect } from "react"
import { getMyRoomsOnline } from 'services/chatEvents';
import { getMyLikesOnline } from 'services/chatEvents';

import { connect } from 'react-redux';
import actionFn from 'store/actions/index';

const GetRooms = ({ uid, actionFn }) => {


  const setRoomOut = (rooms) => {



    actionFn('SET_ROOMS', { rooms: rooms });
  }
  const setLikesOut = (likes) => {
    actionFn('SET_LIKES', { likes: likes });
  }

  useEffect(() => {
    // console.log('uid', uid)
    getMyRoomsOnline(setRoomOut, uid);
    getMyLikesOnline(setLikesOut, uid);


  }, []);


}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
  }
}


export default connect(mapStateToProps, { actionFn })(GetRooms);