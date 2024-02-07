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

const CheckAuth = ({
  ActionFn
}) => {

  const auth = getAuth();

  // const navigate = useNavigate();
  const [loadpage, setLoadpage] = useState(true);
  useEffect(() => {
    // const user = false;
    onAuthStateChanged(auth, (user) => {
      ActionFn('SET_INFO_ACCOUNT', { loaded: true, });
      if (user) {
        // console.log('in check', user)

        // getSingleListing('users', user.uid).then(res => {
        //   // console.log('userInfo', res, userInfo)
        //   let userInfo = {
        //     // name: user.displayName,
        //     email: user.email,
        //     uid: user.uid,
        //     loaded: false,
        //     ...res
        //   };


        //   console.log('get user', res)
        //   if (res) {
        //     saveListing(userInfo, user.uid, 'users', true); // обновить время заходу, убрать всплывашку
        //   }
        //   // localStorage.setItem('account', JSON.stringify(userInfo));
        //   ActionFn('SET_INFO_ACCOUNT', userInfo);
        // });

        const fetchData = async () => {
          try {
            const result = await getMysql(user.uid);
            // Здесь можете выполнить код с полученными данными
            let userInfo = {
              // name: user.displayName,
              email: user.email,
              uid: user.uid,
              loaded: false,
              ...result
            };
            console.log('userInfo', userInfo)
            ActionFn('SET_INFO_ACCOUNT', userInfo);

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