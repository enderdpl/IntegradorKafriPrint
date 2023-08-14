import { createContext,useContext, useState } from "react";
import { createProductRequest,getProductsRequest } from "../api/Products";

const ProductContext= createContext()

export const useProducts= () =>{
    const context=useContext(ProductContext)
    if(!context){
        throw new Error('useProducts must be used within a ProductProvider')
    }
    return context  
}

export function ProductProvider({children}) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await getProductsRequest()
        setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    const createProduct= async (product) => {
        const res = await createProductRequest(product)
        console.log(res)
        
    }

    return (
     <ProductContext.Provider value={{
            products,
            createProduct,
            getProducts,
    }}> 
    {children}
    </ProductContext.Provider>
    )
    };