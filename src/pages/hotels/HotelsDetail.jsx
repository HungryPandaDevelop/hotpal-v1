import HotelMain from "./detail/HotelMain"
import RoomsSearchPanel from "./detail/RoomsSearchPanel"
import RoomsResults from "./detail/RoomsResults"
import HotelRewievs from "./detail/HotelRewievs"
import HotelWarning from "./detail/HotelWarning"
import RoomsDescription from "./detail/RoomsDescription"
import RoomsServices from "./detail/RoomsServices"
import HotelTabs from "./detail/HotelTabs"


const HotelsDetail = () => {
  return (
    <div className='hotel-detail'>
      <div className="stub"></div>

      <HotelMain />
      <HotelTabs />
      <RoomsSearchPanel />

      <RoomsResults />


      <RoomsDescription />

      <RoomsServices />

      <HotelWarning />
      <HotelRewievs />

      <div className="main-full">
        <div className="hotel-place-map">

        </div>
      </div>
    </div>
  )
}

export default HotelsDetail
