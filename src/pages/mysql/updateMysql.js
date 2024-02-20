import axios from 'axios';


export const updateMysql = async (props) => {

  console.log('u', props.uid)

  try {

    let jsonGoals;
    let jsonInterests;
    let jsonImgsAccount;

    if (typeof goals === 'object') {
      jsonGoals = JSON.stringify(props.goals);
    } else {
      jsonGoals = props.goals;
    }

    if (typeof interests === 'object') {
      jsonInterests = JSON.stringify(props.interests);
    } else {
      jsonInterests = props.interests;
    }

    if (typeof imgsAccount === 'object') {
      jsonImgsAccount = JSON.stringify(props.imgsAccount);
    } else {
      jsonImgsAccount = props.imgsAccount;
    }

    const newValue = { ...props, jsonGoals, jsonInterests, jsonImgsAccount }
    console.log('Все props:', props, props.chats);
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

