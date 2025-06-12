import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { useNavigate } from "react-router";
import { deleteProduct } from "../api/products";

export default function ProductList() {

    const [product, setProducts] = useState([])

    const navigate = useNavigate()

    const loadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }
 
    const handleDelete = async (id) => {
        await deleteProduct(id)
        setProducts(product.filter(product => product.id !== id))
    }


    useEffect(() => {
        loadProducts()
    }, [])


    return (
    <div className="mt-8"> 
        <h1 className="text-3xl font-bold text-sky-900">Productos Disponibles</h1> 
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 text-white">   
            {product.map((product) => (
                <div key={product.id} className="bg-indigo-400 p-4 rounded-lg shadow">
                    <p>{product.nombre}</p>
                    <p><span className="font-bold">Precio: </span>S/ {product.precio}</p>
                    <p><span className="font-bold">Descripcion: </span>{product.descripcion}</p>
                    <div className="mt-4">
                        <button 
                        className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mt-2"
                        onClick={() => navigate(`/editar-producto/${product.id}`)}

                        >   
                            Editar
                            
                        </button>
                        <button 
                        className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
                        onClick={() => handleDelete(product.id)}
                        >
                            Eliminar
                            </button>
                </div>
                    </div>
            ))}
        </div>
    </div>
  );
}