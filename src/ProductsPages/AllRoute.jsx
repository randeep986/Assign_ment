import React from "react";
import { Routes, Route } from "react-router-dom";
import ClothesSingle from "./ClothesSingle";
import Homepage from "../pages/Homepage";
import Clothes from "./Clothes";
import Shoes from "./Shoes";
import Furniture from "./Furniture";
import Gardens from "./Gardens";
import GardensSingle from "./GardensSingle";
import FurnitureSingle from "./FurnitureSingle";
import CartPage from "../Components/CartPage";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/cloth" element={<Clothes />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/gardens" element={<Gardens />} />
      <Route path="/cloth/:id" element={<ClothesSingle />} />
      <Route path="/gardens/:id" element={<GardensSingle />} />
      <Route path="/furniture/:id" element={<FurnitureSingle />} />
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/cartPage" element={<CartPage />} />
    </Routes>
  );
};

export default AllRoute;
