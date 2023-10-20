
export const userImg = ( user ) => {

  if (!user){return false};
 
  const img = user.imgsAccount && user.imgsAccount.length > 0 ? user.imgsAccount[0].url : false;

  if(img){
    return { backgroundImage: `url(${img})` }
  }

}


