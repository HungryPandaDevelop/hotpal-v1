
const InterestsUsers = ({ user, special }) => {

  const { interests } = user;

  return (
    <div className={`tags-container ${special}`}>
      <h3>Интересы:</h3>
      {(interests === undefined || interests.length === 0) ? 'Cписок интересов пуст' : interests.map((interest, index) => (
        <div className="tag" key={index}>{interest} </div>
      ))
      }
    </div>
  )
}

export default InterestsUsers