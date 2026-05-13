import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages"
import Home from "./pages/Home"
import CleanYourTrash from "./pages/CleanYourTrash";
import TrashCheckout from "./pages/TrashCheckout";
import { TrashProvider } from "./context/TrashContext";

function App() {
  return (
    <TrashProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ScanYourTrash" element={<CleanYourTrash />} />
          <Route path="/TrashCheckout" element={<TrashCheckout />} />
        </Routes>
      </BrowserRouter>
    </TrashProvider>
  );
}

export default App;
