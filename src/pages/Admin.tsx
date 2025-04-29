
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '@/components/layout/AdminLayout';

// Mock authentication - in a real app this would be connected to a proper auth system
const isAuthenticated = () => {
  const token = localStorage.getItem('admin_token');
  return !!token;
};

const Admin = () => {
  // Redirect to login if not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Admin;
