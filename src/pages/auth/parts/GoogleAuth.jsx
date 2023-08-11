import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleAuth } from 'services/googleAuth';
import ActionFn from 'store/actions';

const GoogleAuth = ({ btnText, ActionFn }) => {
  const navigate = useNavigate();

  const onGoogleClick = () => {
    googleAuth().then(uid => {
      if (!uid) { return false };

      localStorage.setItem('account', JSON.stringify({ uid: uid }));
      ActionFn('SET_INFO_ACCOUNT', { uid: uid });
      navigate('/cabinet/', { replace: true });
    });
  }

  return (
    <div className="btn btn-reg btn-google" onClick={onGoogleClick}><i> </i><span>{btnText}</span></div>
  )
}



export default connect(null,
  {
    ActionFn
  })(GoogleAuth);