import { renderGoals } from 'pages/users/hooks/renderGoals';


const GoalsUsers = ({ user }) => {

  const { goals } = user;

  if (goals === undefined || goals.length === 0) { return false; }


  return (
    <div className="tags-container">
      <h3>Цели:</h3>
      {goals.map((goal, index) => (
        <div className="tag" key={index}>{renderGoals(goal)} <span>{goal}</span> </div>
      ))
      }
    </div>
  )
}

export default GoalsUsers