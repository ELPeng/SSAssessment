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
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [numPages, setNumPages] = useState(1);
  const [pageRange, setPageRange] = useState({});
  const [totalProducts, setTotalProducts] = useState("");

  // Updates product data and page info on page change
  useEffect(() => {
    const fetchAPIData = async () => {
      const { results, pagination } = await fetchPageData(
        searchValue,
        currentPage
      );
      const { begin, end, totalResults } = pagination;
      setProducts(results);
      setTotalProducts(totalResults);
      setPageRange({ begin, end });
    };
    fetchAPIData();
  }, [currentPage, searchValue]);

  // Updates the number of total pages and results on product search
  useEffect(() => {
    const fetchAPIData = async () => {
      const pagination = await fetchPagination(searchValue);
      if (pagination) {
        setNumPages(pagination.totalPages);
        setTotalProducts(pagination.totalResults);
      } else {
        setNumPages(1);
      }
    };
    fetchAPIData();
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
          range={pageRange}
          totalProducts={totalProducts}
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
