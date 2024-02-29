// import { saveListing } from 'services/saveListing';
import axios from 'axios';

import { updateUser } from 'servicesMysql/changeUsers';

export const sendEmail = (account, location) => {

  // The current location.
  // console.log(window.location.host);
  const generateId = location.state?.verificationId

  axios.get("https://hotpal.ru/api/mail.php", {
    params: {
      mail: account.email,
      name: account.name,
      verificationId: generateId,
      host: window.location.host
    }
  }).then(res => {
    // console.log('generateId', generateId)
    // console.log('state', location.state)

    updateUser({ uid: account.uid, verificationSend: '1' });
    // saveListing({ verificationSend: true }, account.uid, 'users');
  });

}