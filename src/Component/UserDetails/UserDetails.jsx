import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userInfo = useLoaderData();
    const {name, website} = userInfo
    return (
        <div>
            <h1>{name}</h1>
            <p>Visit My Website : {website}</p>
        </div>
    );
};

export default UserDetails;