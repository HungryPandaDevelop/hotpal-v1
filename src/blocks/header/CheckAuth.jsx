import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import { getMysql } from 'pages/mysql/getMysql'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getSingleListing } from 'services/getSingleListing';
// import { saveListing } from 'services/saveListing';
// import axios from 'axios';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import PageLoader from 'components/PageLoader';

import { getMyRoomsOnline } from 'services/chatEvents';
import { getMyLikesOnline } from 'services/chatEvents';

const CheckAuth = ({
  ActionFn
}) => {

  const setRoomOut = (rooms) => {
    ActionFn('SET_ROOMS', { rooms: rooms });

    // console.log('setRoomCount', rooms.length)
    setRoomCount(rooms.length);
  }
  const setLikesOut = (likes) => {
    ActionFn('SET_LIKES', { likes: likes });

    setLikeCount(likes.length);
  }

  const auth = getAuth();

  // const navigate = useNavigate();
  const [loadpage, setLoadpage] = useState(true);
  const [roomCount, setRoomCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // const user = false;
    onAuthStateChanged(auth, (user) => {
      ActionFn('SET_INFO_ACCOUNT', { loaded: true, });
      if (user) {

        const fetchData = async () => {
          try {
            const result = await getMysql(user.uid);
            // Здесь можете выполнить код с полученными данными
            let userInfo = {
              // name: user.displayName,
              email: user.email,
              uid: user.uid,
              loaded: false,
              chats: roomCount,
              likes: likeCount,
              ...result
            };


            ActionFn('SET_INFO_ACCOUNT', userInfo);

            getMyRoomsOnline(setRoomOut, user.uid, userInfo);

            getMyLikesOnline(setLikesOut, user.uid, userInfo);

          } catch (error) {
            // Обработка ошибок при выполнении запроса
            console.error('Ошибка при получении данных:', error);
          }
        };

        fetchData();

      }
      else {
        // localStorage.removeItem('account');
        ActionFn('SET_INFO_ACCOUNT', { loaded: false, });
        // navigate('/')
      };
      setLoadpage(false);
    });

  }, []);

  if (loadpage) {
    return <PageLoader />
  } else {
    return false;
  }
}



export default connect(null,
  {
    ActionFn
  })(CheckAuth);