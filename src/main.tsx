import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PresentationSection from "../src/assets/components/presentation-section.tsx";
import ProductsRegister from "./assets/pages/products-register/products-register.tsx";
import ProductsView from "./assets/pages/products-view/products-view.tsx";
import Header from "./assets/components/header.tsx";
import Login from "./assets/pages/login/login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<PresentationSection />} />
              <Route path="products" element={<ProductsView />} />
              <Route path="products/register" element={<ProductsRegister />} />
              {/* Adicione outras rotas aqui */}
            </Routes>
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
