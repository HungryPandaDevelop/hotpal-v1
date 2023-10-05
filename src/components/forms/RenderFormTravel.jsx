import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer';
// import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';


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
    <div className="travel-add-panel border-container">
      <div className="main-grid">

        <RenderFields
          type="single"
          fields={fields.dateTravelRange}
        />
        <RenderBtnContainer
          btnSubmitText={btnSubmitText}
          waitAnsw={waitAnsw}
          onSubmit={onSubmit}
          classBtn='btn-white'
          colBtn="col-6 col-xs-12"
        />

      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(RoomsSearchPanel);