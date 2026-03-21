// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

import { ArrowRight, Lock, Mail } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const { login } = useAuthStore();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = (event) => {
    setLoginData({
      ...loginData,
      email: event.target.value,
    });
  };
  const onChangePassword = (event) => {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  };

  const onClickLogIn = (event) => {
    event.preventDefault();
    if (loginData.email && loginData.password) {
      login(loginData);
    }
  };
  return (
    <>
      <div className="w-full max-w-sm mx-auto md:mx-0">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">
            Welcome back
          </h1>
          <p className="text-slate-400 text-sm">
            Log in to your account to continue chatting.
          </p>
        </div>

        <form className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="email"
                value={loginData.email}
                placeholder="name@example.com"
                className="w-full h-11 pl-10 pr-4 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                onChange={onChangeEmail}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="password"
                value={loginData.password}
                onChange={onChangePassword}
                placeholder="••••••••"
                className="w-full h-11 pl-10 pr-10 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              ></button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-11 mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            onClick={onClickLogIn}
          >
            Log In <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-4 text-slate-500">Or</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 transition-colors font-medium text-sm gap-2"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
