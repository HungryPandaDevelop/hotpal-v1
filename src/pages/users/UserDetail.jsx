import { useState, useEffect } from "react"
import { getSingleListing } from "services/getSingleListing"
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import UserTop from "./detail/UserTop";
import GoalsUsers from "./detail/GoalsUsers";
import InterestsUsers from "./detail/InterestsUsers";
import Photos from "./detail/Photos";
import PersonalInfo from "./detail/PersonalInfo";
import Btns from "./detail/Btns";

import Travel from 'pages/cabinet/Travel';

const UserDetail = ({ uid, sympathys }) => {

  const params = useParams();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleListing('users', params.userId).then((getuser) => {

      setUser(getuser);
      setLoading(false);
    })
  }, []);

  if (loading) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <div className="main-full">
        <div className="border-container">
          <div className="main-grid">
            <div className="col-4 col-xs-12 photos-mobile">
              {user.imgsAccount && <Photos user={user} />}
            </div>
            <div className="col-8 col-xs-12">

              <UserTop user={user} />
              <div className="user-middle-info">
                <GoalsUsers user={user} />
                <Btns
                  user={user}
                  uid={uid}
                />
              </div>

              <div className="travel-user">
                <div className="travel-current travel-current-detail">
                  <h3>Tекущее расположение</h3>
                  <div className="travel-current-line"><i className="marker-ico--blue"></i>{user.hotelFind}</div>
                  <div className="travel-current-line"><i className="calendar-ico--blue"></i>{user.hotelDate}</div>
                </div>
                <div className="travel-story">
                  <h3>Будущие путешествия</h3>
                  <Travel catalogUserId={user.uid} />


                </div>
              </div>


            </div>
            <div className="col-4 hidden-xs">
              {user.imgsAccount && <Photos user={user} />}
            </div>
            <div className="col-12">
              <div className="border-delimetr border-account"></div>
            </div>
            <div className="col-8 col-xs-12">
              <InterestsUsers special="special-tags" user={user} />
            </div>
            <div className="col-4 col-xs-12">
              <PersonalInfo user={user} />
            </div>
            <div className="col-12">
              <div className="user-description">
                <h3>О себе:</h3>
                <div>
                  {user.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stub"></div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
  }
}

export default connect(mapStateToProps)(UserDetail);