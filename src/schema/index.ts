import { z } from "zod";

export const formCreateProductSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  price: z.coerce.number().positive({
    message: "Price must be a positive number.",
  }),
  stock: z.coerce.number().int().nonnegative({
    message: "Stock must be a non-negative integer.",
  }),
  category: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  image: z.any().optional(),
  description: z.string(),
});

export const formUpdateProfile = z.object({
  address: z.string().min(2, {
    message: "Masukan Alamat Rumah Kamu.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Minimal 10 angka",
  }),
});

export const transactionSchema = z.object({
  userId: z.string(), // Foreign key to User
  orderId: z.string().min(1), // Order ID dari sistem Anda
  amount: z.number().positive(), // Jumlah pembayaran
  status: z.enum(["pending", "success", "failed"]), // Status transaksi
  paymentType: z.string().optional(), // Jenis pembayaran (opsional)
  productId: z.string(),
});
