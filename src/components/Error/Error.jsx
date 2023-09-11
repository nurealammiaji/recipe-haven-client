import { useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h3>{error.status}</h3>
            <h3>{error.statusText}</h3>
            <h5>{error.data}</h5>
        </div>
    );
};

export default Error;