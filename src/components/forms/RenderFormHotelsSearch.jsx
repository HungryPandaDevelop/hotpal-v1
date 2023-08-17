import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formSearch/RenderBtnContainer';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

import Tabs from 'components/forms/formSearch/Tabs';

const UsersSearchPanel = (props) => {

  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess,
    reset,
    resetForm
  } = props;




  const [fullPanel, setFullPanel] = useState(true);

  const changeStatePanel = () => {
    setFullPanel(!fullPanel);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();

  };


  return (
    <div className="main-full border-search-outer">
      <Tabs active="hotels" />
      <div className="border-container border-null-left border-container-search">
        <div className="main-grid">
          <RenderFields
            type="single"
            fields={fields.city}

          />
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
          <RenderFields
            type="single"
            fields={fields.typeGo}
          />
          <RenderFields
            type="single"
            fields={fields.roomCount}
          />
          <RenderFields
            type="single"
            fields={fields.raiting}
          />
          <RenderBtnContainer
            wrapClass="col-offset-9 col-4"
            btnText="Свернуть"
            changeStatePanel={changeStatePanel}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            btnSubmiText={btnSubmiText}
            reset={reset}
            resetForm={resetForm}

          />





        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(UsersSearchPanel);