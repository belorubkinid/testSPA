import { FC } from "react";
import { IProduct } from "../../interfaces/product.interface";

type ProductTableType = {
  products: Array<IProduct>,
  isError: boolean,
  isLoading: boolean,
  isMobile: boolean
}

const ProductTableBody: FC<ProductTableType> = ({ products, isError, isLoading, isMobile }) => {

  return (
      <tbody>
        {!isError ? (!isMobile && products?.map((product) => {
          return (
            <tr key={product.code}>
              <td>{product.code}</td>
              <td>{product.title}</td>
              <td>{product.manufacturer}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          )
        }) || (isMobile && products?.map((product) => {
          return (
            <tr key={product.code}>
              <td>{product.code} <b>{`${product.title} `}</b>{`| ${product.manufacturer}`}</td>
              <td>{product.description}</td>
              <td>{`${product.price} | ${product.stock}`}</td>
            </tr>
          )
        }))) : <tr>
          <td colSpan={6}>Sorry, something went wrong, please try updating your request later</td>
          </tr>}
          {!products?.length && !isLoading && !isError && <tr>
          <td colSpan={6}>No results</td>
          </tr>}
      </tbody>
  )
}

export default ProductTableBody;
