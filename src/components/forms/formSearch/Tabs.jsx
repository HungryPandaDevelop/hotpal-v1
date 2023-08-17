import { Link } from "react-router-dom"

const Tabs = ({ active }) => {
  return (
    <div className="border-tabs-container">
      <Link to='/users-catalog' className={`border-tab ${active === 'users' ? 'active' : ''}`}>Поиск по людям</Link>
      <Link to='/hotels-catalog' className={`border-tab ${active === 'hotels' ? 'active' : ''}`}>Поиск по отелям</Link>
    </div>
  )
}

export default Tabs
