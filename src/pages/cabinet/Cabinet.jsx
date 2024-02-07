// import { saveListing } from 'services/saveListing';

// import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderFormCabinet';

// import { getSingleListing } from 'services/getSingleListing';
import { updateMysql } from 'pages/mysql/updateMysql'
import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

import Tabs from 'pages/cabinet/parts/Tabs';
import ActionFn from 'store/actions';

import { calculateAge } from 'pages/users/hooks/calculateAge';

const Cabinet = ({ formData, account, ActionFn }) => {



  const submitSuccess = async () => {

    // saveListing(formData.values, account.uid, 'users');
    // console.log(formData.values)

    let newValue = {...formData, age: calculateAge(formData.values.dateBerth)};
    await updateMysql(newValue, account.uid);

    ActionFn('SET_INFO_ACCOUNT', { ...account, ...formData.values });



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

export default connect(mapStateToProps, { ActionFn })(Cabinet);

