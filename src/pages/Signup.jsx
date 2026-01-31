import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth">
      <h2>Sign Up</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button onClick={() => navigate("/home")}>
        Sign Up
      </button>
    </div>
  );
}
