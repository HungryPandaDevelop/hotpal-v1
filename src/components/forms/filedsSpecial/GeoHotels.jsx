import { Field } from 'redux-form';
import { useEffect, useState, useRef } from 'react';

import ClearYaMap from 'components/partInputCoords/ClearYaMap'

const TempateInput = (props) => {

  // const [currentLocation, setCurrentLocation] = useState([55.714247, 37.764375]);

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    wrapClass,
    getCoords,
    loading,
    listingsCoords
  } = props.obj;


  // useEffect(() => {
  //   console.log('listingsCoords', listingsCoords)
  // }, []);

  const filterCoordsFromHotel = () => {
    let tempCoords = [];
    !loading && listingsCoords && listingsCoords.map((el, index) => {
      // if (index < 5) {
      tempCoords.push([el.latitude, el.longitude])
      // }

    })

    // console.log('tempCoords', tempCoords)

    return tempCoords.length > 0 ? tempCoords : null;
    // return [[55.75949478149414, 37.6098747253418]]
  }

  // console.log(filterCoordsFromHotel())


  const changePosition = (e) => {
    // console.log('change', e.originalEvent)
    input.onChange(e.originalEvent.newCenter);
  }

  return (
    <div className={wrapClass}>

      {label && <label htmlFor='coords-ya' className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}


      <ClearYaMap
        currentLocation={filterCoordsFromHotel()}
        multy={true}
        centerPosition={getCoords}
        changePosition={changePosition}
      />

    </div>

  )
}
const RenderInput = ({ obj }) => {


  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
  />
}


export default RenderInput