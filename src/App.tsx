import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePrivilege from "./pages/HomePrivilege";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePrivilege />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
