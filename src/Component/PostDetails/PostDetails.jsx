import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {id, title, body} = post;
    const navigate = useNavigate();
    const postId = useParams();
    console.log(postId)
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div className="border border-yellow-400 border-[4px] p-5 m-5 rounded-lg ">
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack} className='p-2 bg-sky-400 mt-4 rounded-lg  '>Go Back</button>
        </div>
    );
};

export default PostDetails;