import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {

    const { loading, user } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen text-center">
            <br /><br />
            <span className="loading loading-ring loading-lg text-primary"></span>
            <br /><br />
            <h3 className="text-2xl text-primary">Loading <span className="ml-3 loading loading-dots loading-md text-primary"></span></h3>
            <br /><br />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default Private;