import { useAuthStore } from "@/store/useAuthStore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { LogIn, Mail, Lock, UserRoundCheck } from "lucide-react";

const LoginInput = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { logIn, isUserLoggedIn, guestLogin, isGuestLoggingIn } =
    useAuthStore();
  const onSubmitLogInData = async (event) => {
    event.preventDefault();

    const isValid = formData.email && formData.password;

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    await logIn(formData);
  };

  const onGuestLogin = async () => {
    await guestLogin();
  };

  return (
    <form onSubmit={onSubmitLogInData} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="flex items-center gap-2 text-zinc-700"
        >
          <Mail className="size-4 text-zinc-500" />
          Email
        </Label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input
            placeholder="Enter your email..."
            className="h-11 border-zinc-200 bg-zinc-50/40 pl-10"
            type="email"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            name="email"
            value={formData.email}
            id="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="flex items-center gap-2 text-zinc-700"
        >
          <Lock className="size-4 text-zinc-500" />
          Password
        </Label>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <Input
            placeholder="Enter your password..."
            className="h-11 border-zinc-200 bg-zinc-50/40 pl-10"
            type="password"
            name="password"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, password: event.target.value }))
            }
            value={formData.password}
            id="password"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1 sm:flex-row">
        <Button
          type="submit"
          className="h-11 flex-1 cursor-pointer"
          disabled={isUserLoggedIn}
        >
          <LogIn className="mr-2 size-4" />
          {isUserLoggedIn ? "Logging In..." : "Log In"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-11 flex-1 text-[0.7rem] cursor-pointer border-zinc-300"
          disabled={isGuestLoggingIn}
          onClick={onGuestLogin}
        >\
          {!isGuestLoggingIn && <UserRoundCheck className="mr-2 size-4" />}
          Continue as Guest
          {isGuestLoggingIn && "Logging In..."}
        </Button>
      </div>
    </form>
  );
};

export default LoginInput;
