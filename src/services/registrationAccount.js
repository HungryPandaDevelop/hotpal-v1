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

    formDataCopy.timestamp = serverTimestamp();

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
    if (error.code === 'auth/email-already-in-use') {
      toast.error('Такой Email уже есть');
    } else {
      toast.error('Ошибка регистрации');
    }

    return false;
  }
}

