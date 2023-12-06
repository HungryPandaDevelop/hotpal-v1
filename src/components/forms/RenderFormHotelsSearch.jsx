import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

import Tabs from 'components/forms/formSearch/Tabs';

const HotelsSearchPanelMap = (props) => {




  const {
    fields,
    waitAnsw,
    submitSuccess,
    reset,
    resetForm,

  } = props;



  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();

  };

  const [showMobile, setShowMobile] = useState(false);


  return (
    <div className={`border-search-hotels ${showMobile ? 'active' : ''}`}>
      <Tabs active="hotels" />
      <div className="show-filter-mobile-container">
        <div className={`show-filter-mobile ${showMobile ? 'active' : ''}`} onClick={() => { setShowMobile(!showMobile) }}>
        </div>
      </div>
      <div className={`border-container border-null-left border-container-search hotels-search-panel`}>

        <div className="main-grid">
          <div className="col-6 col-xs-12">
            <RenderFields
              type="single"
              fields={fields.hotelFind}
            />
          </div>
          <div className="col-6 col-xs-12">
            <RenderFields
              type="single"
              fields={fields.dateRange}
            />
          </div>
          <RenderBtnContainer
            colBtn="col-6 col-xs-12"
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            btnSubmitText="Начать поиск"
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
})(HotelsSearchPanelMap);