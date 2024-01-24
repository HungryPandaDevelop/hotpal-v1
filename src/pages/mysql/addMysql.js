import axios from 'axios';

const myArray = ['<i class="bokal-ico"></i>Бокал в лобби', '<i class="padushka-ico"></i>Свидание в номере',]
const jsonString = JSON.stringify(myArray);

const myArrayI = [{ url: 'https://hotpal.ru/uploads/6560796264445_3BAAB293-3334-4DEA-AAFC-73C39C72928D.jpeg', id: '6560796264445_3BAAB293-3334-4DEA-AAFC-73C39C72928D.jpeg' }, { url: 'https://hotpal.ru/uploads/65afb7839e05a_1.jpg', id: '65afb7839e05a_1.jpg' }]
const jsonStringI = JSON.stringify(myArrayI);


export const addMysql = ({ uid, name, email, dateBerth, gender }) => {

  axios.get("https://hotpal.ru/api/base/vendor/create.php", {
    params: {
      uid: uid,
      email: email,
      name: name,
      gender: gender,
      dateBerth: dateBerth,
      // goals: jsonString,
      // imgsAccount: jsonStringI,
      // interests: `['111', '222', '333']`
    }
  }).then(res => {

    console.log('in send', res);
    return true;
    // saveListing({ vertificationSend: true }, account.uid, 'users');
  });
};

