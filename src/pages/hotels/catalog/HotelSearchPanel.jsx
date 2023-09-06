
import RenderForm from 'components/forms/RenderFormHotelsSearch';

import { hotelsSearchFields } from 'base/forms/hotelsSearchFields';

import { connect } from 'react-redux';

const HotelsSearchPanel = ({
  formData,
  listings,
  setSearchListing
}) => {



  const submitSuccess = () => {
    console.log(formData.values)

  }
  const resetForm = () => {


  }

  return (
    <>
      <RenderForm
        fields={hotelsSearchFields}
        submitSuccess={submitSuccess}
        resetForm={resetForm}
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

export default connect(mapStateToProps)(HotelsSearchPanel);

