import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formSearch/RenderBtnContainer';
import Tabs from 'components/forms/formSearch/Tabs';

import { reduxForm } from 'redux-form';

import { useState } from 'react';



const UsersSearchPanel = (props) => {

  const {
    fields,
    waitAnsw,
    submitSuccess,
    reset,
    resetForm,
    disableTabs,
    showMobile
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
    <div className={`border-search-outer border-users-mini search-all ${showMobile ? 'active' : ''}`}>

      {!disableTabs && (<Tabs active="users" />)}

      <div className={`border-container main-grid ${!disableTabs ? 'border-null-left' : ''} border-container-search `}>
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
        <>

          <RenderBtnContainer
            // btnMoreText="Свернуть"
            colBtn="col-12"
            changeStatePanel={changeStatePanel}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            btnSubmitText="Начать поиск"
            reset={reset}
            resetForm={resetForm}

          />
        </>
        {/* {fullPanel ?
            
          )} */}
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(UsersSearchPanel);