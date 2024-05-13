import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";

const App = () => {
  const AppContent = () => {
    const location = useLocation();
    const check =
      location.pathname === "/login" || location.pathname === "/register";

    return (
      <React.Fragment>
        {!check && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </React.Fragment>
    );
  };
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
