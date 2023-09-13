import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/error.png";
import { FaAnglesLeft } from "react-icons/fa6";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="text-center">
            {
                (error) &&
                <img className="mx-auto" src={errorImage} alt="" />
            }
            <h3 className="text-2xl font-bold">{error.status}</h3>
            <h3 className="text-2xl my-3 font-medium">{error.statusText}</h3>
            <h5 className="text-xl">{error.data}</h5>
            {
                (error) &&
                <Link to="/"><button className="btn mt-16"><FaAnglesLeft /> Back to Home</button></Link>
            }
        </div>
    );
};

export default Error;