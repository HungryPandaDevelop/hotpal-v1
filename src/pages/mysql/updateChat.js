import axios from 'axios';


export const updateChat = async (props) => {



  try {


    const response = await axios.get("https://hotpal.ru/api/base/vendor/update_chat.php", {
      params: props
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

