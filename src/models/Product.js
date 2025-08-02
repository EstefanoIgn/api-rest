//DATOS
const products = [
    { id: 1, name: "Camiseta Deportiva", price: 150, categories: ["Ropa", "Deportes"] },
    { id: 2, name: "Zapatos Running", price: 1200, categories: ["Calzado", "Deportes"] },
    { id: 3, name: "Mochila Escolar", price: 350, categories: ["Accesorios", "Escolar"] }
];        

//HACEMOS IMPORTACIONES
import {db} from './firebase.js'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'

const productsColecction = collection(db, "products")

export const getAllProducts = async () =>{
    try {
        const snapshot = await  getDocs(productsColecction)
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    } catch (error) {
        console.error(error)
    }
}




export const getProductByID = async (id) => {
    try {
      const productRef = doc(productsCollection, id);
      const snapshot = await getDoc(productRef);
      return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      throw error;
    }
  };
  