import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import GrossaryListPage from "./pages/GrossaryListPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import SuggestionPage from "./pages/SuggestionPage";
import Header from "./components/common/Header";
import ProtectedRoute from "./utils/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ProtectedRoute>
        <Header />
        <Routes>
          <Route path="/" element={<GrossaryListPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/suggestions" element={<SuggestionPage />} />
        </Routes>

      </ProtectedRoute>
    </>
  );
}

export default App;
