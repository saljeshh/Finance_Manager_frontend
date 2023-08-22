import "./App.scss";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProfilePage from "./pages/Profile/ProfilePage";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Invest from "./pages/Invest/Invest";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/*" element={<h1>Error 404</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
