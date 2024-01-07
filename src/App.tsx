import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePrivilege from "./pages/HomePrivilege";
import Layout from "./components/Layout";
import CouponDetails from "./pages/CouponDetails";
import CouponRedeem from "./pages/CouponRedeem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePrivilege />} />
          <Route path="/coupon-details" element={<CouponDetails />} />
          <Route path="/coupon-redeem" element={<CouponRedeem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
