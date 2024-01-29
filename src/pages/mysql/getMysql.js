import axios from 'axios';


export const getMysql = (uid) => {
  axios.get("https://hotpal.ru/api/base/vendor/get_single.php", {
    params: {
      uid: uid,
    }
  }).then(res => {
    return res;
  });


};

