
export const userImg = (user) => {

  if (!user) { return false; };

  let img;
  if (user.imgsAccount) {

    if (typeof user.imgsAccount === 'object') {
      img = user.imgsAccount
    } else {
      img = JSON.parse(user.imgsAccount);
    }

    img = img.length > 0 ? img[0].url : false;


    if (img) {
      const encodedUrl = img.replace(/\s/g, '%20');
      return { backgroundImage: `url(${encodedUrl})` }
    }
  };
}


