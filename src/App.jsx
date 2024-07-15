import { NavLink } from "react-router-dom"

function App() {

  return (
    <>
      <span>Im App aparently</span> 
      <NavLink to="profiles">
        <button>Press me to go Profile</button>
      </NavLink>
      <NavLink to="home">
        <button>Press me to go Home</button>
      </NavLink>
    </>
  )
}

export default App
