import axios from 'axios';


export const getMysql = async (uid) => {
  try {
    const response = await axios.get("https://hotpal.ru/api/base/vendor/get_single.php", {
      params: {
        uid: uid,
      }
    });

    return response.data;
  } catch (err) {
    console.error('Ошибка при выполнении запроса:', err);
    throw err;
  }

};

