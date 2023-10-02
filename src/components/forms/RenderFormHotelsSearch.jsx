import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

import Tabs from 'components/forms/formSearch/Tabs';

const HotelsSearchPanel = (props) => {




  const {
    fields,
    waitAnsw,
    submitSuccess,
    reset,
    resetForm,
    initialValues,
    loading,
    listingsCoords
  } = props;



  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();

  };

  const [showMobile, setShowMobile] = useState(false);
  const [getCoords, setGetCoords] = useState(initialValues.geoHotels);

  // const mutateValue = {...fields.geoHotels, cityName: 'testing'};

  return (
    <div className={`main-full border-search-hotels ${showMobile ? 'active' : ''}`}>
      <Tabs active="hotels" />
      <div className="show-filter-mobile-container">
        <div className={`show-filter-mobile ${showMobile ? 'active' : ''}`} onClick={() => { setShowMobile(!showMobile) }}>
        </div>
      </div>
      <div className={`border-container border-null-left border-container-search`}>

        <div className="">
          {/* <RenderFields
            type="single"
            fields={fields.city}
          /> */}
          <RenderFields
            type="single"
            fields={{ ...fields.yaString, setGetCoords: setGetCoords }}
          />

          <RenderFields
            type="single"
            fields={fields.dateRange}
          />
          {/* <RenderFields
            type="single"
            fields={fields.dateIn}
          />
          <RenderFields
            type="single"
            fields={fields.dateOut}
          /> */}
          <RenderFields
            type="single"
            fields={fields.personCount}
          />


          {/* <RenderFields
            type="single"
            fields={fields.raiting}
          /> */}
          <RenderBtnContainer
            colBtn="col-3 col-xs-12"
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            btnSubmitText="Найти"
            reset={reset}
            resetForm={resetForm}

          />


          <RenderFields
            type="single"
            fields={{ ...fields.geoHotels, loading: loading, listingsCoords: listingsCoords, getCoords: getCoords }}
          // fields={fields.geoHotels}
          />


        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'hotelsSearch',
  enableReinitialize: true,
})(HotelsSearchPanel);