import { useState } from 'react';

import Popup from 'components/Popup';
import RenderForm from 'components/forms/RenderForm';
import Section from "pages/main/Section"

import { regFieldsPhone, regFieldVertification } from 'base/forms/authFields';

import { connect } from 'react-redux';

import { db } from 'default/config/firebase';

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';


const RegPhone = ({ formData }) => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const auth = getAuth();

  auth.languageCode = 'ru';

  function onCaptchVerify() {

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    console.log('sign', formData.values.phone)
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = formData.values.phone;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(formData.values.vert)
      .then(async (res) => {

        const docRef = doc(db, 'users', res.user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {

          await setDoc(doc(db, 'users', res.user.uid), {
            name: res.user.phoneNumber,
            uid: res.user.uid,
            timestamp: serverTimestamp()
          });

          toast.success('Rегистрация успешна');
          navigate('/cabinet/', { replace: true });
        } else {
          toast.success('Авторизация успешна');
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }


  return (
    <>
      <Popup>

        <div id="recaptcha-container" ></div>
        {showOTP ? (
          <>
            <h3>Введите код смс</h3>
            <RenderForm
              fields={regFieldVertification}
              btnSubmiText={loading ? 'Loading..' : "Вертификация"}
              submitSuccess={onOTPVerify}
            />
          </>
        ) : (
          <>
            <h3>Введите номер телефона</h3>
            <h4>Мы отправим код в виде СМС</h4>
            <RenderForm
              fields={regFieldsPhone}
              btnSubmiText={loading ? 'Loading..' : "Войти"}
              submitSuccess={onSignup}
            />
          </>
        )
        }

      </Popup>
      <Section />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(RegPhone);