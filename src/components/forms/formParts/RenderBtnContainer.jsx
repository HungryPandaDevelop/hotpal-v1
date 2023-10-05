

const RenderBtnContainer = ({
  colBtn,
  waitAnsw,
  onSubmit,
  btnSubmitText,
  classBtn
}) => {


  return (
    <div className={`${colBtn ? colBtn : 'col-12'} btn-container`}>
      <button className={`${classBtn ? classBtn : 'btn--blue'} btn`} onClick={onSubmit} >
        {waitAnsw ? (<>Loading...</>) : (
          <><i></i><span>{btnSubmitText}</span></>
        )}
      </button>
    </div>
  )
}

export default RenderBtnContainer
