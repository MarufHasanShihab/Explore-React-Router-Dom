import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Our Fantastic Users</h1>
            <div className="grid grid-cols-3">
            {
                users.map(user => <User key={user.id} user={user} ></User>)
            }
            </div>
        </div>
    );
};

export default Users;