import Navbar from "@/components/layout/costumer/Navbar";
import { ReactNode } from "react";

function AuthRootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="p-4">{children}</main>
    </>
  );
}

export default AuthRootLayout;
