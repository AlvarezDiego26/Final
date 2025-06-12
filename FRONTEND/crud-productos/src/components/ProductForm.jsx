import { use, useEffect, useState } from 'react';
import { createProduct, getProduct } from '../api/products';
import { useNavigate, useParams } from 'react-router';
import { updateProduct } from '../api/products';
import toast from 'react-hot-toast';

export default function ProductForm() {

    const [product, setProduct] = useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    });

    const navigate = useNavigate();
    const params = useParams()

    useEffect(() => {
        const loadProduct = async () => {
            if (params.id) {
                const response = await getProduct(params.id);
                setProduct(response.data);                
            }
        }
        loadProduct()
    }, [params.id]);	            

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(params.id) {
            await updateProduct(params.id, product)
            toast.success('Producto editado correctamente')
        } else {
            await createProduct(product);
            toast.success('Producto creado correctamente')

        }

        navigate('/')
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={product.nombre}
                    id="nombre" 
                    type="text" 
                    onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
                    placeholder="Nombre del producto" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={product.precio}
                    id="precio" 
                    type="number" 
                    onChange={(e) => setProduct({ ...product, precio: e.target.value })}
                    placeholder="Precio del producto" />    
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripcion</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    value={product.descripcion}
                    id="descripcion" 
                    onChange={(e) => setProduct({ ...product, descripcion: e.target.value })}
                    placeholder="Descripcion del producto"></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-sky-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
                        Guardar Producto
                    </button>
                    <button className="bg-red-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button">
                        Cancelar
                    </button>                      
                </div>  
            </form>
        </div>
    )
}    