import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../Pages/Home";
import Cars from "../Pages/Cars";
import Contactus from "../Pages/Contactus";
import Aboutus from "../Pages/Aboutus";
import Profile from "../Pages/Profile";
import Admin from "../Pages/Admin";
import NoPage from "../Pages/NoPage";
import Login from "../Pages/Login";
import Layout from "../Component/Layout/Layout";
import Admin_login from "../Pages/Admin_login";
import Signup from "../Pages/Signup";
import Details from "../Pages/Details";
import Add_car from "../Pages/Add_car";
import Removecar from "../Pages/Removecar";
import Update from "../Pages/Update";
import Reservation from "../Pages/Reservation";
import Customer from "../Pages/Customer";
import Car_Booking from "../Pages/Car_Booking";
import Navbar1 from "../Component/Subcimponent/Navbar1";
import Booking_Card from "../Component/Subcimponent/Booking_Card";
export default function Router() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin_login />} />
      <Route path="/log/" element={<Admin />}>
        <Route path="/log/" element={<Details />} />
        <Route index path="details" element={<Details />} />
        <Route path="Add_car" element={<Add_car />} />
        <Route path="removecar" element={<Removecar />} />
        <Route path="updatecar" element={<Update />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="customers" element={<Customer />} />
      </Route>

      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/Tripzy.com/user/" element={<Layout />}>
        <Route path="/Tripzy.com/user/" element={<Home />} />
        <Route index path="Home" element={<Home />} />
        <Route path="Cars" element={<Cars />} />
        <Route path="Cars/:slug" element={<Car_Booking/>} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Profile" element={<Profile />} />
        <Route path=" Admin" element={<Admin />} />
        <Route path="*" element={NoPage} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
