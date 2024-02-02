// import { db } from 'default/config/firebase';

import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,

} from 'firebase/auth';


// import {
//   doc,
//   setDoc,
//   serverTimestamp
// } from 'firebase/firestore';

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
    const formattedDate = new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    formDataCopy.timestamp = formattedDate;

    console.log('formDataCopy', formDataCopy);

    // await setDoc(doc(db, 'users', user.uid), formDataCopy);
    await addMysql(formDataCopy);



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

