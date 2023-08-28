import { FC } from "react";

type ProductTableHeaderType = {
  isMobile: boolean,
}

const ProductTableHeader: FC<ProductTableHeaderType> = ({ isMobile }) => {
  return (
    <thead>
      {!isMobile ? <tr>
        <th>Code</th>
        <th>Title</th>
        <th>Manufacturer</th>
        <th>Description</th>
        <th>Price</th>
        <th>Stock</th>
      </tr> : <tr><td>Code / Title / Manufacturer / Description / Price / Stock</td></tr>}
    </thead>
  )
}

export default ProductTableHeader;
