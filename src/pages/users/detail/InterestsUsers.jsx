
const InterestsUsers = ({ user, special }) => {

  const { interests } = user;

  if (interests === undefined || interests.length === 0) { return false; }


  return (
    <div className={`tags-container ${special}`}>
      <h3>Интересы:</h3>
      {interests.map((interest, index) => (
        <div className="tag" key={index}>{interest} </div>
      ))
      }
    </div>
  )
}

export default InterestsUsers