import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "../ui/button";

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { signUp } = useAuthStore();

  const onSubmitFormData = async (event) => {
    event.preventDefault();

    const isValid = formData.fullname && formData.email && formData.password;

    if (!isValid) {
      toast.error("Please fill in all fields.");
      return;
    }
    await signUp(formData);

   
  };
  return (
    <form action="" onSubmit={onSubmitFormData}>
      <div>
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          placeholder="Enter your full name..."
          className="my-4"
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, fullname: event.target.value }))
          }
          id="fullname"
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
