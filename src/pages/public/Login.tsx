import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthUserStore from "@/store/authUserStore";

const Login = () => {
  const { setAuthUser } = useAuthUserStore((state: any) => ({
    setAuthUser: state.setAuthUser,
  }));

  return (
    <>
      <Card className="w-[380px] mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome back!</CardTitle>
          <CardDescription>Login to your account to continue</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => {
              setAuthUser({
                firstName: "Jimwel Dizon",
                email: "jimwel@gmail.com",
              });
            }}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Login;
