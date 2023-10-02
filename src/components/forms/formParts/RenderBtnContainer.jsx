

const RenderBtnContainer = ({
  colBtn,
  waitAnsw,
  onSubmit,
  btnSubmitText,

}) => {


  return (
    <div className={`${colBtn ? colBtn : 'col-12'} btn-container`}>
      <button className="btn btn--blue" onClick={onSubmit} >
        {waitAnsw ? (<>Loading...</>) : (
          <><i></i><span>{btnSubmitText}</span></>
        )}
      </button>
    </div>
  )
}

export default RenderBtnContainer
