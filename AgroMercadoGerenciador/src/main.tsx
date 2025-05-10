import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./assets/pages/home/index.tsx";
import ProductsRegister from "./assets/pages/products-register/products-register.tsx";
import ProductsView from "./assets/pages/products-view/products-view.tsx";
import Header from "./assets/components/header.tsx";
import Footer from "./assets/components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<ProductsView />} />
      <Route path="/products/register" element={<ProductsRegister />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
