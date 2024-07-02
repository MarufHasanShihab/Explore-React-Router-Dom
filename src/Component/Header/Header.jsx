import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;