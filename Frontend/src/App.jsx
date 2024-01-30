import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Starter from "./pages/Starter";
import Cookies from "js-cookie";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        {Cookies.get("jwtToken") ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route
                path="*"
                element={<Navigate to="/home" replace={true} />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Starter />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
