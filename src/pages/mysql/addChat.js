import axios from 'axios';


export const addChat = async ({userRefName, userLikesName, id_chat, timestamp, userRef, userLikes, messages}) => {

  try {
    const response = await axios.get("https://hotpal.ru/api/base/vendor/create_chat.php", {
      params: {
        id_chat: id_chat,
        timestamp: timestamp,
        userRefName: userRefName,
        userRef: userRef,
        userLikesName: userLikesName,
        userLikes: userLikes,
        messages: messages,
        
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

