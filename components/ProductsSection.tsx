// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Kirill Dorkin
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch("http://localhost:3001/api/products");
  const products = await data.json();
  return (
    <div className="bg-zinc-900">
      <div className="max-w-screen-2xl mx-auto pt-20 pb-20">
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} color="white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;