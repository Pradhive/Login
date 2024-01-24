import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Starter from './pages/Starter'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Starter/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/home" element = {<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
