import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);
  return (
    <div className="App">
      <Header
        setProducts={setProducts}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Products products={products} />
      <PaginationButtons />
    </div>
  );
}

export default App;
