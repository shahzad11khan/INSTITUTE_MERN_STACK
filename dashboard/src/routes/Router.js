import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import Allproducts from "../pages/AllRegStudents";
import Languages from "../pages/LanuagesRecords";
import Tutions from "../pages/TutionsRecords";
import Addstaff from "../pages/AddStaff";
import AddtutTeacher from "../pages/AddTutor";
import Alltut from "../pages/AllTut";
import Alllang from "../pages/AllLanguageTut";
import AddLangTeacher from "../pages/LanguageTut";
import Allorderdproducts from "../pages/Allorderdproducts";
import Updateproduct from "../pages/updateproduct";
import Login from "../pages/login";
import Userinfo from "../pages/userinfo";
import Feeform from "../pages/FeeRecords";
import FromSubmission from "../pages/FromSubmission";
import Onlinetest from "../pages/Onlinetest";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adduser" element={<Bookings />} />
      <Route path="/addstaff" element={<Addstaff />} />
      <Route path="/allusers" element={<SellCar />} />
      <Route path="/addproduct" element={<Settings />} />
      <Route path="/AllRegStudents" element={<Allproducts />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/AddtutTeacher" element={<AddtutTeacher />} />
      <Route path="/tutions" element={<Tutions />} />
      <Route path="/alltut" element={<Alltut />} />
      <Route path="/alllang" element={<Alllang />} />
      <Route path="/AddLangTeacher" element={<AddLangTeacher />} />
      <Route path="/orderdproducts" element={<Allorderdproducts />} />
      <Route path="/updateproduct/:id" element={<Updateproduct />} />
      <Route path="/userinfo" element={<Userinfo />} />
      <Route path="/feeform" element={<Feeform />} />
      <Route path="/fromsubmission" element={<FromSubmission />} />
      <Route path="/onlinetest" element={<Onlinetest />} />
    </Routes>
  );
};

export default Router;
