import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h3 className="text-2xl font-bold">{error.status}</h3>
            <h3 className="text-2xl my-3 font-medium">{error.statusText}</h3>
            <h5 className="text-xl">{error.data}</h5>
        </div>
    );
};

export default Error;