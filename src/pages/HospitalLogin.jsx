import { useNavigate } from "react-router-dom";

export default function HospitalLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate("/hospital-home");
  };

  return (
    <div className="admin-login-screen">
      <div className="admin-login-logo-container">
        {/* Placeholder for Logo */}
        <div className="logo-placeholder">🏥</div>
        <h2 className="brand-title">HealLink</h2>
      </div>

      <div className="admin-login-card">
        <h2 className="login-title">Hospital Admin</h2>
        <p className="login-subtitle">Emergency Response Portal</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Hospital ID</label>
            <input type="text" placeholder="H-12345" defaultValue="CITY-CARE-BLR" />
          </div>

          <div className="input-group">
            <label>Access Code</label>
            <input type="password" placeholder="••••••" defaultValue="123456" />
          </div>

          <button type="submit" className="login-button primary">
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
