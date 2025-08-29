import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/details/:id/:name" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
