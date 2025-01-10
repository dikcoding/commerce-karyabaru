import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/legacy/image";
import Link from "next/link";
import AddToCart from "./AddToCart";

export function ProductCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Semen Gresik 1 Sak</CardTitle>
        <Badge variant="secondary">Material Bangunan</Badge>
      </CardHeader>
      <CardContent>
        <div className="size-64 md:size-52  mx-auto relative flex justify-center w-full">
          <Image
            src="/Seng.png"
            alt="Foto Produk Seng"
            className="mx-auto object-center object-cover"
            layout="fill"
          />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-2xl font-semibold">Rp 77.853</p>
          <p className="text-sm text-muted-foreground">Stock: 300</p>
          <p className="text-xs text-muted-foreground">
            Added on: Kamis, Januari 2025 23:04
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Link
          href=""
          className="w-full bg-sky-500 text-white text-base rounded-sm py-2 text-center hover:bg-sky-600"
        >
          Detail Produk
        </Link>
        <AddToCart />
      </CardFooter>
    </Card>
  );
}
