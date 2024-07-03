import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const handleSeeDetails = ()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className="border border-yellow-400 border-[4px] p-5 m-5 rounded-lg ">
            <h1>{id}</h1>
            <p>{title}</p>
            <Link className='text-blue-500' to={`/posts/${id}`} >Show Details</Link><br/>
            <button onClick={handleSeeDetails} className='p-2 bg-sky-400 mt-4 rounded-lg '>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;