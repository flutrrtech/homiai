import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import Dashboard from "../pages/Dashboard";
import LogoUpload from "../pages/LogoUpload";
import PaymentPage from "../pages/PaymentPage";
import CreationPage from "../pages/CreationPage";
import AdWriting from "../pages/services/AdWriting";
import BlogWriting from "../pages/services/BlogWriting";
import PrivateRoute from "./PrivateRoute";
import Layout from "../components/layout/Layout";
import WorkPlace from "../pages/WorkPlace";
import SEOWriting from "../pages/services/SEOWriting";
import CompanyUploadForm from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route
              path="/add-company-details"
              element={<CompanyUploadForm />}
            />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/create" element={<CreationPage />} />
            <Route path="/workplace" element={<WorkPlace />} />
            <Route path="/services/ad-writing" element={<AdWriting />} />
            <Route path="/services/blog-writing" element={<BlogWriting />} />
            <Route path="/services/seo-writing" element={<SEOWriting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
