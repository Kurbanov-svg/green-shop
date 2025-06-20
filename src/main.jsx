import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./components/context/AuthContext.jsx";
import ProductContext from "./components/context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductContext>
      <AuthContext>
        <Layout>
          <App />
        </Layout>
      </AuthContext>
    </ProductContext>
  </BrowserRouter>
);
