import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <NavLink className="brand" to="/">
            <span className="brand-mark">O</span>
            <span>OctoFit Tracker</span>
          </NavLink>
          <nav className="d-flex flex-wrap gap-2" aria-label="Primary navigation">
            {[['Users', '/users'], ['Activities', '/activities'], ['Teams', '/teams'], ['Leaderboard', '/leaderboard'], ['Workouts', '/workouts']].map(([label, path]) => (
              <NavLink key={path} className="nav-link" to={path}>{label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <section className="dashboard-intro">
      <p className="eyebrow">Mergington High School</p>
      <h1>Move together. Grow stronger.</h1>
      <p className="lead">Track the everyday wins that make a healthy team.</p>
      <div className="row g-3 mt-4">
        {[['Users', '/users', 'Meet the community'], ['Activities', '/activities', 'See recent movement'], ['Workouts', '/workouts', 'Find your next challenge']].map(([title, path, description]) => (
          <div className="col-md-4" key={path}>
            <NavLink className="dashboard-card" to={path}>
              <strong>{title}</strong>
              <span>{description}</span>
              <span aria-hidden="true">-&gt;</span>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App
