import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { HiUserCircle } from "react-icons/hi2";

const Navbar = () => {

    const { user } = useContext(AuthContext);

    return (
        <nav className="flex-row items-center justify-center p-2 shadow md:justify-between md:flex">
            <div>
                <img className="h-16" src={logo} alt="" />
            </div>
            <div className="flex-row items-center md:flex">
                <div>
                    <ul className="flex-row md:flex [&>*]:p-3 font-semibold">
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
                <div>
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
        </nav>
    );
};

export default Navbar;