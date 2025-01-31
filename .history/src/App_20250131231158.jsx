import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Details from "./Components/Details.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Contact from "./Components/Contact.jsx";
import Create from "./Components/Create.jsx";
import { ProductProvider } from "./Components/utils/Context.jsx";


const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <ProductProvider>
        <Create/>
      </ProductProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
