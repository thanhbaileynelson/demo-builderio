import CTAPI from "@/services/commercetools/CTApi";
import { Product } from "@commercetools/platform-sdk";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const getProducts = useCallback(() => {
    CTAPI.products()
      .get({
        queryArgs: {
          offset: 0,
          limit: 20,
        },
      })
      .execute()
      .then((response) => {
        setProducts(response?.body?.results || []);
        setTotal(response?.body?.total || 0);
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Products from CT</h2>

      <div className="grid grid-cols-4 gap-3">
        {products.map((item) => (
          <div key={item.id} className="rounded shadow overflow-hidden">
            <div>
              <Image
                alt={item.masterData.current.name.en}
                src={
                  item?.masterData?.current?.masterVariant?.images?.[0]?.url ||
                  `https://picsum.photos/seed/${Math.random().toString()}/300/300`
                }
                width={300}
                height={300}
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

      <div className="mt-5">
        {products.length} of {total} products
      </div>
    </div>
  );
}
