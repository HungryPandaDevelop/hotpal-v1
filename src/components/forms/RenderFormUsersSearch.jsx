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

  const [showMobile, setShowMobile] = useState(false);



  return (
    <div className={`main-full border-search-outer search-all ${showMobile ? 'active' : ''}`}>

      <Tabs active="users" />
      <div className="show-filter-mobile-container">
        <div className={`show-filter-mobile ${showMobile ? 'active' : ''}`} onClick={() => { setShowMobile(!showMobile) }}>
        </div>
      </div>
      <div className={`border-container border-null-left border-container-search `}>
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
            fields={fields.city}
          />
          {fullPanel ?
            <RenderBtnContainer
              wrapClass="col-4 col-xs-12"
              btnMoreText="Еще фильтры"
              changeStatePanel={changeStatePanel}
              waitAnsw={waitAnsw}
              onSubmit={onSubmit}
              btnSubmitText="Найти"
              reset={reset}
              resetForm={resetForm}

            /> : (
              <>
                <RenderFields
                  type="single"
                  fields={fields.goals}
                />
                <RenderFields
                  type="single"
                  fields={fields.interests}
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
                  wrapClass="col-offset-9 col-4 col-xs-12 col-xs-offset-1"
                  btnMoreText="Свернуть"
                  changeStatePanel={changeStatePanel}
                  waitAnsw={waitAnsw}
                  onSubmit={onSubmit}
                  btnSubmitText="Найти"
                  reset={reset}
                  resetForm={resetForm}

                />
              </>
            )}




        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(UsersSearchPanel);