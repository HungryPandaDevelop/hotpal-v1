import axios from 'axios';


export const addMysql = async ({ uid, name, email, dateBerth, gender, timestamp, registration, verificationId, age, imgsAccount, verificationCheck }) => {
  
  try {
    let jsonImgsAccount = '';
    if (typeof imgsAccount === 'object') {
      jsonImgsAccount = JSON.stringify(imgsAccount);
    } ;

console.log('send',  uid, name, email, dateBerth, gender, timestamp, registration, verificationId, age, jsonImgsAccount, verificationCheck)

    const response = await axios.get("https://hotpal.ru/api/base/vendor/create.php", {
      params: {
        uid: uid,
        email: email,
        name: name,
        gender: gender,
        dateBerth: dateBerth,
        timestamp: timestamp,
        registration:registration,
        imgsAccount:jsonImgsAccount,
        verificationId: verificationId,
        verificationCheck: verificationCheck,
        age: age
      }
    });
    console.log('Ответ php', response);
    return true;
  }
  catch (err) {
    console.error('Ошибка при отправке данных:', err);

    // Возвращаем false или можем прокинуть ошибку вызывающему коду
    return false;
  }

};

