
import RenderForm from 'components/forms/RenderFormHotelsSearchMap';
import { geoSearch, hotelsData } from 'pages/hotels/hooks/searchHotels';
import { getMaxListing } from 'components/getMaxListing';
import { useEffect, useState } from 'react';

import moment from "moment";

import { hotelsSearchFields } from 'base/forms/hotelsSearchFields';

import { connect } from 'react-redux';

const HotelSearchPanelMap = ({
  formData,
  setListings,
  loading,
  setLoading,
  listingsCoords,
  setSearchDate,
  travelList
}) => {

  const centerCity = [55.755864, 37.617698];

  const submitSuccess = () => {

    setLoading(true)
    // console.log('getHotels formData.values', formData.values)

    // let regionId = formData.values.city;
    let personCount = formData.values.personCount;


    let currentDate = formData.values.dateRange.split(' - ');

    let dateFrom = currentDate[0].split(".").reverse().join("-");
    let dateTo = currentDate[1].split(".").reverse().join("-");

    setSearchDate([dateFrom, dateTo]);
    let longitude = formData.values.geoHotels[1];
    let latitude = formData.values.geoHotels[0];

    geoSearch(longitude, latitude, dateFrom, dateTo, personCount).then(res => {
      // console.log('getHotels', res)
      if (res) {
        hotelsData(res).then(response => {
          console.log(response)



          // console.log('travelList', getMaxListing(travelList, 'idHotel'))
          let hotelCount = getMaxListing(travelList, 'idHotel');


          // console.log(hotelCount);


          var renderCountTravelHotels = [];

          response.forEach((el, index) => {

            let findCount = hotelCount.find(e => e.idHotel === el.id)

            renderCountTravelHotels.push({ countTravels: findCount ? findCount.count : 0, ...el })

          });

          // console.log(renderCountTravelHotels.sort((a, b) => b.countTravels - a.countTravels));

          setLoading(false)

          setListings(renderCountTravelHotels.sort((a, b) => b.countTravels - a.countTravels))

        });
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

export default connect(mapStateToProps)(HotelSearchPanelMap);

