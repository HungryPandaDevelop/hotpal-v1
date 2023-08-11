import { db } from 'default/config/firebase';

import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';

import {
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp 
} from 'firebase/firestore';



import { toast } from 'react-toastify';



export const googleAuth = async () => {

  try {

    const auth = getAuth();

    console.log('step 0')
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account',
    });
    // console.log('step 1')
    const userCredential = await signInWithPopup(auth, provider);


    const user = userCredential.user;
    // console.log('step 2')

    updateProfile(auth.currentUser, {
      displayName: user.displayName
    });

    // check for user
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    // console.log('step 3')

    if (!docSnap.exists()) {
      // console.log('step 4')


      toast.success('Rегистрация успешна');
    }else{

      toast.success('Авторизация успешна');
    }
   
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      timestamp: serverTimestamp()
    });


    return  user.uid;
  }
  catch(error){
    console.log(error)
    return false;
  }
}