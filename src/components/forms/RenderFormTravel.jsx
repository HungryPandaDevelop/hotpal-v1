import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';


const RoomsSearchPanel = (props) => {

  const {
    fields,
    btnSubmitText,
    waitAnsw,
    submitSuccess,
    listing
  } = props;





  const onSubmit = (e) => {
    e.preventDefault();

    submitSuccess();

  };

  const slug = '93941.affiliate.0af1';

  return (
    <div className="main-full travel-add-panel">
      <div className="border-container border-container-search">
        <div className="main-grid">
          <RenderFields
            type="single"
            fields={fields.dateTravelRange}
          />
          <RenderBtnContainer
            btnSubmitText={btnSubmitText}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            colBtn="col-4 col-xs-12"
          />
          <div className="col-4 col-xs-12">
            <div className="btn-container">
              <Link
                className='btn btn--blue'
                target='_blank'
                to={`https://www.ostrovok.ru/rooms/${listing.id}/?cur=RUB&lang=ru&${slug}&utm_medium=partners&utm_source=${slug}`}>Полная информация об отеле</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'usersSearch',
  enableReinitialize: true,
})(RoomsSearchPanel);