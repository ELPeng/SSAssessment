import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

import { useState, useEffect } from "react";
import { fetchPageData } from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(async () => {
    const pageProducts = await fetchPageData(searchValue, currentPage);
    setProducts(pageProducts);
  }, [currentPage]);
  console.log(searchValue);
  return (
    <div className="App">
      <Header
        setProducts={setProducts}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Products products={products} />
      <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
