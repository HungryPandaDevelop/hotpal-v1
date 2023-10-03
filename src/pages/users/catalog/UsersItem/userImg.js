
export const userImg = ( user ) => {

  if (!user){return false};

  const img = user.imgsAccount ? user.imgsAccount[0] : false;

  if(img){
    return { backgroundImage: `url(${img})` }
  }

}


