import { onUsersSearch } from '../hooks/onUsersSearch';

import RenderForm from 'components/forms/RenderFormUsersSearch';


import { usersSearchFields } from 'base/forms/usersSearchFields';

import { connect } from 'react-redux';

const UsersSearchPanel = ({
  formData,
  listings,
  setSearchListing,
  disableTabs
}) => {

  const startValue = {}


  const submitSuccess = () => {
    console.log(formData.values)
    setSearchListing(onUsersSearch(listings, formData.values));
  }
  const resetForm = () => {
    setSearchListing(onUsersSearch(listings, startValue));
  }

  return (
    <>
      <RenderForm
        fields={usersSearchFields}
        submitSuccess={submitSuccess}
        resetForm={resetForm}
        disableTabs={disableTabs}
      // resetAll={resetAll}
      />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(UsersSearchPanel);

