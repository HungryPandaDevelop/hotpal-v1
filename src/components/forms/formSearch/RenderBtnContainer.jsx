

const RenderBtnContainer = (props) => {

  const {
    colBtn,
    changeStatePanel,
    waitAnsw,
    onSubmit,
    btnMoreText,
    btnSubmitText,
    reset,
    resetForm
  } = props;


  const resetAll = () => {
    reset();
    resetForm();
  }

  return (
    <div className={colBtn}>
      <div className="btn-container">
        {btnMoreText && (<div className="btn btn--blue-border" onClick={changeStatePanel}>{btnMoreText}</div>)}
        <div className="btn btn--blue" onClick={(e) => { onSubmit(e) }}>{waitAnsw ? (<>Loading...</>) : btnSubmitText}</div>
        <div className="btn btn--blue-border" onClick={(e) => { resetAll() }}>Сбросить</div>
      </div>
    </div>
  )
}

export default RenderBtnContainer
