import { saveListing } from 'services/saveListing';

import { useState, useEffect } from 'react';

import RenderForm from 'components/forms/RenderFormCabinet';

import { getSingleListing } from 'services/getSingleListing';

import { accountFields } from 'base/forms/accountFields';

import { connect } from 'react-redux';

import Tabs from 'pages/cabinet/parts/Tabs';

const Cabinet = ({ formData, account }) => {
  const [newValue, setNewValue] = useState(false);
  const [oldValue, setOldValue] = useState(formData);
  const [countChange, setCountChange] = useState(0);
  // useEffect(() => {

  //   if (oldValue && oldValue.values !== formData.values && countChange > 1) {
  //     setNewValue(true)
  //   }
  //   setOldValue(formData);
  //   setCountChange(countChange + 1)

  // }, [formData]);


  const submitSuccess = () => {
    saveListing(formData.values, account.uid, 'users');

    // setNewValue(false)
    // setOldValue(formData);
    // setCountChange(0)
  };


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
          user={account}
          submitSuccess={submitSuccess}
          newValue={newValue}
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

