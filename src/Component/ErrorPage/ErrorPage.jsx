import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center flex flex-col">
            <h1 className="text-7xl font-bolder">Oopsss!!!!</h1>
            <h2>{error.statusText}</h2>
            <p>{error.status}</p>
            <Link to="/"><button>Go Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;