import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "./AuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const Signup = () => {
  const [message, setMessage] = useState("");
  const { createUser } = use(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    if (terms === false) {
      setMessage("Please accept the terms and conditions");
      return;
    }
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
    createUser(email, password)
      .then((result) => {
        alert("Signup successful!");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
              setMessage("Successful! Check your inbox and verify");
            });
            e.target.reset();
          })
          .catch((error) => {
            const errorMessage = error.code || error.message;
            setMessage(errorMessage);
          });
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.code || error.message;
        setMessage(errorMessage);
      });
  };
  return (
    <form
      onSubmit={handleSignup}
      className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4"
    >
      <h1 className="text-center text-xl font-bold">Register your account</h1>
      <hr className="my-5 border-primary-content border-dashed border" />
      <fieldset className="fieldset">
        <label className="font-semibold">Your name</label>
        <input
          name="userName"
          type="text"
          className="input w-full validator"
          placeholder="Name"
          // required
        />
        <p className="validator-hint hidden">Required</p>
        <label className="font-semibold">Your photo</label>
        <input
          name="photo"
          type="text"
          className="input w-full validator"
          placeholder="Photo URL"
          // required
        />
        <p className="validator-hint hidden">Required</p>
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
        <label className="label mt-2 font-semibold text-primary">
          <input
            type="checkbox"
            name="terms"
            className="checkbox checkbox-xs checkbox-primary"
          />
          Accept Terms and Conditions
        </label>
        <span className="validator-hint hidden">Required</span>
        <span className="text-red-500">{message}</span>
      </label>
      <button className="btn btn-secondary shadow-none mt-4" type="submit">
        Register
      </button>
      <button className="btn btn-ghost mt-1" type="reset">
        Reset
      </button>
      <p className="text-center mb-5 text-lg">
        Already have an account?{" "}
        <Link
          to={"/auth/login"}
          className="text-blue-700 hover:underline font-semibold"
        >
          Log in
        </Link>
      </p>
    </form>
  );
};

export default Signup;
