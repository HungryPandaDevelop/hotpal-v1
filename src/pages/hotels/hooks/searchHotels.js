import axios from 'axios';

// https://8124-37-204-10-198.ngrok-free.app
const url = 'https://57b2-37-204-10-198.ngrok-free.app';
export const autocompleteSearch = (term) => {
 
  // console.log('search start')
  return axios.get(url+"/autocomplete-search", {
    headers: {
      'ngrok-skip-browser-warning': true
    },
    params: {
      query: term
    }
  }).then(res => {
    const response = res;
    // setRegionList(response)
    // console.log('search end', response)
    return response;
  });
}

export const hotelsData = (array, tempArrayPrices) => {
  // console.log('start hotelsData', array)
  return axios.get(url+"/hotels-data", {
    headers: {
      'ngrok-skip-browser-warning': true
    },
    params: {
      arrayHotels: array
    }
  }).then(res => {
    // console.log('res hotelsData')
    // console.log('price', tempArrayPrices)
    // console.log('hotels full', res.data)
    // serArrayHotels(res.data)

    var renderArrHotels = [];

    tempArrayPrices.forEach(el => renderArrHotels.push({ ...res.data.find(e => e.id === el[0]), price: el[1] }));
    
    return renderArrHotels;
    // console.log('c', c)

    // setHotelList(c)
    // setHotelListLoad(false)
  });
}

export const regionSearch = (id,dateFrom,dateTo,personCount) => {
  console.log('loading....', dateFrom,dateTo)

  let tempArrayHotels = [];
  let tempArrayPrices = [];


  return axios.get(url+"/region-search", {
    headers: {
      'ngrok-skip-browser-warning': true
    },
    params: {
      regionId: id,
      dateFrom: dateFrom,
      dateTo: dateTo,
      personCount: personCount,
    }
  }).then(res => {
    // console.log('loaded', res)
    if (res.data.length > 0) {

      tempArrayHotels = res.data.map(el => {
        return el.id
      })
      tempArrayPrices = res.data.map(el => {
        return [el.id, el.rates]
        // return el.id
      })
      // setArrayPrices(tempArrayPrices)
      return [tempArrayHotels, tempArrayPrices]
    }

    // getDetailHotels(tempArrayHotels, tempArrayPrices)
  });

}

export const geoSearch = (longitude, latitude,dateFrom,dateTo,personCount) => {
  console.log('loading....', dateFrom,dateTo)

  let tempArrayHotels = [];
  let tempArrayPrices = [];


  return axios.get(url+"/geo-search", {
    headers: {
      'ngrok-skip-browser-warning': true
    },
    params: {
      longitude: longitude,
      latitude: latitude,
      dateFrom: dateFrom,
      dateTo: dateTo,
      personCount: personCount,
    }
  }).then(res => {
    // console.log('loaded', res)
    if (res.data.length > 0) {

      tempArrayHotels = res.data.map(el => {
        return el.id
      })
      tempArrayPrices = res.data.map(el => {
        return [el.id, el.rates]
        // return el.id
      })
      // setArrayPrices(tempArrayPrices)
      return [tempArrayHotels, tempArrayPrices]
    }

    // getDetailHotels(tempArrayHotels, tempArrayPrices)
  });

}

export const hotelPage = (id,dateFrom,dateTo,personCount) => {
  console.log('loading....', dateFrom,dateTo)

  let tempArrayHotels = [];
  let tempArrayPrices = [];


  return axios.get(url+"/hotel-page", {
    headers: {
      'ngrok-skip-browser-warning': true
    },
    params: {
      id: id,
      dateFrom: dateFrom,
      dateTo: dateTo,
      personCount: personCount,
    }
  }).then(res => {
    console.log('loaded', res)


    if (res.data.length > 0) {

      tempArrayHotels = res.data.map(el => {
        return el.id
      })
      tempArrayPrices = res.data.map(el => {
        return [el.id, el.rates]
        // return el.id
      })
      // setArrayPrices(tempArrayPrices)
      return [tempArrayHotels, tempArrayPrices]
    }

    // getDetailHotels(tempArrayHotels, tempArrayPrices)
  });

 
}
