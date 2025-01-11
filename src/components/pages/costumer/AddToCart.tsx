"use client";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function AddToCart() {
  const router = useRouter();

  const addProduct = () => {
    router.push("/costumer/cart");
    toast.info(`Menambahkan ke dalam Keranjang`);
  };

  return (
    <Button
      onClick={addProduct}
      className="w-full bg-green-500 text-white text-base rounded-sm py-2 text-center hover:bg-green-600"
    >
      Tambah ke Cart
    </Button>
  );
}

export default AddToCart;
