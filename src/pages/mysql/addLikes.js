import axios from 'axios';


export const addLikes = async ({userRefName, userLikesName, id_like, timestamp, userRef, userLikes}) => {

  try {
    const response = await axios.get("https://hotpal.ru/api/base/vendor/create_likes.php", {
      params: {
        id_like: id_like,
        timestamp: timestamp,
        userRefName: userRefName,
        userRef: userRef,
        userLikesName: userLikesName,
        userLikes: userLikes,
        
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

