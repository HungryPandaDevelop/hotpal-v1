
import { useState } from 'react';

import { onUsersSearch } from '../hooks/onUsersSearch';

import RenderForm from 'components/forms/RenderFormUsersSearch';
import RenderFormMini from 'components/forms/RenderFormUsersMiniSearch';


import { usersSearchFields } from 'base/forms/usersSearchFields';
import { usersSearchFieldsMini } from 'base/forms/usersSearchFields';

import {addSearch} from 'pages/mysql/addSearch';

import { connect } from 'react-redux';
import {timestampCustom} from 'services/timestampCustom';
import Tabs from 'components/forms/formSearch/Tabs';

const UsersSearchPanel = ({
  formData,
  listings,
  setSearchListing,
  disableTabs,
  miniPanel,
  account
}) => {

  const startValue = {}

  const [showMobile, setShowMobile] = useState(false);

  const submitSuccess = () => {

    setSearchListing(onUsersSearch(listings, formData.values));
    setShowMobile(false);

    addSearch({uid: account.uid, timestamp: timestampCustom(), type: 'user-search', ...formData.values});

  }
  const resetForm = () => {
    setSearchListing(onUsersSearch(listings, startValue));
  }

  return (
    <>
      <div className={!miniPanel ? ('main-full') : ''}>
        <div className="show-filter-mobile-container">
          <Tabs active="users" />
          <div className={`show-filter-mobile ${showMobile ? 'active' : ''}`} onClick={() => { setShowMobile(true) }}>
          </div>
          {showMobile && (
            <div className="show-filter-close" onClick={() => { setShowMobile(false) }}></div>
          )}
        </div>
      </div>
      {miniPanel ? (
        <RenderFormMini
          fields={usersSearchFieldsMini}
          submitSuccess={submitSuccess}
          resetForm={resetForm}
          disableTabs={disableTabs}
          showMobile={showMobile}
          setShowMobile={setShowMobile}
        />
      ) : (<RenderForm
        fields={usersSearchFields}
        submitSuccess={submitSuccess}
        resetForm={resetForm}
        disableTabs={disableTabs}
        showMobile={showMobile}
        setShowMobile={setShowMobile}
      />)}

    </>
  )
}

const mapStateToProps = (state) => {

  return {
    account: state.account,
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(UsersSearchPanel);

