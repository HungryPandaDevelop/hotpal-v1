import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderFormCabinet';

import { getSingleListing } from 'services/getSingleListing';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

import Tabs from 'pages/cabinet/parts/Tabs';

const Cabinet = ({ formData, account }) => {



  const submitSuccess = () => {

    saveListing(formData.values, account.uid, 'users');

  };



  if (account.loaded) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <div className="main-full cabinet-page">
        <Tabs active={0} />
        <RenderForm
          fields={accountFields}
          initialValues={account}
          user={account}
          submitSuccess={submitSuccess}
          newValue={formData}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    account: state.account,
    formData: state.form.formCabinet,
  }
}

export default connect(mapStateToProps)(Cabinet);

