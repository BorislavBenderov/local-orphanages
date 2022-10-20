import { Link } from 'react-router-dom';

export const HomePost = ({post}) => {
    return (
        <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <img className="post-image" src={post.imageUrl} alt="Kids clothes" />
            <div className="btn-wrapper">
                <Link to={`details/${post._id}`} className="details-btn btn">
                    Details
                </Link>
            </div>
        </div>
    );
}