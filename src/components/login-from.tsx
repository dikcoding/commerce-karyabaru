import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SigninGoogleButton from "./pages/auth/SigninGoogleButton";
import FormSigninAdmin from "./pages/auth/FromSiginAdmin";

export function LoginForm() {
  return (
    <Card className="w-full md:w-1/3 ">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription>
          Kamu bisa login melalui Akun Google atau akun langsung jika kamu
          seorang admin.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <FormSigninAdmin />
          <SigninGoogleButton />
        </div>
        {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div> */}
      </CardContent>
    </Card>
  );
}
