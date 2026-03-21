// import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loader from "../ui/loader";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";

const SignupForm = () => {
  const { isSigningUp, signUp } = useAuthStore();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onChangeNameInput = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      fullName: event.target.value,
    }));
  };

  const onChangeEmailInput = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };

  const onChangePasswordInput = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      password: event.target.value,
    }));
  };

  const onClickPasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onSubmitSignUpFormData = async (event) => {
    event.preventDefault();

    if (
      formData.password === "" ||
      formData.email === "" ||
      formData.fullName === ""
    ) {
      return;
    }

    await signUp(formData);
  };

  return (
    <div className="w-full max-w-sm mx-auto md:mx-0">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">
          Create an account
        </h1>
        <p className="text-slate-400 text-sm">
          Enter your details below to join Chatt-App.
        </p>
      </div>

      <form onSubmit={onSubmitSignUpFormData} className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-slate-300"
          >
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              required
              placeholder="Enter your full name here..."
              className="w-full h-11 pl-10 pr-4 bg-slate-900/50 border  border-slate-700 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              onChange={onChangeNameInput}
            />
            {/* <Input
              placeholder="Enter your full name here..."
              name="fullName"
              type="text"
              required
              id="fullName"
            /> */}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              required
              placeholder="name@example.com"
              className="w-full h-11 pl-10 pr-4 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              onChange={onChangeEmailInput}
            />

            {/* <Input
              id="email"
              name="email"
              required
              placeholder="Enter your email here..."
            /> */}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-300"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              id="password"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              value={formData.password}
              required
              minLength={8}
              placeholder="********"
              className="w-full h-11 pl-10 pr-10 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              onChange={onChangePasswordInput}
            />
            {/* <Input
              id="password"
              name="password"
              required
              placeholder="Enter your password here..."
              type="password"
              minLength={8}
            /> */}
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              onClick={onClickPasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeOff className="h-5 w-5 cursor-pointer" />
              ) : (
                <Eye className="h-5 w-5 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

        {/* <button
          type="submit"
        >
          Sign Up
        </button> */}
        <Button className="w-full h-11 mt-2 bg-emerald-600 border-1 border-emerald-700/50 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
          {isSigningUp ? <Loader /> : "Sign Up"}
         
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?
        <Link
          to="/login"
          className="text-emerald-400 mx-2 hover:text-shadow-emerald-500 font-medium transition-colors"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
