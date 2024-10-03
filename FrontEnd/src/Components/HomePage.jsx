import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Coffe from "../assets/Coffe.png";
import Menu from "../Components/Menu";
import Order from "./Order";
import Contact from "../Components/Contac";
import About from "../Components/About";
import Footer from "../Components/Footer";


export default function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();
    const signToken = localStorage.getItem('token');
    const [userRole, setUserRole] = useState('');

    const menuRef = useRef(null);
    const orderRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (!signToken) {
            navigate('/'); 
         window.location.reload();
        } else {
            setUserRole(localStorage.getItem('Role'));
        }
    }, [signToken, navigate]);

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const HandleSignout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('Role');
        navigate('/');
        window.location.reload();
    }

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    }

    if (!signToken) {
        return null;
    }

    return (
        <>
            <div className="flex flex-wrap justify-between items-center m-4 md:m-8">
                <div className="mx-2 md:mx-5">
                    <span className="font-bold text-lg text-gray-500"><Link to="/home">Coffee Shop.</Link></span>
                </div>
                <nav className="w-full hidden md:flex md:w-auto mt-4 md:mt-0">
                    <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-7">
                        <li className="font-bold text-gray-500"><Link to="/home">HOME</Link></li>
                        <li className="font-bold text-gray-500"><Link to="#order" onClick={() => scrollToSection(orderRef)}>ORDER</Link></li>
                        <li className="font-bold text-gray-500"><Link to="#about" onClick={() => scrollToSection(aboutRef)}>ABOUT</Link></li>
                        <li className="font-bold text-gray-500"><Link to="#contact" onClick={() => scrollToSection(contactRef)}>CONTACT</Link></li>
                        {userRole === 'admin@gmail.com' && (
                            <li className="font-bold text-gray-500"><Link to="/Admin">ADMIN</Link></li>
                        )}
                    </ul>
                </nav>
                <div className="flex mr-10 gap-4 md:gap-10 mt-4 md:mt-0">
                    <div className="font-bold translate-y-2">
                        <Link to='/Carts' ><RiShoppingCart2Line className="text-2xl text-gray-500" /></Link>
                    </div>
                    <div className="font-bold" onClick={HandleSignout}>
                        <button className="bg-black text-white  md:w-24 p-2 font-bold rounded-full hover:bg-gray-800">
                            <p className='text-sm p-1'>SignOut</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-14 py-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
                    <div className="w-full md:w-1/2 flex justify-center order-first md:order-last">
                        <img src={Coffe} alt="coffee image" className="w-full max-w-md h-auto" />
                    </div>
                    <div className="text-center md:text-left md:w-1/2 order-last md:order-first">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Indulge in Perfection: Your Ultimate Coffee Experience Awaits</h2>
                        <p className="text-gray-500 mb-8">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam minus, ipsum
                            quos iure molestias perspiciatis, inventore corrupti culpa nemo eius Lorem
                            dolor. cupiditate dolor sit.
                        </p>
                        <button className="bg-black text-white w-full md:w-72 p-2 font-bold rounded-full hover:bg-gray-800" onClick={() => scrollToSection(orderRef)}>Order</button>
                    </div>
                </div>
                <div className="hidden md:flex flex-col gap-10 absolute right-6 bottom-3">
                    <ul>
                        <li className="text-xl mb-4"><FaFacebook /></li>
                        <li className="text-xl font-bold text-gray-500 mb-4"><BsTwitterX /></li>
                        <li className="text-xl"><FaInstagram /></li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 md:mt-32 text-center">
                <div ref={menuRef} id="menu">
                    <Menu />
                </div>
                <div ref={orderRef} id="order">
                    <Order />
                </div>
                <div ref={aboutRef} id="about">
                    <About />
                </div>
                <br /><br />
                <div ref={contactRef} id="contact">
                    <Contact />
                </div>
            </div>
            {/* </div> */}
            <Footer />
        </>
    )
}