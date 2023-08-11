
export const userImg = ( user ) => {

  const img = user.imgsAccount ? user.imgsAccount[0] : false;

  if(img){
    return { backgroundImage: `url(${img})` }
  }

}


