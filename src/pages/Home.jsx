import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HospitalCard from "../components/HospitalCard";
import EMRFormModal from "../components/EMRFormModal";
// import BottomTabBar from "../components/BottomTabBar"; // Rendered in App.jsx

export default function Home() {
  const navigate = useNavigate();
  const [showEMR, setShowEMR] = useState(true);

  return (
    <div className="home-container">
      {/* EMR Popup */}
      {showEMR && <EMRFormModal onClose={() => setShowEMR(false)} />}

      {/* Header */}
      <header className="home-header">
        <div className="user-greeting">
          <img
            className="user-avatar"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="User"
          />
          <div className="greeting-text">
            <h3>Hi Aleyna!</h3>
            <p>How are u feeling today?</p>
          </div>
        </div>
        <div className="search-icon">🔍</div>
      </header>

      {/* Hero Section */}
      <div className="hero-card">
        <p className="hero-text">
          HERO SLIDES LATEST NEWS SUCH AS BOOK A VACCINE, latest medical news, etc....
        </p>
      </div>

      {/* Daily Wellness */}
      <div className="daily-wellness-card">
        <h4>DAILY WELLNESS</h4>

        <div className="appointment-info">
          <span style={{ fontSize: '20px' }}>📅</span>
          <div>
            <strong>Upcoming appointment</strong>
            <br />
            <small>Time DD/MM/YYYY</small>
          </div>
          <span style={{ marginLeft: 'auto' }}>❯</span>
        </div>
      </div>

      {/* Hospital Recommendation */}
      <div className="feature-header">
        <div style={{ flex: 1 }}>
          <h3>Hospital Recommendation</h3>
          <p style={{ fontSize: '12px', color: '#64748b' }}>Top Hospitals</p>
        </div>
        <span className="see-all" onClick={() => navigate("/recommendations")}>See all</span>
      </div>

      <div className="hospitals-list">
        <HospitalCard name="Hospital name 1" category="Dentist" rating="4.9" reviews="280" />
        <HospitalCard name="Hospital name 2" category="Dentist" rating="4.8" reviews="120" />
      </div>
    </div>
  );
}
