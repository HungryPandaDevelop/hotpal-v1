import { useState, useEffect } from 'react'



import BtnFavorites from 'pages/users/btns/BtnFavorites';
import BtnLikes from 'pages/users/btns/BtnLikes';
import BtnChat from 'pages/users/btns/BtnChat';
import { getListing } from 'services/getListings';


const Btns = ({ user, uid }) => {


  const [whiteList, setWhitList] = useState([]);
  const [whiteListLoas, setWhiteListLoad] = useState(true);
  const [blackList, setBlackList] = useState([]);
  const [blackListLoad, setBlackListLoad] = useState(true);



  useEffect(() => {
    getListing('white-list', 'userRef', uid).then((res) => {
      console.log('r', res, uid)
      setWhitList(res);
      setWhiteListLoad(false)
    });
    getListing('black-list', 'userRef', uid).then((res) => {
      setBlackList(res);
      setBlackListLoad(false)
    });

  }, []);


  return (
    <div className="btn-container">

      <BtnChat
        user={user}
        uid={uid}
      />
      {(<BtnLikes
        user={user}
      />)}

      {!whiteListLoas && <BtnFavorites
        user={user}
        uid={uid}
        collections={whiteList}
        base='white-list'
        btnClass='favorites'
      />}
      {!blackListLoad && (<BtnFavorites
        user={user}
        uid={uid}
        collections={blackList}
        base='black-list'
        btnClass='blacklist'
      />)}
    </div>
  )
}

export default Btns