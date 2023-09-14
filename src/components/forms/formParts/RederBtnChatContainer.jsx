

const RederBtnChatContainer = (props) => {

  const {
    waitAnsw,
    onSubmit,
    btnSubmitText,

  } = props;


  return (
    <div className="btn-container">
      <button className="btn btn--blue-border" onClick={(e) => { onSubmit(e) }} >
        {waitAnsw ? (<>Loading...</>) : (
          <><i></i><span>{btnSubmitText}</span></>
        )}
      </button>
    </div>
  )
}

export default RederBtnChatContainer
