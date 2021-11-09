import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

import { useState, useEffect } from "react";
import { fetchPageData, fetchPagination } from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [numPages, setNumPages] = useState(1);

  useEffect(async () => {
    const pageProducts = await fetchPageData(searchValue, currentPage);
    setProducts(pageProducts);
  }, [currentPage]);

  useEffect(async () => {
    const numPages = await fetchPagination(searchValue);
    setNumPages(numPages);
  }, [searchValue]);

  return (
    <div className="App">
      <Header setProducts={setProducts} setSearchValue={setSearchValue} />
      <Products products={products} />
      <PaginationButtons setCurrentPage={setCurrentPage} numPages={numPages} />
    </div>
  );
}

export default App;
