import axios from 'axios';


export const addMysql = async ({ uid, name, email, dateBerth, gender, timestamp, registration, verificationId, age }) => {
  console.log('send',  uid, name, email, dateBerth, gender, timestamp, registration, verificationId, age)
  try {
    const response = await axios.get("https://hotpal.ru/api/base/vendor/create.php", {
      params: {
        uid: uid,
        email: email,
        name: name,
        gender: gender,
        dateBerth: dateBerth,
        timestamp: timestamp,
        registration:registration,
        verificationId: verificationId,
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

