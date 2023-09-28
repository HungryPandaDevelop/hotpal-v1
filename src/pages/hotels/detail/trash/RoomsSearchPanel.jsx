
import RenderForm from 'components/forms/RenderFormRoomsSearch';

import { roomsSearchFields } from 'base/forms/roomsSearchFields';

import { connect } from 'react-redux';

const RoomsSearchPanel = ({
  formData,
  listings,
  setSearchListing
}) => {

  const submitSuccess = () => {
    console.log(formData.values)

  }



  return (

    <RenderForm
      fields={roomsSearchFields}
      btnSubmitText="Найти"
      submitSuccess={submitSuccess}
    />

  )
}


const mapStateToProps = (state) => {

  return {
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(RoomsSearchPanel);

