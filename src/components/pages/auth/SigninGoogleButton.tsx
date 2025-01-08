import { Button } from "../../ui/button";
import { signIn } from "@/../auth";

function SigninGoogleButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/costumer" });
      }}
    >
      {" "}
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
    </form>
  );
}

export default SigninGoogleButton;
