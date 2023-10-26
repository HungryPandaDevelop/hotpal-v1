import { Field } from 'redux-form';
import { useEffect } from 'react';

import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    labelSecond,
    placeholder,
    wrapClass,
    setErrCheck,
  } = props.obj;

  const [value, setValue] = useState('');

  useEffect(() => {

    if (input.value) {
      setValue(input.value)
    }


    if (setErrCheck) {
      if (error) {
        setErrCheck(false);
      }
      else {
        setErrCheck(true);
      }
    }
  }, [error]);

  const handleChange = (value) => {
    input.onChange(value);
  };


  return (
    <div className={wrapClass}>
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input'><i><span>{labelSecond}</span></i></div>}</label>}

      <ReactQuill
        value={input.value}
        onChange={handleChange}
        className={`input-decorate ${error && 'input-error'}`}
      />

      {/* {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))} */}
    </div>
  );
}

const RenderInputEditor = ({ obj }) => {


  return <Field
    name={obj.name}
    validate={obj.validate}
    obj={obj}
    component={TempateInput}
  />;
}


export default RenderInputEditor;