import React from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import ProductForm from "../features/admin/Product-form";

const AdminProductFormPage = () => {
  return (
    <>
      <Navbar>
        <ProductForm/>
      </Navbar>
      <Footer />
    </>
  );
};

export default AdminProductFormPage;
