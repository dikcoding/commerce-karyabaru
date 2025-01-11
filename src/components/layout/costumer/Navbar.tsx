import Image from "next/image";
import logo from "@/../public/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Signout from "@/components/pages/auth/signout";

const menus = [
  {
    src: "/costumer",
    name: "Belanja",
  },
  {
    src: "/costumer/cart",
    name: "Cart",
  },
  {
    src: "/costumer/profile",
    name: "Profile",
  },
];

export default async function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link
            href="/costumer"
            className="mr-6 hidden lg:flex"
            prefetch={false}
          >
            <div className="size-6 relative">
              <Image alt="Logo" src={logo} layout="fill" objectFit="cover" />
            </div>
            <p className="ml-2"> DiCommerce</p>
          </Link>
          <div className="flex flex-col gap-2 py-6 h-full">
            <div className="flex flex-col gap-2">
              {menus.map((menu) => (
                <Link
                  href={menu.src}
                  key={menu.src}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
            <div className="flex-1 justify-self-end">
              <Signout />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/costumer" className="m-4 hidden lg:flex">
        <div className="size-6 relative">
          <Image alt="Logo" src={logo} layout="Fill" objectFit="cover" />
        </div>
        <p className="ml-2">KaryaBaru</p>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        {menus.map((menu) => (
          <Link
            href={menu.src}
            key={menu.src}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          >
            {menu.name}
          </Link>
        ))}
        <Signout />
      </nav>
    </header>
  );
}

function MenuIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
