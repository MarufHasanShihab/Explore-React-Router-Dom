import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="border border-yellow-400 border-[4px] p-5 m-5 rounded-lg">
            <h1>{id}</h1>
            <p>{title}</p>
            <Link className='text-blue-500' to={`/posts/${id}`} >Show Details</Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;