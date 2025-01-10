import React from "react";

export default function CostumerCart() {
  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl lg:text-3xl font-bold">
          Produk yang kamu pilih
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <h1 className="col-span-full text-4xl text-slate-600 text-center">
          Belum Ada produk di keranjang
        </h1>
      </div>
    </section>
  );
}
