
import RenderForm from 'components/forms/RenderFormHotelsSearch';
import { getHotels, getDetailHotels } from 'pages/hotels/hooks/searchHotels'

import { hotelsSearchFields } from 'base/forms/hotelsSearchFields';

import { connect } from 'react-redux';

const HotelsSearchPanel = ({
  formData,
  setListings,
  setLoading
}) => {



  const submitSuccess = () => {

    setLoading(true)
    let cityId = formData?.values?.city ? formData.values.city : '2395'

    getHotels(cityId).then(res => {
      console.log('res', res)
      getDetailHotels(res[0], res[1]).then(response => {

        setLoading(false)
        setListings(response)
        console.log('ressss', response)
      })
    })
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

