import { useState, useEffect } from "react"
import { getSingleListing } from "services/getSingleListing"
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import UserTop from "./detail/UserTop";
import GoalsUsers from "./detail/GoalsUsers";
import InterestsUsers from "./detail/InterestsUsers";
import Location from "./detail/Location";
import Photos from "./detail/Photos";
import PersonalInfo from "./detail/PersonalInfo";

import Btns from "./detail/Btns";

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
            <div className="col-8">
              <UserTop user={user} />
              <div className="user-middle-info">
                <GoalsUsers user={user} />
                <Btns
                  user={user}
                  uid={uid}
                />
              </div>
              {user.currentLocation && <Location user={user} />}
            </div>
            <div className="col-4">
              {user.imgsAccount && <Photos user={user} />}
            </div>
            <div className="col-12">
              <div className="border-delimetr border-account"></div>
            </div>
            <div className="col-8">
              <InterestsUsers user={user} />
            </div>
            <div className="col-4">
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