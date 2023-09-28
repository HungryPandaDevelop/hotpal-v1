import ClearYaMap from "components/partInputCoords/ClearYaMap"

const HotelPlace = ({ listing }) => {
  return (
    <div className="main-full hotel-place">
      <h3>Расположение</h3>
      <div className="hotel-place-map">
        <ClearYaMap currentLocation={[listing.latitude, listing.longitude]} />
      </div>
    </div>
  )
}

export default HotelPlace
