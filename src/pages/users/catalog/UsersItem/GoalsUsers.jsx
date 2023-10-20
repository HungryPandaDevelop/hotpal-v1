import { renderGoals } from 'pages/users/hooks/renderGoals';


const GoalsUsers = ({ user, account }) => {

  const { goals } = user;

  if (goals === undefined || goals.length === 0) { return false; }

  if (user.setting_goals) {
    if (user.setting_goals !== account.orientation) {
      return false;
    }
  }

  return (
    <div className="goals-users">
      {goals.map((item, index) => (
        <div key={index}>
          <div className="goals-users-tag">{renderGoals(item)}</div>
        </div>))
      }
    </div>
  )
}

export default GoalsUsers
