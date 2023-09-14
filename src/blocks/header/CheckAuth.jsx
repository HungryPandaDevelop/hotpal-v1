import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import { getSingleListing } from 'services/getSingleListing';


import { saveListing } from 'services/saveListing';

const CheckAuth = ({
  ActionFn
}) => {

  const auth = getAuth();


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

          // saveListing(userInfo, user.uid, 'users'); // обновить время заходу, убрать всплывашку

          // localStorage.setItem('account', JSON.stringify(userInfo));

          ActionFn('SET_INFO_ACCOUNT', userInfo);
        });


      }
      else {
        // localStorage.removeItem('account');
        ActionFn('SET_INFO_ACCOUNT', { loaded: false, });

      };
    });



  }, []);

  return (
    <>
      {/* <div>AuthInfo: {(account.uid ? 'Logged: ' + account.uid : 'No Logged')}</div> */}
    </>
  )
}



export default connect(null,
  {
    ActionFn
  })(CheckAuth);