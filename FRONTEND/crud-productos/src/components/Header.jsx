import { Link } from "react-router"


export default function Header() {   
    return (
        <nav className="py-4 mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Productos App</Link>
                <div>
                    <Link to="/nuevo-producto" className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">Nuevo Producto</Link>                 
                </div>
            </div>
        </nav>
    )
}    