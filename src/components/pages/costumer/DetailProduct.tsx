import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AddToCart from "./AddToCart";

export default function ProductDetail({}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="font-base">Seng 8 Kaki</CardTitle>
          <Badge variant="secondary" className="mt-2">
            Material Bangunan
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] mx-auto">
              <Image
                src="/Seng.png"
                alt="Foto Produk Seng"
                className="mx-auto object-center object-cover"
                objectFit="contain"
                fill
              />
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Price</h2>
                <p className="text-2xl font-bold text-green-600">Rp 77.853</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Stock</h2>
                <p className="text-lg">300 units</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-700">
                  Seng adalah bahan logam lembaran yang sering digunakan dalam
                  konstruksi, terutama sebagai atap atau dinding bangunan. Seng
                  umumnya terbuat dari logam seng galvanis atau campuran seng
                  dan baja, yang memberikan ketahanan terhadap karat dan daya
                  tahan yang baik terhadap cuaca.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Product Details</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Created: January 3rd, 2025</li>
                  <li>Last Updated: January 3rd, 2025</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <AddToCart />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
