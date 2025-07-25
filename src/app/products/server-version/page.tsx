import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";

export default async function ProductsServerVersion() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });
  if (!res.ok) {
    throw new Error("Products failed to fetch");
  }
  const products = await res.json();
  console.log(products);
  return (
    <div>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// default -> SSG  - server side generation
// -> только при первом рендере -> только для неизменяемой статической

//    next: { revalidate: 60 }, -> ISR -> incremental server regeneration
// каждое n времени генерируется новый
// через 40 сек - получит сохраненный вариант
// 180 сек - делает еще один запрос -> возращает опять старый вариант
// но готовит новый для следующий пользователей

//    next: { revalidate: 0 }, -> SSR -> генерация при каждом запросе
// -> гораздо более затратно для сервера

//.  cache: "no-store", -> SSR - такой же

// SSG не обновляется после
// SSR - когда при каждом запросе на сервер обновляется
// ISR - по таймеру
