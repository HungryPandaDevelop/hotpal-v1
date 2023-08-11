import { Field } from 'redux-form';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { useEffect, useRef } from "react";


const TempateInput = (props) => {

  let $input = useRef(null);
  let dp = useRef(null);

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    placeholder,
    wrapClass,
  } = props.obj;


  useEffect(() => {
    // Save instance for the further update

    dp.current = new AirDatepicker($input.current, {
      dateFormat: 'yyyy-MM-dd'
    });
  }, []);




  return (
    <div className={wrapClass}>
      {label && <label htmlFor={input.name}><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <div className="data-input-container">
        <input
          {...input}
          type="date"
          placeholder={placeholder}
          id={input.name}
          ref={$input}
          className="input-decorate input-date"
        />
      </div>

    </div>
  );
}


const RenderInputDate = ({ obj }) => {



  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}

  />;
}



export default RenderInputDate;