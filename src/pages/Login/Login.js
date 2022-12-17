import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  function handleLogin(e) {
    navigate("/");
  }
  return (
    <div className="login-container">
      <h3>Sign in</h3>
      <p>
        or{" "}
        <Link to="/register">
          <span>create an account</span>
        </Link>
      </p>
      <form action="" onSubmit={handleLogin} className="login-form">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input className="form-control" type="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input className="form-control" type="password" />
        </div>

        <button className="btn btn-success float-end" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
