import { useAuthStore } from "@/store/useAuthStore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
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
    <form onSubmit={onSubmitLogInData} className="w-full space-y-3 sm:space-y-4">
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

      <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:gap-3">
        <Button
          type="submit"
          className="h-10 flex-1 cursor-pointer text-sm sm:h-11"
          disabled={isUserLoggedIn}
        >
          <LogIn className="mr-2 size-4" />
          {isUserLoggedIn ? "Logging..." : "Log In"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-10 flex-1 cursor-pointer border-zinc-300 text-xs sm:h-11 sm:text-sm"
          disabled={isGuestLoggingIn}
          onClick={onGuestLogin}
        >
          {!isGuestLoggingIn && <UserRoundCheck className="mr-2 size-4" />}
          <span className="hidden sm:inline">Continue as Guest</span>
          <span className="sm:hidden">Guest</span>
          {isGuestLoggingIn && "..."}
        </Button>
      </div>
    </form>
  );
};

export default LoginInput;
