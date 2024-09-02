import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/Contact";
import Header from "./Components/Header";
import End from "./Components/End";
import Products from "./Products";
import Signup from "./Pages/Signin";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import ProductDetails from "./Pages/Details";

function AppRouter(){
    return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />} /> 
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Signin" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Search/:title/id/:id" element={<ProductDetails />} />

        </Routes>
        <End/>
      </BrowserRouter>
    </>
    );
}

export default AppRouter;
