import SignIn from "@/components/layout/SignIn";
import { Sparkles } from "lucide-react";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[radial-gradient(circle_at_top,#f1f5f9_0%,#e2e8f0_45%,#cbd5e1_100%)] px-4 py-8 sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.45)] sm:p-8">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-700 shadow-sm">
            <Sparkles className="size-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Sign Up
            </h1>
            <p className="mt-1 text-sm font-medium text-zinc-600">
              Enter your details to create your account
            </p>
          </div>
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default SignUpPage;
