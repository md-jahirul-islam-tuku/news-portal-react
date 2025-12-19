import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const { loginUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        alert("Log in successful!");
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.code || error.message;
        setMessage(errorMessage);
      });
  };
  return (
    <form
      onSubmit={handleLogin}
      className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4"
    >
      <h1 className="text-center text-xl font-bold">Log in</h1>
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
      <button className="btn mt-1" type="submit">
        Login
      </button>
      <button className="btn btn-ghost mt-1" type="reset">
        Reset
      </button>
      <p className="text-center mt-5">
        Don't you have an account?{" "}
        <Link to={"/auth/signUp"} className="text-blue-700 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
