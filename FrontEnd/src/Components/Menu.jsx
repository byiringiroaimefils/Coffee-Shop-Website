import {  useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const menuItems = [
    {
        title: "African Tea",
        description: "Serving with Beatiful Tea",
        image: "https://static.wixstatic.com/media/b8deca_4a5096d76b13468db0d2ba865d43895f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", // Replace with actual image path
        link: "#",
    },
    {
        title: "African Coffe",
        description: "All Coffee, Smoothies & Power Drinks",
        image: "https://static.wixstatic.com/media/b8deca_3ece1d16da1547f28af71d8d7bf5952f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", // Replace with actual image path
        link: "#",
    },
    {
        title: "African Coffe",
        description: "All Coffee, Smoothies & Power Drinks",
        image: "https://static.wixstatic.com/media/b8deca_3ece1d16da1547f28af71d8d7bf5952f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", // Replace with actual image path
        link: "#",
    },
];

export default function Menu() {
    const navigate = useNavigate();
    const signToken = localStorage.getItem('token');
    useEffect(() => {
        if (!signToken) {
            navigate('/');
        }
    }, []);



    return (
        <>
            
            <div>
                <h2 className="text-4xl font-bold mb-2">MENU</h2>
                <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, hic!</p> <br />
                <div className=" py-12">
                    <div className="container mx-auto ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between p-10">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center "
                                >
                                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-center mb-4">{item.description}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}