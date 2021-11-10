import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { fetchPageData, fetchPagination } from "./api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3a23ad",
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          setProducts={setProducts}
          setCurrentPage={setCurrentPage}
          setSearchValue={setSearchValue}
        />
        <Products
          products={products}
          searchValue={searchValue}
          setCurrentPage={setCurrentPage}
          numPages={numPages}
        />
        <PaginationButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numPages={numPages}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
