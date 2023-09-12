



import { useState, useEffect } from 'react';

import SettingTabs from 'pages/cabinet/settings/SettingTabs';


// import { getSingleListing } from 'services/getSingleListing';



import { connect } from 'react-redux';

import PasswordsTabs from 'pages/cabinet/settings/Passwords';
import PersonalDataTabs from 'pages/cabinet/settings/PersonalData';
import PrivacyTabs from 'pages/cabinet/settings/Privacy';


import Tabs from 'pages/cabinet/parts/Tabs';

const Cabinet = ({ account, formData }) => {

  const [currentTab, setCurrentTab] = useState(0);

  // const [listings, setListings] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {

  //   getSingleListing('users', uid).then(res => {
  //     setListings(res);
  //     setLoading(false);
  //   })
  // }, []);


  const renderTabs = (num) => {
    switch (num) {
      case 0:
        return (
          <PasswordsTabs
            formData={formData}
          />
        )
      case 1:
        return (
          <PersonalDataTabs
            formData={formData}
            uid={account.uid}
            listings={account}
          />
        )
      case 2:
        return (
          <PrivacyTabs
            formData={formData}
            uid={account.uid}
            listings={account}
          />
        )
      default:
    }
  }

  if (account.loaded) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs
          active={1}

        />
        <SettingTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />

        <div className="border-container border-null-top account-main" >
          {renderTabs(currentTab)}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    account: state.account,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Cabinet);

