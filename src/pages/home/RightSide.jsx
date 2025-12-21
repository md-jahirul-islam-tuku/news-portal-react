import React, { use } from "react";
import fb from "../../assets/fb.png";
import twt from "../../assets/twitter.png";
import inst from "../../assets/instagram.png";
import swim from "../../assets/swimming.png";
import cls from "../../assets/class.png";
import play from "../../assets/playground.png";
import bg from "../../assets/bg.png";
import { AuthContext } from "../Authentication/AuthContext";

const RightSide = () => {
  const { loginGoogle, loginGithub } = use(AuthContext);
  const handleLoginGoogle = () => {
    loginGoogle()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleLoginGithub = () => {
    loginGithub()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="col-span-3 px-4 sticky top-2 h-fit mb-5">
      <h1 className="text-2xl text-secondary font-semibold mb-5">Login With</h1>
      <div>
        <button
          onClick={handleLoginGoogle}
          className="btn btn-ghost text-black border-info w-full mb-5"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <button onClick={handleLoginGithub} className="btn border-black w-full">
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button>
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <h1 className="text-2xl font-bold text-secondary my-5">Find Us On</h1>
        <ul className="border border-gray-300 rounded-xl">
          <li>
            <a
              className="flex items-center gap-4 border-b border-gray-300 p-4"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img
                src={fb}
                className="w-10 px-3.5 py-2 bg-neutral rounded-full"
              />
              <p className="text-xl font-bold text-primary">Facebook</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-4 border-b border-gray-300 p-4"
              href="https://www.x.com/"
              target="_blank"
            >
              <img
                src={twt}
                className="w-10 px-1.5 py-2 bg-neutral rounded-full"
              />
              <p className="text-xl font-bold text-primary">Twitter</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-4 p-4"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img
                src={inst}
                className="w-10 px-3 py-3 bg-neutral rounded-full"
              />
              <p className="text-xl font-bold text-primary">Instagram</p>
            </a>
          </li>
        </ul>
        <div className="py-4 px-2 bg-neutral mt-3">
          <h1 className="text-2xl font-bold text-primary">Q-Zone</h1>
          <img className="w-full py-2" src={swim} alt="" />
          <img className="w-full py-2" src={cls} alt="" />
          <img className="w-full py-2" src={play} alt="" />
        </div>
        <img className="mt-4 w-full" src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
