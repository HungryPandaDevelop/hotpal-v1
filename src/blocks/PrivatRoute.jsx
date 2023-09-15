import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import ActionFn from 'store/actions';
import { useState, useEffect } from 'react';

import { saveListing } from 'services/saveListing';

import { connect } from 'react-redux';


const PrivateRoute = ({ account, ActionFn }) => {

  let [searchParams] = useSearchParams()
  // const [loading, setLoading] = useState(true);
  // const [verificationCheck, setVerificationCheck] = useState(account.verificationCheck);
  useEffect(() => {
    console.log('account', account)
    if (!account.loaded && !account.verificationCheck) {
      const verificationIdUrl = searchParams.get('vertificationId');
      const verificationIdAccount = account.vertificationId;

      // console.log('check', verificationIdUrl, verificationIdAccount, account)

      if (verificationIdUrl) {
        if (verificationIdUrl === verificationIdAccount) {
          // console.log('send ')
          // setVerificationCheck(true);
          saveListing({ verificationCheck: true }, account.uid, 'users');
          ActionFn('SET_INFO_ACCOUNT', { verificationCheck: true });
        }
      } else {
        // setLoading(false)
      }
    }
  }, [account]);


  // console.log('account.loaded', account)

  return (
    <>
      {/* {(account.uid ? (verificationCheck ? <Outlet /> : <Navigate to="/no-verification" />) : <Navigate to="/auth-start" />)} */}
      {(account.loaded ? 'Loading...' : (account.uid ? (<Outlet />) : <Navigate to="/auth-start" />))}
      {/* <Outlet /> */}
    </>
  )

}


const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
};

export default connect(mapStateToProps, { ActionFn })(PrivateRoute);