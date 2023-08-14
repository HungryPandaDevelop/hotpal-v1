import { Field } from 'redux-form';
import { useState, useEffect } from 'react';


const TempateInput = (props) => {

  const {
    input,
  } = props;

  const [useInvite, setInvite] = useState('');


  const changeInvite = (set) => {
    setInvite(set)
    input.onChange(set);
  }




  const renderBtn = (type) => {
    return (
      <div
        className={`invite-ico ${useInvite === type ? 'active' : ''}`}
        onClick={() => { changeInvite(type) }}
      >
        <i className={`${type}-ico`}></i></div>
    )
  }

  return (
    <>
      <h3>Приглашения:</h3>
      {renderBtn('bokal')}
      {renderBtn('padushka')}
      {renderBtn('plag')}
      {renderBtn('pribor')}
    </>
  );
}



const RenderInputInvite = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    validate={obj.validate}
    component={TempateInput}
  />;
}



export default RenderInputInvite;