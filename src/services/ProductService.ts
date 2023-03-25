import { ProductI } from "@/types";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllProducts = async (): Promise<ProductI[]> => {
  //   const response = await fetch(`${baseUrl}/posts?_limit=32`);
  const response = await fetch(`${baseUrl}/posts`);
  return await response.json();
};
