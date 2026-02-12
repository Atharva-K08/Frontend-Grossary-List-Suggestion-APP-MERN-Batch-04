import { BrowserRouter, Route, Routes } from "react-router-dom";
import GrossaryListPage from "./pages/GrossaryListPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import SuggestionPage from "./pages/SuggestionPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<GrossaryListPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/suggestions" element={<SuggestionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
