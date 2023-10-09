import { Field, change } from 'redux-form';
// import { useState, useEffect } from 'react';


const TempateInput = (props) => {

  const {
    input,
  } = props;

  const {
    onSubmit,
    setIgnoreText,
    // dispatch,
  } = props.obj;



  const sendInvite = (e, set) => {

    setIgnoreText(false);

    onSubmit(e);

  }
  const changeInvite = (type, text) => {
    // dispatch(change('singleInput', 'message', text))
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
        <i className={`${type}-ico`}></i><span dangerouslySetInnerHTML={{ __html: text }}></span></div>
    )
  }

  return (
    <div className='chat-invite-container'>
      <h3>Приглашения:</h3>
      {renderBtn('bokal', '<em><i class="bokal-ico--white"></i></em>бокал в лобби')}
      {renderBtn('padushka', '<em><i class="padushka-ico--white"></i></em>свидание в номере')}
      {renderBtn('plag', '<em><i class="plag-ico--white"></i></em>бассейн или море')}
      {renderBtn('pribor', '<em><i class="pribor-ico--white"></i></em>поход в ресторан')}
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