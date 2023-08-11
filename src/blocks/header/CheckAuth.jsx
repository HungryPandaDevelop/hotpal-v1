import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { saveListing } from 'services/saveListing';

const CheckAuth = ({
  ActionFn
}) => {

  const auth = getAuth();

  useEffect(() => {
    // const user = false;

    onAuthStateChanged(auth, (user) => {
      console.log('state change 1')
      if (user) {
        console.log('state change 2', user)
        const userInfo = {
          // name: user.displayName,
          email: user.email,
          uid: user.uid,
        }
        saveListing(userInfo, user.uid, 'users');
        localStorage.setItem('account', JSON.stringify(userInfo));
        ActionFn('SET_INFO_ACCOUNT', userInfo);
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