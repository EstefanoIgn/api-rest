//IMPORTAMOS DE MODELS
import * as Model from '../models/Product.js'

export const getAllProducts = async (req, res) => {
    const { category } = req.query;

    const products = await Model.getAllProducts()

    if (category) {
        const productFiltered = products.filter((item) =>
        item.categories.includes(category)
    );
        res.json(productFiltered);
        return
    } else {
        res.json(products);
    }
}

export const searchProducts =  (req, res) => {
    const { name } = req.query;

    if (!name) {
    return res.status(400).json({ error: 'El nombre es requerido' });
    }

    const products = Model.getAllProducts()

    const productsFiltered = products.filter(item =>
    item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (productsFiltered.length === 0) {
    return res.status(404).json({ error: 'No se encontraron productos' });
    }

    res.json(productsFiltered);
}

export const getProductById = async (req, res) => {
    try {
      const id = req.params.id;
  
      const product = await Model.getProductByID(id);
  
      if (!product) {
        return res.status(404).json({ error: "No existe el producto" });
      }
  
      res.json(product);
    } catch (error) {
      console.error("Error en getProductById:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  