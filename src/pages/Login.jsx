import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login-image.png";
import logoImg from "../assets/heallink-logo.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-screen">
      {/* Top Image */}
      <img src={loginImg} alt="Login" className="login-image" />

      {/* Logo */}
      <img src={logoImg} alt="Heal Link Logo" className="login-logo" />

      {/* Bottom Card */}
      <div className="login-card">
        <h1 className="login-title">Heal Link</h1>
        <p className="login-subtitle">
          Connecting you to better healthcare!
        </p>

        <button
          className="login-button"
          onClick={() => navigate("/home")}
        >
          LOG IN
        </button>
<p onClick={() => navigate("/hospital-login")}>
  Hospital Admin? Login here
</p>

        <p
          className="login-signup"
          onClick={() => navigate("/signup")}
        >
          Don’t have an account? <span>Sign up!</span>
        </p>
      </div>
    </div>
  );
}
