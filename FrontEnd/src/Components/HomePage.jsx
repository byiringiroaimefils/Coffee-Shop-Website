import Navigation from "../Components/Navigation";
import Coffe from "../assets/Coffe.png";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Order from "./order";
import About from "./About";
import Contact from "./Contac";
export default function HomePage() {

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

    return (
        <>
            <Navigation />
            <div className="">

                <div className=" md:flex p-14 md:my-32 justify-center gap-20">
                    <div className="translate-y-[-5%]">
                        <h2 className="text-4xl font-extrabold">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit Explicabo.</h2> <br />
                        <p className="text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam minus , ipsum <br />
                            quos iure molestias perspiciatis, inventore corrupti culpa nemo eius Lorem   <br />
                            dolor. cupiditate dolor sit.
                        </p> <br /><br />
                        <button className="bg-black text-white w-64 p-2 font-bold rounded-full hover:bg-gray-800">Order</button>
                    </div> <br />
                    <div className=" md:translate-y-[-27%] translate-x-[-4%] bg-center">
                        <img src={Coffe} alt="coffee image" className="w-auto h-auto" />
                    </div>
                    <div className="translate-y-24 flex flex-col gap-10 ">
                        <ul className=" hidden md:block">
                            <li className="text-xl">< FaFacebook /></li> <br />
                            <li className="text-xl font-bold text-gray-500">< BsTwitterX /></li> <br />
                            <li className="text-xl">< FaInstagram /></li>
                        </ul>
                    </div>
                </div><br /><br /><br /><br />
                <div className="my-[-20%] text-center">
                <h2 className="text-4xl font-bold mb-2">FEATURED BEVERAGE</h2>
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
                    <Order /> <br /><br />
                    <About /> <br /><br />
                    <Contact />
                </div>
            </div>
        </>
    )
}
