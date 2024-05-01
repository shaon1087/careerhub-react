import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h2>OOPs</h2>
            <Link to="/">Go Back To Home</Link>
        </div>
    );
};

export default ErrorElement;