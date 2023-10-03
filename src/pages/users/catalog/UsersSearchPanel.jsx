import { onUsersSearch } from '../hooks/onUsersSearch';

import RenderForm from 'components/forms/RenderFormUsersSearch';
import RenderFormMini from 'components/forms/RenderFormUsersMiniSearch';


import { usersSearchFields } from 'base/forms/usersSearchFields';
import { usersSearchFieldsMini } from 'base/forms/usersSearchFields';

import { connect } from 'react-redux';

const UsersSearchPanel = ({
  formData,
  listings,
  setSearchListing,
  disableTabs,
  miniPanel
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
      {miniPanel ? (
        <RenderFormMini
          fields={usersSearchFieldsMini}
          submitSuccess={submitSuccess}
          resetForm={resetForm}
          disableTabs={disableTabs}
        />
      ) : (<RenderForm
        fields={usersSearchFields}
        submitSuccess={submitSuccess}
        resetForm={resetForm}
        disableTabs={disableTabs}
      />)}

    </>
  )
}

const mapStateToProps = (state) => {

  return {
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(UsersSearchPanel);

