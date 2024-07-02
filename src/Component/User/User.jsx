import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {
    const { id, name, email, phone} = user;
    return (
        <div className="border border-yellow-400 border-[4px] p-5 m-5 rounded-lg">
            <h1>{name}</h1>
            <p>email: {email}</p>
            <h4>Phone: {phone}</h4>
            <Link className="text-blue-500" to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes ={
    user: PropTypes.object.isRequired
}

export default User;