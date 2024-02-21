import axios from 'axios';
import { calculateAge } from 'pages/users/hooks/calculateAge';

export const updateMysql = async (props) => {

  console.log('u', props.uid)

  try {

    let jsonGoals;
    let jsonInterests;
    let jsonImgsAccount;

    if (typeof props.goals === 'object') {
      jsonGoals = JSON.stringify(props.goals);
    } else {
      jsonGoals = props.goals;
    }

    if (typeof props.interests === 'object') {
      jsonInterests = JSON.stringify(props.interests);
    } else {
      jsonInterests = props.interests;
    }

    if (typeof props.imgsAccount === 'object') {
      jsonImgsAccount = JSON.stringify(props.imgsAccount);
    } else {
      jsonImgsAccount = props.imgsAccount;
    }



    const newValue = { ...props, goals: jsonGoals, interests: jsonInterests, imgsAccount: jsonImgsAccount, age: calculateAge(props.dateBerth) }
    console.log('Все props:', newValue);
    const response = await axios.get("https://hotpal.ru/api/base/vendor/update.php", {
      params: newValue
    });
    console.log('response user:', response);
    return true;
  }
  catch (err) {
    console.error('Ошибка при отправке данных:', err);

    // Возвращаем false или можем прокинуть ошибку вызывающему коду
    return false;
  }

};

