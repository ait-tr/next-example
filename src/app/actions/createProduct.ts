"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const title = formData.get("title")?.toString();
  const price = formData.get("price");
  const description = formData.get("description")?.toString();
  const categoryId = formData.get("categoryId");
  const image = formData.get("image")?.toString();

  //   console.log(title, description, categoryId, image, price);
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    body: JSON.stringify({
      title,
      price,
      description,
      categoryId,
      images: [image],
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    revalidateTag("products");
    redirect("/products/server-version");
  }
}
