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
    resetForm
  } = props;



  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();

  };
  const [showMobile, setShowMobile] = useState(false);



  return (
    <div className={`main-full border-search-hotels ${showMobile ? 'active' : ''}`}>
      <Tabs active="hotels" />
      <div className="show-filter-mobile-container">
        <div className={`show-filter-mobile ${showMobile ? 'active' : ''}`} onClick={() => { setShowMobile(!showMobile) }}>
        </div>
      </div>
      <div className={`border-container border-null-left border-container-search`}>

        <div className="main-grid">
          <RenderFields
            type="single"
            fields={fields.city}


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





        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'hotelsSearch',
  enableReinitialize: true,
})(HotelsSearchPanel);