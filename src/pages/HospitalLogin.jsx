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
        {/* Logo matching Image 3 (Red/Pink medical icon on blue/grey background) */}
        <div className="logo-placeholder" style={{
          background: '#6d7f93', /* Muted blue-grey */
          width: '80px', height: '80px', borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <span style={{ fontSize: '32px' }}>🏥</span>
        </div>
        <h2 className="brand-title" style={{ marginTop: '16px', fontWeight: 'bold' }}>HealLink</h2>
      </div>

      <div className="admin-login-card" style={{ maxWidth: '350px', padding: '30px 24px', borderRadius: '24px' }}>
        <h2 className="login-title" style={{
          color: '#1d2366',
          fontSize: '28px',
          marginBottom: '4px',
          textAlign: 'left'
        }}>Hospital<br />Admin</h2>

        <p className="login-subtitle" style={{
          color: '#3bacd6',
          textAlign: 'left',
          marginBottom: '24px',
          fontSize: '14px'
        }}>Emergency Response Portal</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label style={{ color: '#64748b', fontSize: '12px' }}>Hospital ID</label>
            <input
              type="text"
              defaultValue="CITY-CARE-BLR"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            />
          </div>

          <div className="input-group">
            <label style={{ color: '#64748b', fontSize: '12px' }}>Access Code</label>
            <input
              type="password"
              defaultValue="123456"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0', letterSpacing: '4px' }}
            />
          </div>

          <button type="submit" className="login-button primary" style={{
            width: '100%',
            background: 'white',
            color: 'black',
            border: '2px solid black',
            marginTop: '16px',
            fontSize: '13px'
          }}>
            ACCESS DASHBOARD
          </button>
        </form>
      </div>
    </div>
  );
}
