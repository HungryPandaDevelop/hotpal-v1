import { Field, change } from 'redux-form';
import { useState, useEffect } from 'react';


const TempateInput = (props) => {

  const {
    input,
  } = props;

  const {
    onSubmit,
    setErrCheckExtra,
    dispatch,
  } = props.obj;



  const sendInvite = (e, set) => {

    setErrCheckExtra(true)
    onSubmit(e);

  }
  const changeInvite = (type, text) => {
    // dispatch(change('singleInput', 'message', 'Свидание в номере'))
    input.onChange({
      text: text,
      type: type,
      status: 'see'
    });
  }
  const resetInvite = () => {
    // dispatch(change('singleInput', 'message', ''));
    input.onChange('');
  }



  const renderBtn = (type, text) => {
    return (
      <div
        className="invite-ico"
        onClick={(e) => { sendInvite(e, type) }}
        onMouseEnter={() => { changeInvite(type, text) }}
        onMouseLeave={() => { resetInvite() }}
      >
        <i className={`${type}-ico`}></i><span>{text}</span></div>
    )
  }

  return (
    <div className='chat-invite-container'>
      <h3>Приглашения:</h3>
      {renderBtn('bokal', 'бокал в лобби')}
      {renderBtn('padushka', 'бассейн или море')}
      {renderBtn('plag', 'свидание в номере')}
      {renderBtn('pribor', 'поход в ресторан')}
    </div>
  );
}



const RenderInputInvite = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
  />;
}



export default RenderInputInvite;