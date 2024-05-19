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
import Profile from "./pages/Profile";
import "./App.css";
// import HeroSection from "components/hero-section";
import CreateBlogForm from "pages/CreateBlog";
import BlogView from "pages/BlogView";
import Footer from "components/footer";

const App = () => {
  const AppContent = () => {
    const location = useLocation();
    const check =
      location.pathname === "/login" || location.pathname === "/register";

    return (
      <React.Fragment>
        {!check && (
          <>
            {" "}
            <Navbar />
         
          </>
        )}
        <Routes>
          <Route exact path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-blog" element={<CreateBlogForm />} />
          <Route path="/blog-view/:id" element={<BlogView />} />
        </Routes>
       {!check &&  <Footer/> }
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
