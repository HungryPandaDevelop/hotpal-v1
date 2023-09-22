import { Field } from 'redux-form';
import { useState, useEffect, useRef } from 'react';

import { russianCities } from 'base/russianCities';

import { getRegion } from 'pages/hotels/hooks/searchHotels';

const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    placeholder,
    wrapClass,
  } = props.obj;

  const [idTime, setIdTime] = useState(null)

  const [сhoiseName, setСhoiseName] = useState(placeholder ? placeholder : 'Выбрать город');

  const [filterVal, setFilterVal] = useState('');

  const [russianCitiesList, setRussianCities] = useState([]);

  const selectRef = useRef(null);
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);


  useEffect(() => {


    // if (!input.value) {
    //   setСhoiseName(placeholder ? placeholder : 'Выбрать город')
    // }

    inputRef.current.addEventListener("focus", selectOpen);

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick)
    };


    function handleClick(e) {
      if (selectRef && selectRef.current) {
        const ref = selectRef.current
        if (!ref.contains(e.target)) {
          setOpen(false)
        }
      }
    }

    function selectOpen() {
      setOpen(true)
    }



  }, [input]);

  const choiseCity = (e) => {

    setFilterVal('');

    setRussianCities('');

    setFilterVal(e.currentTarget.getAttribute('namecity'));
    setOpen(false);

    setСhoiseName(e.currentTarget.getAttribute('namecity'));
    input.onChange(e.currentTarget.getAttribute('id'));
  }



  // let searchTimeId = null;
  // console.log('1', searchTimeId)
  const onSearchCity = (e) => {

    // console.log('2', searchTimeId)
    clearTimeout(idTime)

    setIdTime(setTimeout(() => {

      getRegion(e.target.value).then(res => {
        console.log('res', res)
        setRussianCities(res)
      })

    }, 1000))
    // console.log('3', searchTimeId)

    setFilterVal(e.target.value);

    // const dataSearch = russianCities.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    // setRussianCities(dataSearch)

  }

  const clearFilterVal = () => {
    setFilterVal('');
    // setСhoiseName(placeholder ? placeholder : 'Выбрать город');
    setRussianCities('');
    // setOpen(false);
  }

  const renderCityList = (russianCitiesListParam) => {

    return (russianCitiesListParam.length > 0) ? russianCitiesListParam.map((item, index) => (
      <li
        key={index}
        // coords={[item.coords.lat, item.coords.lon]}
        namecity={item.name}
        onClick={choiseCity}
        id={item.id}

      >
        {item.name}</li>
    )) : (<></>);
  }


  return (
    <div className={wrapClass}>

      {label && <label><b>{label}</b>{labelSecond && <div className='hint-input'><i><span>{labelSecond}</span></i></div>}</label>}
      <div
        ref={selectRef}
        className={`custom-select search-select ${open ? 'active' : ''}`}

      >
        <div className={`search-field-container ${filterVal.length > 0 ? 'search-choises' : ''}`}>
          <em
            onClick={clearFilterVal}
          ></em>
          <input
            type="text"
            value={filterVal}
            ref={inputRef}
            className="search-input input-decorate"
            onChange={onSearchCity}
            placeholder="Введите название города"
          />
        </div>
        {open && (
          <ul
            className='ln'
          >
            {renderCityList(russianCitiesList)}
          </ul>
        )}
      </div>
    </div>


  );
}



const RenderInputCity = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}

  />;
}


export default RenderInputCity;