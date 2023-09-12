import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

import Tabs from 'components/forms/formSearch/Tabs';

const RoomsSearchPanel = (props) => {

  const {
    fields,
    btnSubmitText,
    waitAnsw,
    submitSuccess,
  } = props;





  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();

  };


  return (
    <div className="main-full rooms-search-panel">
      <div className="border-container border-container-search">
        <div className="main-grid">
          <RenderFields
            type="single"
            fields={fields.dateIn}
          />
          <RenderFields
            type="single"
            fields={fields.dateOut}
          />
          <RenderFields
            type="single"
            fields={fields.personCount}
          />
          <RenderBtnContainer
            btnSubmitText={btnSubmitText}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            colBtn="col-3 col-xs-12"
          />
        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(RoomsSearchPanel);