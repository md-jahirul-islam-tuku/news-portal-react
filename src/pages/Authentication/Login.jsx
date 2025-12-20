import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const { loginUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!/.{6,}/.test(password)) {
      setMessage("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setMessage("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setMessage("Password must contain at least one number.");
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setMessage("Password must contain at least one special character.");
      return;
    }

    try {
      const userCredential = await loginUser(email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        setMessage("Please verify your email. Check Inbox.");
        return;
      }
      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setMessage("Invalid email or password.");
      } else {
        setMessage(error.message);
      }
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4"
    >
      <h1 className="text-center text-xl font-bold">Log in your account</h1>
      <hr className="my-5 border-primary-content border-dashed border" />
      <fieldset className="fieldset">
        <label className="font-semibold">Email address</label>
        <input
          name="email"
          type="email"
          className="input w-full validator"
          placeholder="Email"
          required
        />
        <p className="validator-hint hidden">Required</p>
      </fieldset>

      <label className="fieldset">
        <span className="font-semibold">Password</span>
        <input
          name="password"
          type="password"
          className="input w-full validator"
          placeholder="Password"
          required
        />
        <span className="validator-hint hidden">Required</span>
      </label>
      <div>
        <a className="link link-hover">Forgot password?</a>
      </div>
      <span className="text-red-500 mt-1">{message}</span>
      <button className="btn btn-secondary shadow-none mt-1" type="submit">
        Login
      </button>
      <button className="btn btn-ghost mt-1" type="reset">
        Reset
      </button>
      <p className="text-center mb-5 text-lg">
        Don't you have an account?{" "}
        <Link
          to={"/auth/signUp"}
          className="text-blue-700 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
