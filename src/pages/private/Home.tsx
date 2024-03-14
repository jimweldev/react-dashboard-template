import { Button } from "@/components/ui/button";
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
      >
        Toast
      </Button>
    </>
  );
};

export default Home;
