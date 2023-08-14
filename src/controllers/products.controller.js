import Product from "../models/product.model.js";

export const getProducts= async (req, res) =>{
    const products = await Product.find();
        res.status(200).json(products);
}


export const createProduct= async (req, res) =>{
    const {title, description, price, url,category} = req.body;
    const newProduct = new Product({
        title,
        description,
        price,
        url,
        category,
        user: req.user.id
    });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
}
export const getProduct= async (req, res) =>{
    const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){ return res.status(404).json({message: "Product not found"}) }
        res.status(200).json(product);
}

export const deleteProduct= async (req, res) =>{
    const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){ return res.status(404).json({message: "Product not found"}) }
        res.status(200).json({message: "Product deleted"})
}

export const updateProduct= async (req, res) =>{
    const {id} = req.params;
    const {title, description, price, url,category} = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, {
        title,
        description,
        price,
        url,
        category}, {new:true});
        if(!updatedProduct){ return res.status(404).json({message: "Product not found"}) };
        res.status(200).json(updatedProduct);
    }