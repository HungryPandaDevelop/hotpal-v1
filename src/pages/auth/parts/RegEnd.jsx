import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { saveListing } from 'services/saveListing';
import { connect } from 'react-redux';

const RegEnd = ({ successMail, uid }) => {

  const sendEmail = () => {
    const generateId = uuidv4();



    saveListing({ vertCheck: generateId }, uid, 'users');


    axios.get("http://hotpal.sait.website/api/mail.php", {
      params: {
        mailVert: successMail
      }
    }).then(res => {

      console.log('res', res)

    });


  }

  return (
    <>
      <h3>Поздравляем!<br />Вы успешно создали аккаунт.</h3>
      <h4>Остался последний шаг. Мы отправили вам на почту письмо с подтверждением вашего email</h4>
      <div className="reg-end">
        <h3>Пожалуйста, проверьте ящик {successMail}.</h3>
        <div><i className="reg-end-ico"></i></div>
      </div>
      <div className="btn btn--blue-border" onClick={sendEmail}>Отправить</div>
      {/* <div className="form-btn-container">
        <Link className="btn btn--blue" to="/cabinet">В кабинет</Link>
      </div> */}
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(RegEnd);