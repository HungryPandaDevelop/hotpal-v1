import { Field } from 'redux-form';
import { useEffect, useState, useRef } from 'react';

// import ClearYaMap from 'components/partInputCoords/ClearYaMap'

const TempateInput = (props) => {

  // const [currentLocation, setCurrentLocation] = useState([0, 0]);

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    placeholder,
    wrapClass,
    setGetCoords
  } = props.obj;

  const initSuggest = () => {
    // console.log('sugg 1')
    const { ymaps } = window;
    if (ymaps.SuggestView) {

      const suggest = new ymaps.SuggestView('coords-ya');

      suggest.events.add('select', (e) => {

        const val = String(e.get('item').value.trim());

        const myGeocoder = ymaps.geocode(val);

        myGeocoder
          .then(res => {
            const coords = [res.geoObjects.get(0).geometry._coordinates[0], res.geoObjects.get(0).geometry._coordinates[1]]
            // console.log('coords', coords)
            setGetCoords(coords)
          });
      });
    }
  }


  useEffect(() => {

    setTimeout(() => {
      initSuggest()
    }, 500);



    // const loadTest = () => {
    //   console.log('sugg 1');
    // }

    // window.addEventListener('load', loadTest);

    // return () => {
    //   window.removeEventListener('load', loadTest);
    // }
  }, []);




  return (
    <div className={wrapClass}>

      {label && <label htmlFor='coords-ya' className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}

      <input
        // {...input}
        id='coords-ya'
        type="text"
        className="input-decorate"
        defaultValue={input.value.address}
        autoComplete="off"
        placeholder={placeholder}
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