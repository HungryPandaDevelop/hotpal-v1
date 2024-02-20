import axios from 'axios';


export const deleteChat = async (id_chat) => {
  console.log('send', id_chat)
  try {
    const response = await axios.get("https://hotpal.ru/api/base/vendor/delete_chat.php", {
      params: {
        id_chat: id_chat,
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

