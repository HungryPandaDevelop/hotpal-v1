

const RenderBtnContainer = (props) => {

  const {
    waitAnsw,
    onSubmit,
    btnSubmitText,

  } = props;


  return (
    <div className="main-full">
      <span>Вы внесли изменения, сохранитесь</span>
      <button className="btn btn--blue" onClick={(e) => { onSubmit(e); }} >
        {waitAnsw ? (<>Loading...</>) : (
          <>{btnSubmitText}</>
        )}
      </button>
    </div>
  )
}

export default RenderBtnContainer
