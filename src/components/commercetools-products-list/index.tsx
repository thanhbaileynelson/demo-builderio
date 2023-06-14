import CTAPI from "@/services/commercetools/CTApi";
import { Product } from "@commercetools/platform-sdk";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export interface IProductsProps {
  products: string[];
}

export default function CommercetoolsProductsList({
  products,
}: IProductsProps) {
  const [items, setItems] = useState<Product[]>([]);
  const getProducts = useCallback(() => {
    if (!products) {
      return;
    }
    const promises = products.map((id) => {
      return CTAPI.products()
        .withId({
          ID: id,
        })
        .get()
        .execute();
    });
    Promise.all(promises).then((results) => {
      setItems(results.map((result) => result.body));
    });
  }, [products]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Commercetools Products List</h2>
      <div className="grid gap-3 grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="rounded shadow overflow-hidden">
            <div>
              <Image
                alt={item.masterData.current.name.en}
                src={
                  item?.masterData?.current?.masterVariant?.images?.[0]?.url ||
                  ""
                }
              />
            </div>
            <div className="p-3">
              <h3 className="font-bold text-xl">
                {item.masterData.current.name.en}
              </h3>
              <div>{item.masterData.current.variants.length} variants</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
