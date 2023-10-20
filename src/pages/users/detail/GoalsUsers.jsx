
const GoalsUsers = ({ user }) => {

  const { goals } = user;

  return (
    <div className="tags-container">
      <h3>Цели:</h3>
      {(goals === undefined || goals.length === 0) ? 'Cписок целей пуст' : goals.map((goal, index) => (
        <div className="tag" key={index}><span dangerouslySetInnerHTML={{ __html: goal }}></span> </div>
      ))
      }
    </div>
  )
}

export default GoalsUsers