import { useCallback, useEffect, useState } from 'react'
import { getProducts } from './services/product.service';
import ProductTable from './components/ProductTable/ProductTable';
import Header from './components/Header/Header';
import './app.scss'
import Footer from './components/Footer/Footer';
import Searcher from './components/Searcher/Searcher';
import Loader from './components/ProductTable/Loader/Loader';
import MemoPagination from './components/ProductTable/Pagination/MemoPagination';

function App() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState<number>(1);
  const [filter, setFilter] = useState<string>('');
  const [productCountOnPage, setProductCountOnPage] = useState<number>(10);
  const [isError, setIsError] = useState<boolean>(false); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetchingProducts, setIsFetchingProducts] = useState<boolean>(false);

  
  useEffect(() => {
    try {
      setIsLoading(true);
      (async function useGetProductService() {
        const response = await getProducts(filter);
        if(response.status === 'Error') {
          setIsError(true);
          setIsLoading(false);
        } else {
          setProducts(response.items);
          setProductCount(response.items?.length);
          setCurrentPage(1);
          setIsError(false);
          setIsLoading(false);
        }
      } ());
    } catch (error) {
      setIsError(true);
    }
  }, [filter, isFetchingProducts]);

  useEffect(() => {
    setTotalPageCount(Math.ceil(productCount / productCountOnPage));
  }, [productCount, productCountOnPage])

  const handleNextPageClick = useCallback(() => {
    const nextPage = currentPage + 1;

    setCurrentPage(nextPage <= totalPageCount ? nextPage : currentPage);
  }, [currentPage, totalPageCount]);

  const handlePrevPageClick = useCallback(() => {
    const prevPage = currentPage - 1;

    setCurrentPage(prevPage > 0 ? prevPage : currentPage);
  }, [currentPage]);

  return (
    <>
    <Header />
    <main>
      <Searcher setFilter={setFilter} setProductCountOnPage={setProductCountOnPage} setIsFetchingProducts={setIsFetchingProducts} />
      <ProductTable
      products={products?.slice(currentPage * productCountOnPage - productCountOnPage, currentPage * productCountOnPage)}
      isError={isError}
      isLoading={isLoading}
      />
      {(!isError && !isLoading && !!totalPageCount) ? <MemoPagination onNextPageClick={handleNextPageClick}
      onPrevPageClick={handlePrevPageClick}
      disable={{
        isLeftPageExist: currentPage === 1,
        isRightPageExist: currentPage === totalPageCount,
      }}
      nav={{
        currentPage: currentPage,
        totalPageCount: totalPageCount,
      }}
      /> : ''}
      {isLoading && <Loader />}
    </main>
    <Footer />
    </>
  )
}

export default App;
