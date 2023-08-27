import { FC, useEffect, useState } from "react";
import ProductTableHeader from "./TableHeader/TableHeader";
import ProductTableBody from "./TableBody/TableBody";
import { IProduct } from "../components/interfaces/product.interface";

type IProductTable = {
  products: Array<IProduct>,
  isError: boolean,
  isLoading: boolean,
}

const ProductTable: FC<IProductTable> = ({ products, isError, isLoading }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if(screenWidth <= 760) setIsMobile(true);
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      if((event.target as Window).innerWidth <= 760) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <table className="product_table">
      <ProductTableHeader isMobile={isMobile}/>
      <ProductTableBody products={products} isError={isError} isLoading={isLoading} isMobile={isMobile}/>
    </table>
  )
}

export default ProductTable;
