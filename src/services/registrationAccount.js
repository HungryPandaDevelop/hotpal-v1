import { db } from 'default/config/firebase';

import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,

} from 'firebase/auth';


import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

import { addMysql } from 'pages/mysql/addMysql';

import { toast } from 'react-toastify';



export const registrationAccount = async (formData) => {



  const { name, email, password } = formData;

  try {

    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    updateProfile(auth.currentUser, {
      displayName: name
    });



    /* add to base auth */

    /* add to firestore base */
    const user = userCredential.user;



    const formDataCopy = { ...formData, uid: user.uid };

    delete formDataCopy.password;

    // formDataCopy.timestamp = serverTimestamp();

    // Получаем текущую дату и время
    var currentDate = new Date();

    // Функция для добавления ведущего нуля к числам < 10
    function padZero(num) {
      return num < 10 ? '0' + num : num;
    }

    // Получаем день, месяц, год, часы и минуты
    var day = padZero(currentDate.getDate());
    var month = padZero(currentDate.getMonth() + 1); // Месяцы начинаются с 0
    var year = currentDate.getFullYear();
    var hours = padZero(currentDate.getHours());
    var minutes = padZero(currentDate.getMinutes());

    // Форматируем в строку
    var formattedDate = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;

    formDataCopy.timestamp = formattedDate;

    console.log('formDataCopy', formDataCopy);

    // await setDoc(doc(db, 'users', user.uid), formDataCopy);
    addMysql(formDataCopy);



    // await sendEmailVerification(auth.currentUser).then(function() {
    //   // Verification email sent.
    //   console.log('Verification email sent.')
    //   toast.success('Verification sent');
    // })
    // .catch(function(error) {
    //   console.log('Error occurred. Inspect error.code.')
    //   // Error occurred. Inspect error.code.
    // });


    return user;

  } catch (error) {
    console.log('err', error)
    if (error.code === 'auth/email-already-in-use') {
      toast.error('Такой Email уже есть');
    } else {
      toast.error('Ошибка регистрации');
    }

    return false;
  }
}

