import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { Pagination } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Pagination count={10} showFirstButton showLastButton />
    </div>
  );
}

export default App;
