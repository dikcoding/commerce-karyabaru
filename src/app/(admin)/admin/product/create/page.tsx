import { CreateProductForm } from "@/components/pages/admin/product/CreateProductForm";

export default function AddProductPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Produk Baru</h1>
      <CreateProductForm />
    </div>
  );
}
