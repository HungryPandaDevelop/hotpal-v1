

const RenderBtnContainer = (props) => {

  const {
    wrapClass,
    changeStatePanel,
    waitAnsw,
    btnText,
    onSubmit,
    btnSubmiText,
    reset,
    resetForm
  } = props;


  const resetAll = () => {
    reset()
    resetForm()
  }

  return (
    <div className={wrapClass}>
      <div className="btn-container">
        <div className="btn btn--blue-border" onClick={changeStatePanel}>{waitAnsw ? (<>Loading...</>) : btnText}</div>
        <div className="btn btn--blue" onClick={(e) => { onSubmit(e) }}>{btnSubmiText}</div>
        <div className="btn btn--blue-border" onClick={(e) => { resetAll() }}>Сбросить</div>
      </div>
    </div>
  )
}

export default RenderBtnContainer
