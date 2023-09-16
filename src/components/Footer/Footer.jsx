import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaLink, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content">
            <div className="grid gap-5 p-2 md:grid-cols-3">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="text-center">
                    <h5 className="mt-2 font-semibold underline underline-offset-4"><FaLocationDot className="inline text-orange-600" /> Address</h5>
                    <div className="text-sm">
                        <p className="mt-3">Chittagong, Bangldesh</p>
                        <p>+880123456789, +880123456789</p>
                        <p>info@recipehaven.com</p>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <h5 className="mt-2 font-semibold underline underline-offset-4"><FaLink className="inline text-orange-600" /> Links</h5>
                    <ul className="mt-3 text-sm">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'text-orange-600' : ''} to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <p className="pb-3 italic text-center text-base-content">Copyright © Recipe Haven, 2023</p>
        </footer>
    );
};

export default Footer;