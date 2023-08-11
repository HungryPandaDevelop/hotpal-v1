import { db } from 'default/config/firebase';

import {
  doc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const saveListing = async (dataForm, cardsId, baseName) => {
  
    try {
      
      const cardsRef = doc(db, baseName, cardsId);
      dataForm.timestamp = serverTimestamp();
      console.log(dataForm);
      await updateDoc(cardsRef, dataForm);

      toast.success('Данные обновлены')

      return true;
    } catch (error) {
      toast.error('Невозможно обновить данные')
      console.log(error)

      return false;
    }
  }