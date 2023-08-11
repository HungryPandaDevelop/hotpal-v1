import { saveListing } from 'services/saveListing';

const RenderUserBtn = ({ like, status, textBtn }) => {

  const onSetStatus = (status) => {
    let newData = { ...like, status: status }
    console.log('newData', newData)
    saveListing(newData, like.id, 'likes')

  }

  return (
    <div
      className={`like-status-btn ${status}-like-btn ${like.status === status ? 'active' : ''}`}
      onClick={() => { onSetStatus(status) }}
      title={textBtn}
    ></div>
  )
}

export default RenderUserBtn
