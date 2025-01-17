"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
// import { toast } from "sonner";
// import { trpc } from "@/server/client";
import { UploadImage } from "@/components/UploadImage";
import { useState } from "react";
import { formCreateProductSchema } from "@/schema";

export function CreateProductForm() {
  const [image, setImage] = useState<string | null>(null);
  // const { mutate } = trpc.createProduct.useMutation({
  //   onMutate: () => {
  //     toast.info("Memproses tambah produk");
  //   },
  //   onSuccess: () => {
  //     toast.success("Berhasil Menambah Produk");
  //   },
  //   onError: () => {
  //     toast.warning("Gagal Menamahkan Produk");
  //   },
  // });
  const form = useForm<z.infer<typeof formCreateProductSchema>>({
    resolver: zodResolver(formCreateProductSchema),
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      category: "",
    },
  });

  function onSubmit(newProduct: z.infer<typeof formCreateProductSchema>) {
    if (!image) return;
    console.log(newProduct);
    // Here you would typically send this data to your API
    // mutate({ ...newProduct, image });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Laptop ASUS ROG" {...field} />
              </FormControl>
              <FormDescription>Enter the name of the product.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="1999.99"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter the price of the product.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input type="number" placeholder="10" {...field} />
              </FormControl>
              <FormDescription>
                Enter the current stock of the product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Electronics" {...field} />
              </FormControl>
              <FormDescription>
                Enter the category of the product.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi Produk</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Jelaskan deskripsi dari produk kamu."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Masukan Deskripsi Produk.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <UploadImage setImage={setImage} />
        <Button type="submit">Tambah Produk</Button>
      </form>
    </Form>
  );
}
