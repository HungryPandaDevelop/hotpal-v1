import axios from 'axios';


export const updateMysql = async ({
  uid,
  name,
  email,
  dateBerth,
  age,
  gender,
  goals,
  timestamp,
  registration,
  imgsAccount,
  description,
  hotelDate,
  hotelFind,
  work,
  zodiac,
  tripPoint,
  orientation,
  interests,
  phone,
  setting_invites,
  setting_likes,
  setting_messages,
  setting_founds,
  setting_goals,
  verificationCheck,
  verificationSend,
  verificationId,


}) => {

  console.log('u', uid)

  try {

    let jsonGoals;
    let jsonInterests;
    let jsonImgsAccount;

    if (typeof goals === 'object') {
      jsonGoals = JSON.stringify(goals);
    } else {
      jsonGoals = goals;
    }

    if (typeof interests === 'object') {
      jsonInterests = JSON.stringify(interests);
    } else {
      jsonInterests = interests;
    }

    if (typeof imgsAccount === 'object') {
      jsonImgsAccount = JSON.stringify(imgsAccount);
    } else {
      jsonImgsAccount = imgsAccount;
    }


    const response = await axios.get("https://hotpal.ru/api/base/vendor/update.php", {
      params: {
        uid: uid,
        email: email,
        name: name,
        gender: gender,
        dateBerth: dateBerth,
        age: age,
        registration:registration,
        timestamp: timestamp,
        goals: jsonGoals,
        imgsAccount: jsonImgsAccount,
        description,
        phone,
        hotelDate,
        hotelFind,
        work,
        zodiac,
        tripPoint,
        orientation,
        interests: jsonInterests,
        setting_invites,
        setting_likes,
        setting_messages,
        setting_founds,
        setting_goals,
        verificationCheck,
        verificationSend,
        verificationId,
      }
    });
    console.log('Все ок:', response);
    return true;
  }
  catch (err) {
    console.error('Ошибка при отправке данных:', err);

    // Возвращаем false или можем прокинуть ошибку вызывающему коду
    return false;
  }

};

