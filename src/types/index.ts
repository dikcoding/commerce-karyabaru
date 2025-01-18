export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string | null | undefined;
  created_at: Date;
  update_at: Date;
}

export type SetGlobalProduct = {
  products: Product[]; // Daftar produk (array)
  setProduct: (product: Product) => Product[] | void; // Fungsi untuk menambahkan produk ke daftar dan mengembalikan array
};

export type SetImage = {
  image: Buffer | null;
  setImage: (buffer: Buffer) => void;
};
