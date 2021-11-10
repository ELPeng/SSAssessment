// import Header from "./components/Header/Header";
// import Products from "./components/Products/Products";
// import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

// import { useState, useEffect } from "react";
// import { createTheme, ThemeProvider } from "@material-ui/core";
// import { fetchPageData, fetchPagination } from "./api";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3a23ad",
//     },
//   },
// });

// function App() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [numPages, setNumPages] = useState(1);
//   const [searchValue, setSearchValue] = useState("");

//   useEffect(async () => {
//     const pageProducts = await fetchPageData(searchValue, currentPage);
//     setProducts(pageProducts);

//     // setResultsText(
//     //   `SHOWING ${paginationData.begin} - ${paginationData.end} OF ${paginationData.totalResults} RESULTS`
//     // );
//     window.scrollTo(0, 0);
//   }, [currentPage]);

//   //   useEffect(async () => {
//   //     const pageProducts = await fetchPageData(searchValue, currentPage);
//   //     const paginationData = await fetchPagination(searchValue);
//   //     setProducts(pageProducts);

//   //     setResultsText(
//   //       `SHOWING ${paginationData.begin} - ${paginationData.end} OF ${paginationData.totalResults} RESULTS`
//   //     );
//   //     window.scrollTo(0, 0);
//   //   }, [currentPage]);

//   //   console.log(resultsText);

//   useEffect(async () => {
//     const paginationData = await fetchPagination(searchValue);
//     if (!paginationData) return;
//     setNumPages(paginationData.totalPages);
//     // setResultsText(`SHOWING ${begin} - ${end} OF ${totalResults} RESULTS`)
//   }, [searchValue]);

//   console.log(numPages);

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="App">
//         <Header
//           setProducts={setProducts}
//           setCurrentPage={setCurrentPage}
//           setSearchValue={setSearchValue}
//         />
//         <Products products={products} searchValue={searchValue} />
//         <PaginationButtons
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//           numPages={numPages}
//         />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

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

  useEffect(async () => {
    const { results, pagination } = await fetchPageData(
      searchValue,
      currentPage
    );
    const { begin, end, totalResults } = pagination;
    setProducts(results);
    setTotalProducts(totalResults);
    setPageRange({ begin, end });
  }, [currentPage]);

  useEffect(async () => {
    const pagination = await fetchPagination(searchValue);
    if (pagination) {
      setNumPages(pagination.totalPages);
      setTotalProducts(pagination.totalResults);
    } else {
      setNumPages(1);
    }
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
