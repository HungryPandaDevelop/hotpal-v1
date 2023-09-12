import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { saveListing } from 'services/saveListing';

import { connect } from 'react-redux';


const PrivateRoute = ({ account }) => {

  // let [searchParams] = useSearchParams()
  // const [loading, setLoading] = useState(true);
  // const [verificationCheck, setVerificationCheck] = useState(account.verificationCheck);
  // useEffect(() => {
  //   // console.log('account', account)vertificationId
  //   const verificationIdUrl = searchParams.get('vertificationId');
  //   const verificationIdAccount = account.vertificationId;

  //   console.log(verificationIdUrl, verificationIdAccount, account)

  //   if (verificationIdUrl) {
  //     if (verificationIdUrl === verificationIdAccount) {
  //       // console.log('send ')
  //       setVerificationCheck(true);
  //       saveListing({ verificationCheck: true }, account.uid, 'users').then(res => {
  //         setLoading(false)
  //       });
  //     }
  //   } else {
  //     setLoading(false)
  //   }
  // }, []);


  console.log('account.loaded', account)

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

export default connect(mapStateToProps)(PrivateRoute);