import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderFormCabinet';

import { getSingleListing } from 'services/getSingleListing';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

import Tabs from 'pages/cabinet/parts/Tabs';

const Cabinet = ({ uid, formData, account }) => {


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // console.log('account', account)

    getSingleListing('users', uid).then(res => {
      setListings(res);
      setLoading(false);
    })
  }, []);

  const submitSuccess = () => {

    saveListing(formData.values, uid, 'users');
  }
  if (loading) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <div className="main-full">
        <Tabs active={0} />
        <RenderForm
          fields={accountFields}
          btnSubmiText="Сохранить"
          initialValues={listings}
          // initialValues={account}
          submitSuccess={submitSuccess}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    account: state.account,
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Cabinet);

