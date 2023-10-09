import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getSingleListing } from 'services/getSingleListing';
import { saveListing } from 'services/saveListing';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';


const CheckAuth = ({
  ActionFn
}) => {

  const auth = getAuth();

  // const navigate = useNavigate();

  useEffect(() => {
    // const user = false;
    onAuthStateChanged(auth, (user) => {
      ActionFn('SET_INFO_ACCOUNT', { loaded: true, });
      if (user) {
        // console.log('in')
        getSingleListing('users', user.uid).then(res => {
          // console.log('userInfo', res, userInfo)
          let userInfo = {
            // name: user.displayName,
            email: user.email,
            uid: user.uid,
            loaded: false,
            ...res
          };

          saveListing(userInfo, user.uid, 'users', true); // обновить время заходу, убрать всплывашку

          // localStorage.setItem('account', JSON.stringify(userInfo));

          ActionFn('SET_INFO_ACCOUNT', userInfo);
        });


      }
      else {
        // localStorage.removeItem('account');
        ActionFn('SET_INFO_ACCOUNT', { loaded: false, });
        // navigate('/')
      };
    });

  }, []);

  return false
}



export default connect(null,
  {
    ActionFn
  })(CheckAuth);