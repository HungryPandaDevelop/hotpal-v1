

const RenderBtnContainer = (props) => {

  const {
    colBtn,
    waitAnsw,
    onSubmit,
    btnSubmitText,

  } = props;


  return (
    <div className={`${colBtn ? colBtn : 'col-12'} btn-container`}>
      <button className="btn btn--blue" onClick={(e) => { onSubmit(e) }} >
        {waitAnsw ? (<>Loading...</>) : (
          <><i></i><span>{btnSubmitText}</span></>
        )}
      </button>
    </div>
  )
}

export default RenderBtnContainer
