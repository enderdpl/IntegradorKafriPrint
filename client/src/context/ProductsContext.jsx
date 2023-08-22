import React, { createContext, useContext, useState } from "react";
import {
  createProductRequest,
  getProductsRequest,
  getProductsNoValidatedRequest,
  deleteProductRequest
} from "../api/Products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await getProductsRequest();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsNoValidated = async () => {
    try {
      const response = await getProductsNoValidatedRequest();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (product) => {
    const res = await createProductRequest(product);
    console.log(res);
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 200) {
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        getProducts,
        getProductsNoValidated,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
