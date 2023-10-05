import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formSearch/RenderBtnContainer';
import Tabs from 'components/forms/formSearch/Tabs';

import { reduxForm } from 'redux-form';

import { useState } from 'react';



const UsersSearchPanel = ({
  fields,
  waitAnsw,
  submitSuccess,
  reset,
  resetForm,
  disableTabs,
  showMobile,
}) => {





  const [fullPanel, setFullPanel] = useState(true);

  const changeStatePanel = () => {
    setFullPanel(!fullPanel);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();
  };




  return (
    <div className={`main-full border-search-outer search-all ${showMobile ? 'active' : ''}`}>

      {!disableTabs && (<Tabs active="users" />)}

      <div className={`border-container ${!disableTabs ? 'border-null-left' : ''} border-container-search `}>
        <div className="main-grid">
          <RenderFields
            type="single"
            fields={fields.gender}

          />
          <RenderFields
            type="single"
            fields={fields.rangeBerth}
          />
          <RenderFields
            type="single"
            fields={fields.goals}
          />
          <RenderFields
            type="single"
            fields={fields.hotelFind}
          />
          <RenderFields
            type="single"
            fields={fields.zodiac}
          />


          <RenderFields
            type="single"
            fields={fields.work}
          />
          <RenderFields
            type="single"
            fields={fields.orientation}
          />
          <RenderBtnContainer
            colBtn="col-12"
            changeStatePanel={changeStatePanel}
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
  form: 'usersSearch',
  enableReinitialize: true,
})(UsersSearchPanel);