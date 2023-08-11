import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formUserSearch/RenderBtnContainer';

import { reduxForm } from 'redux-form';

import { useState } from 'react';



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
      <div className="border-tabs-container">
        <div className="border-tab active">Поиск по людям</div>
        <div className="border-tab">Поиск по отелям</div>
      </div>
      <div className="border-container border-null-left border-container-search">
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
              wrapClass="col-4"
              btnText="Еще фильтры"
              changeStatePanel={changeStatePanel}
              waitAnsw={waitAnsw}
              onSubmit={onSubmit}
              btnSubmiText={btnSubmiText}
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
                  wrapClass="col-offset-9 col-4"
                  btnText="Свернуть"
                  changeStatePanel={changeStatePanel}
                  waitAnsw={waitAnsw}
                  onSubmit={onSubmit}
                  btnSubmiText={btnSubmiText}
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