
import RenderForm from 'components/forms/RenderFormHotelsSearch';
import { regionSearch, hotelsData } from 'pages/hotels/hooks/searchHotels';

import { useEffect, useState } from 'react';

import moment from "moment";

import { hotelsSearchFields } from 'base/forms/hotelsSearchFields';

import { connect } from 'react-redux';

const HotelsSearchPanel = ({
  formData,
  setListings,
  setLoading
}) => {

  const submitSuccess = () => {

    setLoading(true)

    let regionId = formData.values.city;
    let personCount = formData.values.personCount;


    let currentDate = formData.values.dateRange.split(' - ');
    let dateTo = currentDate[1].split(".").reverse().join("-");
    let dateFrom = currentDate[0].split(".").reverse().join("-");

    regionSearch(regionId, dateFrom, dateTo, personCount).then(res => {
      console.log('getHotels', res)
      hotelsData(res[0], res[1]).then(response => {

        setLoading(false)
        setListings(response)
      })
    })
  }

  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {

    if (formData && firstLoad) {
      setFirstLoad(false)
      submitSuccess();
    }

  }, [formData])






  return (
    <>
      <RenderForm
        fields={hotelsSearchFields}
        submitSuccess={submitSuccess}
        initialValues={{ city: 2395, personCount: 2, dateRange: moment().format('DD.MM.YYYY') + ' - ' + moment().add(2, 'days').format('DD.MM.YYYY') }}
      // resetAll={resetAll}
      />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    formData: state.form.hotelsSearch,
  }
}

export default connect(mapStateToProps)(HotelsSearchPanel);

