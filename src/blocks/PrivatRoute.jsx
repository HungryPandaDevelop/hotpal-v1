import {
  Navigate,
  Outlet,
  // useSearchParams
} from 'react-router-dom';
import ActionFn from 'store/actions';
// import { useEffect } from 'react';

// import { saveListing } from 'services/saveListing';

import { connect } from 'react-redux';

import Header from 'blocks/Header';
import Footer from 'blocks/footer/Footer';

import GetRooms from 'pages/chat/getRooms';
import ControlsPanel from 'blocks/ControlsPanel';
import BestPanel from 'blocks/BestPanel';



const PrivateRoute = ({ account, ActionFn }) => {

  // let [searchParams] = useSearchParams()

  // useEffect(() => {
  //   // console.log('account', account)
  //   if (!account.loaded && !account.verificationCheck) {
  //     const verificationIdUrl = searchParams.get('vertificationId');
  //     const verificationIdAccount = account.vertificationId;

  //     if (verificationIdUrl) {
  //       if (verificationIdUrl === verificationIdAccount) {

  //         saveListing({ verificationCheck: true }, account.uid, 'users');
  //         ActionFn('SET_INFO_ACCOUNT', { verificationCheck: true });
  //       }
  //     }
  //   }
  // }, [account]);


  const renderAuthContent = () => {
    return (
      <div className='content'>
        <Header />
        <GetRooms />
        <ControlsPanel />

        <Outlet />

        <BestPanel />

        <Footer />
      </div>
    )
  }


  return (
    <>
      {(account.loaded ? 'Loading...' : (account.uid ? renderAuthContent() : <Navigate to="/auth-start" />))}
    </>
  )

}


const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
};

export default connect(mapStateToProps, { ActionFn })(PrivateRoute);