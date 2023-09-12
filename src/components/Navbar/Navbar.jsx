import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { HiBars3BottomRight, HiXMark, HiUserCircle } from "react-icons/hi2";
import { AuthContext } from "../../Providers/Providers";

const Navbar = () => {

    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Toggled");
    }

    return (
        <nav className="flex items-center justify-between p-2 shadow">
            <div>
                <Link to="/"><img className="h-16" src={logo} alt="" /></Link>
            </div>
            <div className={ isOpen ? "display relative" : "flex-row items-center hidden md:display md:flex"}>
                <div>
                    <ul className="absolute left-2 md:left-0 top-16 md:top-0 md:relative flex-row md:flex [&>*]:p-3 font-semibold">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/chefs">Chefs</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/cuisines">Cuisines</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="absolute left-2 md:left-0 md:relative top-8 md:top-0">
                    {(user) ?
                        <div>
                            <Link to="/user"><HiUserCircle className="text-3xl" /></Link>
                        </div> :
                        <div>
                            <Link to="/login"><button className="btn btn-sm">Login</button></Link>
                        </div>
                    }
                </div>
            </div>
            <div onClick={toggleMenu} className="relative block display md:hidden">
                {
                    (isOpen) ?
                    <button><HiXMark className="text-3xl" /></button> :
                    <button><HiBars3BottomRight className="text-3xl" /></button>
                }
            </div>
        </nav>
    );
};

export default Navbar;