import { Navigate, Outlet } from 'react-router-dom';

import { connect } from 'react-redux';

const PrivateRoute = ({ uid }) => {


  return (
    <>
      {(uid ? <Outlet /> : <Navigate to="/authorization" />)}
    </>
  )

}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
  }
};

export default connect(mapStateToProps)(PrivateRoute);