"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/../auth";
import { useRouter } from "next/navigation";

function Signout() {
  const router = useRouter();

  const addProduct = () => {
    router.push("/auth/signin");
  };
  return (
    <form
      action={async () => {
        // "use server";
        await signOut();
      }}
    >
      {" "}
      <Button onClick={addProduct} variant="outline" className="w-full">
        Signout
      </Button>
    </form>
  );
}

export default Signout;
