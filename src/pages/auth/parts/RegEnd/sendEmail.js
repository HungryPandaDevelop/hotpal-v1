import { saveListing } from 'services/saveListing';
import axios from 'axios';

export const sendEmail = (account, location) => {

  // The current location.
  // console.log(window.location.host);
  const generateId = location.state?.vertificationId

    axios.get("https://hotpal.ru/api/mail.php", {
      params: {
        mail: account.email,
        name: account.name,
        vertificationId: generateId,
        host: window.location.host
      }
    }).then(res => {
      console.log('in send', res)
      saveListing({ vertificationSend: true }, account.uid, 'users');
    });

}