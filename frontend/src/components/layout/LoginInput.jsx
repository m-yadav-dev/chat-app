import { useAuthStore } from "@/store/useAuthStore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
const LoginInput = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { logIn } = useAuthStore();

  const onSubmitLogInData = async (event) => {
    event.preventDefault();

    const isValid = formData.email && formData.password;

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    await logIn(formData);
  };

  return (
    <form action="" onSubmit={onSubmitLogInData}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Enter your email..."
          className="my-4"
          type="email"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          name="email"
          value={formData.email}
          id="email"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="Enter your password..."
          className="my-4"
          type="password"
          name="password"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
          value={formData.password}
          id="password"
        />
      </div>
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginInput;
