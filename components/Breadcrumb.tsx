// *********************
// Role of the component: Component that displays current page location in the application 
// Name of the component: Breadcrumb.tsx
// Developer: Kirill Dorkin
// Version: 1.0
// Component call: <Breadcrumb />
// Input parameters: No input parameters
// Output: Page location in the application
// *********************

import Link from "next/link";
import React from "react";
import { FaHouse } from "react-icons/fa6";

const Breadcrumb = () => {
  return (
    <div className="text-lg breadcrumbs pb-10 py-5 max-sm:text-base">
      <ul>
        <li>
          <Link href="/">
            <FaHouse className="mr-2" />
            Главная
          </Link>
        </li>
        <li>
          <Link href="/shop">Магазин</Link>
        </li>
        <li>
          <Link href="/shop">Продукция</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
