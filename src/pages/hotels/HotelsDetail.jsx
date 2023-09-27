import HotelMain from "./detail/HotelMain"
import TravelAddPanel from "./detail/TravelAddPanel"
// import RoomsSearchPanel from "./detail/RoomsSearchPanel"
import RoomsResults from "./detail/RoomsResults"
// import HotelRewievs from "./detail/HotelRewievs"
import HotelWarning from "./detail/HotelWarning"
import RoomsDescription from "./detail/RoomsDescription"
import RoomsServices from "./detail/RoomsServices"
// import HotelTabs from "./detail/HotelTabs"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { hotelPage, hotelsData } from 'pages/hotels/hooks/searchHotels';
import moment from "moment";

const HotelsDetail = () => {

  const params = useParams();
  const pageId = params.hotelId;

  const [loading, setLoading] = useState(true);
  const [listing, setListings] = useState([]);

  useEffect(() => {

    let dateFrom = moment().format('YYYY-MM-DD');
    let dateTo = moment().add(2, 'days').format('YYYY-MM-DD');
    // console.log('pageId', pageId)
    hotelPage(pageId, dateFrom, dateTo, 2).then(res => {
      // console.log('get res', res)
      hotelsData(res[0], res[1]).then(response => {

        setLoading(false)
        setListings(response[0])

        // console.log('get detail hotels', response)
      })
    })

  }, [])



  return loading ? (<div className="main-full">
    Loading...
  </div>) : (
    <div className='hotel-detail'>
      <div className="stub"></div>

      <HotelMain listing={listing} />
      <TravelAddPanel listing={listing} />
      {/* <HotelTabs listing={listing} /> */}
      {/* <RoomsSearchPanel listing={listing} /> */}

      <RoomsResults listing={listing} />


      <RoomsDescription listing={listing} />

      <RoomsServices listing={listing} />

      <HotelWarning listing={listing} />
      {/* <HotelRewievs /> */}

      <div className="main-full">
        <div className="hotel-place-map">

        </div>
      </div>
    </div>
  )
}

export default HotelsDetail
