import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {id, title, body} = post
    return (
        <div className="border border-yellow-400 border-[4px] p-5 m-5 rounded-lg">
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;