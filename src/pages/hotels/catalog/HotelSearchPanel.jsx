
import RenderForm from 'components/forms/RenderFormHotelsSearch';
import { geoSearch, hotelsData } from 'pages/hotels/hooks/searchHotels';

import { useEffect, useState } from 'react';

import moment from "moment";

import { hotelsSearchFields } from 'base/forms/hotelsSearchFields';

import { connect } from 'react-redux';

const HotelsSearchPanel = ({
  formData,
  setListings,
  loading,
  setLoading,
  listingsCoords
}) => {

  const centerCity = [55.755864, 37.617698];

  const submitSuccess = () => {

    setLoading(true)
    console.log('getHotels formData.values', formData.values)

    // let regionId = formData.values.city;
    let personCount = formData.values.personCount;


    let currentDate = formData.values.dateRange.split(' - ');
    let dateTo = currentDate[1].split(".").reverse().join("-");
    let dateFrom = currentDate[0].split(".").reverse().join("-");

    let longitude = formData.values.geoHotels[1];
    let latitude = formData.values.geoHotels[0];

    geoSearch(longitude, latitude, dateFrom, dateTo, personCount).then(res => {
      // console.log('getHotels', res)
      if (res) {
        hotelsData(res[0], res[1]).then(response => {
          setLoading(false)
          setListings(response)
        })
      } else {
        setLoading(false)
        setListings(null)
      }
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
        initialValues={{ geoHotels: centerCity, city: 2395, personCount: 2, dateRange: moment().format('DD.MM.YYYY') + ' - ' + moment().add(2, 'days').format('DD.MM.YYYY') }}
        loading={loading}
        listingsCoords={listingsCoords}
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

