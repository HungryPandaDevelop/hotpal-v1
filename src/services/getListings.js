import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit
} from 'firebase/firestore';


import { toast } from 'react-toastify';

import { db } from 'default/config/firebase';

export const getListing = async (baseName,  type, uid ) => {

  const listingsRef = collection(db, baseName);
  
  let q;

  if(type==='userRef'){
    q = query(
      listingsRef,
      where('userRef', '==', uid),
      orderBy('timestamp', 'desc'),
    );
  }

  if(type==='noUserRef'){
    q = query(
      listingsRef,
      where('uid', '!=', uid),
      orderBy('uid', 'desc'),

    );
  }
  
  else if(type==='rooms'){
    q = query(
      listingsRef,
      where('interlocutors', 'array-contains', uid),
    );
  }
  else if(type==='travel'){
    q = query(
      listingsRef,
      where('idHotel', '==',uid),
    );
  }
  else if(type==='travelAll'){
    q = query(
      listingsRef,
      where('uid', '!=',uid),
    );
  }
  else if(type==='usersArray'){
    console.log('uid',uid)
    q = query(
      listingsRef,
      where('uid', 'in', uid[1])
    );
  }
  else{
    q = query(
      listingsRef,
    );
  }
  

  const querySnap = await getDocs(q);

  // console.log('doc',querySnap)

  const getData = querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return getData;

}





export const deleteListing = async ( nameCollection, listingId) => {
  if (window.confirm('Delete ?')) {
    await deleteDoc(doc(db, nameCollection, listingId))
  }
}



