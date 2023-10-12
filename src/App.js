import "./App.scss";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProfilePage from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";
import Invest from "./pages/Invest";
import InitializeValues from "../src/components/home/InitializeValues";

import { Routes, Route } from "react-router-dom";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false }); // Customize options if needed

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
        <Route
          path="/register/initialize/default"
          element={<InitializeValues />}
        />
        <Route path="/*" element={<h1>Error 404</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
