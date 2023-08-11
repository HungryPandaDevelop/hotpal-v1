import { db } from 'default/config/firebase';

import { 
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth';


import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';


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
    
    
  
    const formDataCopy = { ...formData, uid: user.uid, typeReg: 'mail' };

    delete formDataCopy.password;

    formDataCopy.timestamp = serverTimestamp();


    await setDoc(doc(db, 'users', user.uid), formDataCopy);
  
    


    await sendEmailVerification(auth.currentUser).then(function() {
      // Verification email sent.
      console.log('Verification email sent.')
      toast.success('Verification sent');
    })
    .catch(function(error) {
      console.log('Error occurred. Inspect error.code.')
      // Error occurred. Inspect error.code.
    });


    return user;

  } catch (error) {
    if( error.code === 'auth/email-already-in-use'){
      toast.error('Такой Email уже есть');
    }

    return false;
  }
}

