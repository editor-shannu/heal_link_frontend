import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login-image.png";
import logoImg from "../assets/heallink-logo.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-screen">
      {/* Top Section with Illustration */}
      <div className="login-image-container">
        <img src={loginImg} alt="Doctors" className="login-illustration" />
      </div>

      {/* Bottom Card Section */}
      <div className="login-card">
        {/* Logo if needed above title, but design shows title mainly */}
        <h1 className="login-title">Heal Link</h1>
        <p className="login-subtitle">
          Connecting you to better healthcare!
        </p>

        <button
          className="login-button"
          onClick={() => navigate("/home")}
        >
          LOGIN
        </button>

        <p
          style={{ marginBottom: '24px', cursor: 'pointer', color: '#1d2366', fontSize: '14px', fontWeight: 500 }}
          onClick={() => navigate("/hospital-login")}
        >
          Hospital Admin? Login here
        </p>

        <p className="login-signup" onClick={() => navigate("/signup")}>
          Don't have an account? <span>Sign up!</span>
        </p>
      </div>
    </div>
  );
}
