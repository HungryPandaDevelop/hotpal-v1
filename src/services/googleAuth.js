// import { db } from 'default/config/firebase';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';

import {
  // doc,
  // setDoc,
  // getDoc,
  // updateDoc,
  serverTimestamp
} from 'firebase/firestore';

import { getMysql } from 'pages/mysql/getMysql';
import { addMysql } from 'pages/mysql/addMysql';
import { updateMysql } from 'pages/mysql/updateMysql';

// import { toast } from 'react-toastify';



export const googleAuth = async (generateId) => {

  try {

    const auth = getAuth();

    // console.log('step 0')
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account',
    });
    // console.log('step 1')
    const userCredential = await signInWithPopup(auth, provider);

    // console.log('step 1.1')

    const user = userCredential.user;
    // console.log('step 2')

    updateProfile(auth.currentUser, {
      displayName: user.displayName
    });
    console.log('step 3')

    // check for user
    // const docRef = doc(db, 'users', user.uid);
    // const docSnap = await getDoc(docRef);

    const docSnap = await getMysql(user.uid);
    console.log('docSnap', docSnap.length);
    console.log('step 4')

    const formattedDate = new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // if (!docSnap.exists()) {
    if (docSnap.length === 0) {
      // console.log('in 1')
      // toast.success('Rегистрация успешна');

      // await setDoc(doc(db, 'users', user.uid), {
      //   name: user.displayName,
      //   email: user.email,
      //   uid: user.uid,
      //   vertificationId: generateId,
      //   timestamp: serverTimestamp(),
      // });


      await addMysql({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        vertificationId: generateId,
        timestamp: formattedDate
      });


      return ['reg', user.uid];

    } else {
      // console.log('in 2')
      // toast.success('Авторизация успешна');

      // const cardsRef = doc(db, 'users', user.uid);

      const dataForm = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        timestamp: serverTimestamp(),
      }

      // await updateDoc(cardsRef, dataForm);

      await updateMysql({
        ...dataForm,
        timestamp: formattedDate
      });

      return ['auth', user.uid];

    }

  }
  catch (error) {
    console.log(error)
    return false;
  }
}