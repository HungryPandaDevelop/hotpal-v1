import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuth } from 'services/googleAuth';
import ActionFn from 'store/actions';

const GoogleAuth = ({ btnText, ActionFn, account }) => {
  const navigate = useNavigate();

  const onGoogleClick = () => {
    googleAuth(account).then(uid => {
      if (!uid) { return false };

      // localStorage.setItem('account', JSON.stringify({ uid: uid }));
      setTimeout(() => {
        ActionFn('SET_INFO_ACCOUNT', { uid: uid });
        console.log('account', account)
        if (account.verificationCheck) {
          navigate('/cabinet/', { replace: true });
        } else {
          navigate('/reg-end', { replace: true });
        }
      }, 500)


    });
  }

  return (
    <div className="btn btn-reg btn-google" onClick={onGoogleClick}><i> </i><span>{btnText}</span></div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
};

export default connect(mapStateToProps,
  {
    ActionFn
  })(GoogleAuth);