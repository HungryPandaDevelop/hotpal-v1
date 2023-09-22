import axios from 'axios';

// https://8124-37-204-10-198.ngrok-free.app

export const getRegion = (term) => {
  // console.log('search start')
  return axios.get("https://8124-37-204-10-198.ngrok-free.app/regions", {
    params: {
      query: term
    }
  }).then(res => {
    const response = res.data;
    // setRegionList(response)
    // console.log('search end', response)
    return response;
  });
}

export const getDetailHotels = (array, tempArrayPrices) => {
  return axios.get("https://8124-37-204-10-198.ngrok-free.app/hotels", {
    params: {
      arrayHotels: array
    }
  }).then(res => {

    // console.log('price', tempArrayPrices)
    // console.log('hotels full', res.data)
    // serArrayHotels(res.data)

    var renderArrHotels = [];

    tempArrayPrices.forEach(el => renderArrHotels.push({ ...res.data.find(e => e.id == el[0]), price: el[1] }));

    return renderArrHotels;
    // console.log('c', c)

    // setHotelList(c)
    // setHotelListLoad(false)
  });
}

export const getHotels = (id) => {
  console.log('loading....')

  let tempArrayHotels = [];
  let tempArrayPrices = [];


  return axios.get("http://localhost:5000/hotels-current", {
    params: {
      regionId: id
    }
  }).then(res => {
    // console.log('loaded', res)


    if (res.data.length > 0) {

      tempArrayHotels = res.data.map(el => {
        return el.id
      })
      tempArrayPrices = res.data.map(el => {
        return [el.id, el.rates[0].daily_prices[0]]
        // return el.id
      })
      // setArrayPrices(tempArrayPrices)
      return [tempArrayHotels, tempArrayPrices]
    }

    // getDetailHotels(tempArrayHotels, tempArrayPrices)
  });

 
}

