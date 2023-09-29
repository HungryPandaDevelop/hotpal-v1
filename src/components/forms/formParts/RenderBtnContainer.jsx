

const RenderBtnContainer = (props) => {

  const {
    colBtn,
    waitAnsw,
    onSubmit,
    btnSaveText,

  } = props;


  return (
    <div className={`${colBtn ? colBtn : 'col-12'} btn-container`}>
      <button className="btn btn--blue" onClick={(e) => { onSubmit(e) }} >
        {waitAnsw ? (<>Loading...</>) : (
          <><i></i><span>{btnSaveText}</span></>
        )}
      </button>
    </div>
  )
}

export default RenderBtnContainer
