import SignIn from "@/components/layout/SignIn";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-slate-500 max-w-full flex items-center justify-center">
      <div className="w-full md:w-[600px] p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <p className="text-sm text-slate-800 -foreground mb-6 font-[600]">
          Enter your details to create your account
        </p>
        <SignIn />
      </div>
    </div>
  );
};

export default SignUpPage;
