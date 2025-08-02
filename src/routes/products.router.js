import { Router } from "express";

const router = Router()

//IMPORTAMOS LO QUE NOS INTERESA DESDE PRODUCTS CONTROLLER
import { getAllProducts, searchProducts, getProductById } from "../controllers/products.controller.js";    

//RUTAS
router.get('/products', getAllProducts )
router.get('/products/search', searchProducts);
router.get('/products/:id',getProductById)

export default router