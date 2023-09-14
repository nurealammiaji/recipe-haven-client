import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { HiBars3BottomRight, HiXMark, HiUserCircle } from "react-icons/hi2";
import { AuthContext } from "../../Providers/Providers";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Toggled");
    }

    const logoutHandler = () => {
        logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <nav className="flex items-center justify-between p-2 shadow-lg text-base-content bg-base-300">
            <div>
                <Link to="/"><img className="h-16" src={logo} alt="" /></Link>
            </div>
            <div className={isOpen ? "display" : "flex-row items-center hidden md:display md:flex"}>
                <div>
                    <ul className="flex-row md:flex [&>*]:p-3 font-semibold">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/chefs">Chefs</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {(user) ?
                        <div className="md:flex">
                            <Link to="/user"><button className="ml-3 btn btn-sm btn-circle btn-primary tooltip" data-tip={user.displayName ? user.displayName : user.email}><HiUserCircle className="text-3xl"  /></button></Link>
                            <button onClick={logoutHandler} className="ml-3 btn btn-sm btn-primary">Logout</button>
                        </div> :
                        <div>
                            <Link to="/login"><button className="ml-3 btn btn-sm btn-primary">Login</button></Link>
                        </div>
                    }
                </div>
            </div>
            <div onClick={toggleMenu} className="block display md:hidden">
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