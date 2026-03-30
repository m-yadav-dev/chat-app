import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { signUp } = useAuthStore();

  const onSubmitFormData = async (event) => {
    event.preventDefault();

    const isValid = formData.fullName && formData.email && formData.password;

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }
    const isSignUpSuccessful = await signUp(formData);

    if (isSignUpSuccessful) {
      navigate("/");
    }
  };
  return (
    <form action="" onSubmit={onSubmitFormData}>
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          placeholder="Enter your full name..."
          className="my-4"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, fullName: event.target.value }))
          }
          id="fullName"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Enter your email..."
          className="my-4"
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          id="email"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="Enter your password..."
          className="my-4"
          type="password"
          value={formData.password}
          name="password"
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, password: event.target.value }))
          }
          id="password"
        />
      </div>
      <Button type="submit" className="cursor-pointer">
        Sign Up
      </Button>
    </form>
  );
};

export default SignIn;
