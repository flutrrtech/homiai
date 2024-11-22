import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import LogoUpload from '../pages/LogoUpload';
import PaymentPage from '../pages/PaymentPage';
import CreationPage from '../pages/CreationPage';
import AdWriting from '../pages/services/AdWriting';
import BlogWriting from '../pages/services/BlogWriting';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/layout/Layout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logo-upload" element={<LogoUpload />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/create" element={<CreationPage />} />
            <Route path="/services/ad-writing" element={<AdWriting />} />
            <Route path="/services/blog-writing" element={<BlogWriting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;