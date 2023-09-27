
import RenderForm from 'components/forms/RenderFormHotelsSearch';
import { regionSearch, hotelsData } from 'pages/hotels/hooks/searchHotels';

import moment from "moment";

import { hotelsSearchFields } from 'base/forms/hotelsSearchFields';

import { connect } from 'react-redux';

const HotelsSearchPanel = ({
  formData,
  setListings,
  setLoading
}) => {



  const submitSuccess = () => {
    // console.log('formData.values', moment().format('YYYY-MM-DD'))
    console.log('formData.values', moment().add(2, 'days').format('YYYY-MM-DD'))
    setLoading(true)
    let regionId = formData.values.city;
    let personCount = formData.values.personCount;
    let currentDate = formData.values.dateRange.split(' - ');
    // let dateFrom = moment(currentDate[0]).format('YYYY-MM-DD');


    let dateTo = currentDate[1].split(".").reverse().join("-");
    let dateFrom = currentDate[0].split(".").reverse().join("-");


    // console.log(currentDate[0], dateFrom)
    // console.log(currentDate[1], dateTo)

    regionSearch(regionId, dateFrom, dateTo, personCount).then(res => {
      console.log('getHotels', regionId, res[0], res[1])
      hotelsData(res[0], res[1]).then(response => {

        setLoading(false)
        setListings(response)
        console.log('get detail hotels', response)
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
        initialValues={{ city: 2395, personCount: 2, dateRange: moment().format('DD.MM.YYYY') + ' - ' + moment().add(2, 'days').format('DD.MM.YYYY') }}
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

