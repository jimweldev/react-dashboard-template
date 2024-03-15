import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const Home = () => {
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 1000)
    );

  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">Home</h2>

      <Button
        onClick={() => {
          toast.promise(promise, {
            loading: "Loading...",
            success: (data: any) => {
              return `${data.name} toast has been added`;
            },
            error: "Error",
          });
        }}
        size="sm"
      >
        Toast
      </Button>

      <div className="grid grid-cols-12 gap-3">
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-12 md:col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Home;
