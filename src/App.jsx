import { BrowserRouter } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage/ProductListPage";
function App() {
  return (
    <BrowserRouter>
      <ProductListPage />
    </BrowserRouter>
  );
}

export default App;
