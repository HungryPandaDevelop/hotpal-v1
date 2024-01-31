import axios from 'axios';


export const deleteMysql = async (uid) => {
  console.log('send', uid)
  try {
    const response = await axios.get("https://hotpal.ru/api/base/vendor/delete.php", {
      params: {
        uid: uid,
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

