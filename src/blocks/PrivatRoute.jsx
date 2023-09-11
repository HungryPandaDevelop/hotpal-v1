import { Navigate, Outlet, useSearchParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { saveListing } from 'services/saveListing';

import { connect } from 'react-redux';

const PrivateRoute = ({ account }) => {

  let [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('account', account)
    const verificationIdUrl = searchParams.get('verid');

    const verificationIdAccount = account.verificationCheck;

    console.log(verificationIdUrl, verificationIdAccount)
    if (verificationIdUrl === verificationIdAccount) {
      console.log('send ')

      saveListing({ vertCheck: true }, account.uid, 'users').then(() => {
        setLoading(false)
      });
    } else {
      setLoading(false)
    }



  }, []);

  const verificationCheck = account.vertCheck;


  if (loading) { return 'Loading...' }

  return (
    <>
      {(account.uid ? ((verificationCheck) ? <Outlet /> : <Navigate to="/no-verification" />) : <Navigate to="/authorization" />)}
    </>
  )

}


const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
};

export default connect(mapStateToProps)(PrivateRoute);