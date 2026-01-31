import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import HospitalLogin from "./pages/HospitalLogin";
import HospitalHome from "./pages/HospitalHome.jsx";
import HospitalRecommendations from "./pages/HospitalRecommendations";

import BottomTabBar from "./components/BottomTabBar";
import SOSButton from "./components/SOSButton";

export default function App() {
  return (
    <Routes>
      {/* User */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <>
            <Home />
            <SOSButton />
            <BottomTabBar />
          </>
        }
      />
      <Route path="/recommendations" element={<HospitalRecommendations />} />

      {/* Hospital Admin */}
      <Route path="/hospital-login" element={<HospitalLogin />} />
      <Route path="/hospital-home" element={<HospitalHome />} />
    </Routes>
  );
}
