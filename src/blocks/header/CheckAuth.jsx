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

      if (user) {
        // console.log(user)


        getSingleListing('users', user.uid).then(res => {
          // console.log('userInfo', res, userInfo)
          let userInfo = {
            // name: user.displayName,
            email: user.email,
            uid: user.uid,
            ...res
          };

          saveListing(userInfo, user.uid, 'users');

          localStorage.setItem('account', JSON.stringify(userInfo));

          ActionFn('SET_INFO_ACCOUNT', userInfo);
        })


      }
      else {
        localStorage.removeItem('account');
        ActionFn('SET_INFO_ACCOUNT', { uid: false, email: '', });
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