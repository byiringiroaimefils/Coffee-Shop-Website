import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";




export default function Navigation() {

    const navigate = useNavigate()
    // const signToken = localStorage.getItem('token')
    // const user = localStorage.getItem('user')

    const HandleSignout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
    // const LogIn = () => {
    //     navigate('/Login')
    // }

    return (
        <>
            {

                <div className="Navigation flex justify-between m-10">
                    <div className="Logo mx-5">
                        <span className="font-bold text-lg text-gray-500"><Link>Coffee Shop.</Link></span>
                    </div>
                    <nav className="md:flex hidden">
                        <ul className="flex gap-7 translate-x-[-15%]">
                            <li className="font-bold text-gray-500"><Link to={"/Home"}>Home</Link></li>
                            <li className="font-bold text-gray-500"><Link>Order</Link></li>
                            <li className="font-bold text-gray-500"><Link>About</Link></li>
                            <li className="font-bold text-gray-500"><Link>Contact</Link></li>
                            {/* <li className="font-bold text-gray-500"><Link>Admin</Link></li> */}
                        </ul>
                    </nav>
                    <div className="Right flex gap-10 translate-x-[-10%]">
                        <div className="font-bold md:block hidden">
                            <Link to='/Carts' ><RiShoppingCart2Line className="text-2xl text-gray-500" /></Link>
                        </div>
                        <div className="Account font-bold" >
                            < IoMdLogOut onAbort={HandleSignout} className="text-2xl text-gray-500" />
                        </div>
                    </div>
                </div>

            }
        </>
    )
}
