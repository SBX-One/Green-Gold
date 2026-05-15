import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages"
import Home from "./pages/Home"
import CleanYourTrash from "./pages/CleanYourTrash";
import TrashCheckout from "./pages/TrashCheckout";
import { TrashProvider } from "./context/TrashContext";
import Receipt from "./pages/Receipt";
import ItemCheckout from "./pages/ItemCheckout";
import Keranjang from "./pages/Keranjang";
import Saldo from "./pages/Saldo";
import VerificationCard from "./view/Saldo/Verfication";
import AddSaldo from "./view/Saldo/AddSaldo";

function App() {
  return (
    <TrashProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ScanYourTrash" element={<CleanYourTrash />} />
          <Route path="/TrashCheckout" element={<TrashCheckout />} />
          <Route path="/Receipt" element={<Receipt />} />
          <Route path="/ItemCheckout" element={<ItemCheckout />} />
          <Route path="/Checkout+Sampah/:productName/:productId" element={<ItemCheckout />} />
          <Route path="/Keranjang" element={<Keranjang />} />
          <Route path="/Saldo" element={<Saldo />} />
          <Route path="/Saldo/Verification/:SelectedMethod" element={<VerificationCard />} />
          <Route path="/Saldo/addSaldo/:hash" element={<AddSaldo />} />
        </Routes>
      </BrowserRouter>
    </TrashProvider>
  );
}

export default App;
