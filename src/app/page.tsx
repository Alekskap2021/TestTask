import { ProductList } from "@/components/ProductList";
import { getAllProducts } from "@/services/ProductService";

export default async function Home() {
  let products = await getAllProducts();

  return <ProductList products={products} />;
}
