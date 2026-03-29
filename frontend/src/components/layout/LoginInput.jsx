import { Input } from "../ui/input";
import { Label } from "../ui/label";
const LoginInput = () => {
  return (
    <form action="">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Enter your email..."
          className="my-4"
          type="email"
          name="email"
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
          id="password"
        />
      </div>
    </form>
  );
};

export default LoginInput;
