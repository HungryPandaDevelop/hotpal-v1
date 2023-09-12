import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderFormCabinet';

import { getSingleListing } from 'services/getSingleListing';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

import Tabs from 'pages/cabinet/parts/Tabs';

const Cabinet = ({ formData, account }) => {


  // const [listings, setListings] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {

  //   // console.log('account', account)

  //   getSingleListing('users', uid).then(res => {
  //     setListings(res);
  //     setLoading(false);
  //   })
  // }, []);

  const submitSuccess = () => {
    saveListing(formData.values, account.uid, 'users');
  };

  // console.log('account.loaded', account.loaded, account)
  if (account.loaded) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <div className="main-full cabinet-page">
        <Tabs active={0} />
        <RenderForm
          fields={accountFields}
          btnSubmiText="Сохранить"
          // initialValues={listings}
          initialValues={account}
          submitSuccess={submitSuccess}
        />
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

