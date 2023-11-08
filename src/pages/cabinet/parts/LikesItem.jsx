import { getSingleListing } from 'services/getSingleListing';
import { useState, useEffect } from 'react'
import { renderStatus } from 'pages/cabinet/parts/LikesItem/renderStatus';

import RenderUserBtn from 'pages/cabinet/parts/LikesItem/RenderUserBtn';
import RenderRead from 'pages/cabinet/parts/LikesItem/RenderRead';
import RemderImg from 'pages/cabinet/parts/LikesItem/RemderImg';

import { onDelete } from 'pages/cabinet/parts/LikesItem/likesActions'
import { onRead } from 'pages/cabinet/parts/LikesItem/likesActions'

import { Link } from 'react-router-dom';
const LikesItem = ({
  like,
  uid,
  typeLike
}) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  let userSide = uid === like.interlocutors[0] ? true : false;
  let userLoadId = uid === like.interlocutors[0] ? like.interlocutors[1] : like.interlocutors[0];

  useEffect(() => {

    getSingleListing('users', userLoadId).then((getuser) => {
      setUser(getuser);
      setLoading(false);
    });


  }, [like]);

  if (loading) { return '' }


  if ((typeLike === 'out' && !userSide) || (typeLike === 'in' && userSide)) { return false }

  if (!user) { return false; }

  return (
    <div

      className="like-item"
    // onMouseEnter={() => { onRead(like, uid) }}
    >
      {/* <RenderRead like={like} uid={uid} /> */}

      <Link to={`/users-catalog/${userLoadId}`} className="img-cover-info">
        <RemderImg user={user} />
        <h3>{user.name}</h3>
      </Link>

      <div className="btn-container">
        {userSide ? renderStatus(like) : (
          <>
            <div className="like-hint">
              Ваш ответ на симпатию
            </div>
            <RenderUserBtn
              like={like}
              status="see"
              textBtn="Оцениваю"
            />
            <RenderUserBtn
              like={like}
              status="agree"
              textBtn="Нравится"
            />
            <RenderUserBtn
              like={like}
              status="disagree"
              textBtn="Не нравится"
            />
          </>
        )}
        <div
          className="like-status-btn trash-like-btn"
          onClick={() => { onDelete(like.id, setLoading) }}
          title="С глаз долой"
        ></div>
      </div>
    </div>
  )
}

export default LikesItem