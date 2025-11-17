import React from "react";
import heroBanner from "../assets/heroBanner.mp4";

const Register = () => {
  return (
    <div className="relative overflow-hidden rounded-4xl md:mx-30 md:py-8 flex items-center justify-center bg-base-200 md:mt-10 md:mb-20">
          <video
            src={heroBanner}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 z-0"
          />

      {/* Registration Card */}
      <div className="w-full max-w-3xl z-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE – New Card Panel */}
        <div className="relative hidden md:block">
          <img
            src="https://i.pinimg.com/736x/29/5a/94/295a9452d40ef289c3b93bdb52bf0724.jpg"
            alt="banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm p-10 flex flex-col justify-between">
            <p className="text-gray-300 tracking-widest text-sm">
              Build the Future You Dream Of
            </p>
            <div>
              <h1 className="text-4xl font-bold text-white leading-tight">
                Create your account.
              </h1>
              <p className="text-gray-200 mt-4 max-w-xs">
                Track income, expenses & savings with clarity and confidence. Start building your financial future today.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Register Form */}
        <div className="p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <p className="text-gray-500 mt-1">
              Create your account to get started
            </p>
          </div>

          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text text-black">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text text-black">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Profile picture link"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full"
              />
            </div>

            {/* Sign Up Button */}
            <button className="btn btn-neutral w-full text-white">
              Create Account
            </button>

            {/* OR */}
            <div className="text-center text-sm text-gray-400">OR</div>

            {/* Google Signup */}
            <button className="btn btn-outline w-full">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M47.532 24.552c0-1.636-.146-3.207-.418-4.708H24v8.913h13.303c-.575 3.125-2.295 5.774-4.89 7.544v6.28h7.897c4.627-4.257 7.322-10.532 7.322-18.029z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.606 0 12.146-2.188 16.194-5.919l-7.897-6.28c-2.194 1.479-5.01 2.349-8.297 2.349-6.379 0-11.786-4.297-13.705-10.085H2.202v6.37C6.225 42.676 14.347 48 24 48z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.295 28.065A14.53 14.53 0 019.5 24c0-1.413.242-2.783.693-4.065v-6.37H2.202A23.93 23.93 0 000 24c0 3.847.884 7.487 2.202 10.435l8.093-6.37z"
                />
                <path
                  fill="#EA4335"
                  d="M24 9.55c3.594 0 6.82 1.236 9.358 3.663l7.02-7.02C36.14 2.65 30.6 0 24 0 14.347 0 6.225 5.324 2.202 13.565l8.093 6.37C12.214 13.847 17.621 9.55 24 9.55z"
                />
              </svg>
              Sign up with Google
            </button>
          </form>

          {/* Login Redirect */}
          <p className="mt-6 text-center text-sm">
            Already have an account?
            <span className="ml-1 text-primary cursor-pointer hover:underline">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
