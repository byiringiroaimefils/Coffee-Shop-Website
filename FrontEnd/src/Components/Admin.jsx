import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
    const navigate = useNavigate();
    const signToken = localStorage.getItem('token');
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [decription, setDecription] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);

    // Fetch product 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/products');
                setProducts(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const HandleSignout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    if (!signToken) {
        return null;
    }

    // Delete product 
    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:8000/deleteProduct/${productId}`);
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Handle form 
    const handleForm = (e) => {
        e.preventDefault();
        const data = {
            name,
            image,
            price,
            decription
        };
        if (editingProduct) {
            

            axios.put(`http://localhost:8000/EditProduct/${editingProduct._id}`, data)
                .then((response) => {
                    console.log(response.data);
                    setProducts(products.map(p => p._id === editingProduct._id ? {...p, ...data} : p));
                    resetForm();
                })
                .catch((error) => {
                    console.error('Error updating product:', error);
                });
        } else {


            axios.post('http://localhost:8000/product', data)
                .then((response) => {
                    console.log(response.data);
                    setProducts([...products, response.data]);
                    resetForm();
                })
                .catch((error) => {
                    console.error('Error adding product:', error);
                });
        }
    };

    const resetForm = () => {
        setName('');
        setImage('');
        setPrice('');
        setDecription('');
        setEditingProduct(null);
    }

    const handleEdit = (product) => {
        setEditingProduct(product);
        setName(product.Name);
        setImage(product.Image);
        setPrice(product.Price);
        setDecription(product.Decription);
    }

    return (
        <>
            <div className="Navigation flex justify-between m-8">
                <div className="Logo mx-5">
                    <span className="font-bold text-lg text-gray-500"><Link to="/home">Coffee Shop.</Link></span>
                </div>
                <nav className="md:flex hidden">
                    <ul className="flex gap-7 translate-x-[-15%]">
                        <li className="font-bold text-gray-500"><Link to="/home">Home</Link></li>
                        <li className="font-bold text-gray-500"><Link to="/order">ORDER</Link></li>
                        <li className="font-bold text-gray-500"><Link to="/about">AbOUT</Link></li>
                        <li className="font-bold text-gray-500"><Link to="/contact">CONTACT</Link></li>
                        <li className="font-bold text-gray-500"><Link to="/Admin">ADMIN</Link></li>
                    </ul>
                </nav>
                <div className="Right flex gap-10 translate-x-[-10%]">
                    <div className="font-bold md:block hidden">
                        <Link to='/Carts' ><RiShoppingCart2Line className="text-2xl text-gray-500" /></Link>
                    </div>
                    <div className="Account font-bold" >
                        <IoMdLogOut onClick={HandleSignout} className="text-2xl text-gray-500 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div>
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h2>

                    <form className="mb-12 space-y-4" onSubmit={handleForm}>

                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="productName"
                                name="productName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                Image URL
                            </label>
                            <input
                                type="url"
                                id="imageUrl"
                                name="imageUrl"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                step="0.01"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="decription" className="block text-sm font-medium text-gray-700 mb-1">
                                Decription
                            </label>
                            <textarea
                                id="decription"
                                name="decription"
                                value={decription}
                                onChange={(e) => setDecription(e.target.value)}
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                                required
                            ></textarea>
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                            {editingProduct ? 'Update Product' : 'Add Product'}
                        </button>
                    </form>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Decription
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products && products.length > 0 ? (
                                    products.map((product) => (
                                        <tr key={product._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{product.Name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{product.Decription}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">${parseFloat(product.Price).toFixed(2)}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button onClick={() => handleEdit(product)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                                <button onClick={() => deleteProduct(product._id)} className="text-red-600 hover:text-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="text-sm text-gray-500">No products available</div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
