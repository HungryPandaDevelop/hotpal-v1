
import RenderForm from 'components/forms/RenderFormTravel';
import moment from "moment";
import { settingsTrave } from 'base/forms/settingsFields';
import { addCardsDefault } from 'services/addListing';
import { connect } from 'react-redux';

const RoomsSearchPanel = ({
  formData,
  listing,
  setSearchListing,
  uid
}) => {

  const submitSuccess = () => {
    console.log(formData.values, uid, listing.id, listing.images[0])

    addCardsDefault(
      {
        'dateTravel': formData.values.dateTravelRange,
        'uid': uid,
        'idHotel': listing.id,
        'imgHotel': listing.images[0]
      }, 'travel').then(res => {

      });
  }



  return (

    <RenderForm
      fields={settingsTrave}
      btnSubmitText="Я буду в эти даты"
      initialValues={{ dateTravelRange: moment().format('DD.MM.YYYY') + ' - ' + moment().add(2, 'days').format('DD.MM.YYYY') }}
      submitSuccess={submitSuccess}
    />

  )
}


const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.usersSearch,
  }
}

export default connect(mapStateToProps)(RoomsSearchPanel);

