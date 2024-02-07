
const NameUsers = ({ user }) => {


  return (
    <div className="name-users">
      <h3>
        <span>{user?.name}</span>
        {user.age ? (<span>, {user.age}</span>) : ('')}
      </h3>
    </div>
  )
}

export default NameUsers
