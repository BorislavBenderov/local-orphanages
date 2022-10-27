import { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { AuthContext } from '../../contexts/AuthContext'

export const Details = () => {
    const { posts } = useContext(PostContext);
    const { postId } = useParams();
    const { auth } = useContext(AuthContext);

    const post = posts.find(x => x._id === postId);
    const isOwner = auth._id === post._ownerId;

    let isLogged = false;
    if (auth.email) {
        isLogged = true;
    }


    return (
        <section id="details-page">
            <h1 className="title">Post Details</h1>
            <div id="container">
                <div id="details">
                    <div className="image-wrapper">
                        <img
                            src={post.imageUrl}
                            alt="Material Image"
                            className="post-image"
                        />
                    </div>
                    <div className="info">
                        <h2 className="title post-title">{post.title}</h2>
                        <p className="post-description">
                            {post.description}
                        </p>
                        <p className="post-address">{post.address}</p>
                        <p className="post-number">Phone number: {post.phone}</p>
                        <p className="donate-Item">Donate Materials: 0</p>
                        {/*Edit and Delete are only for creator*/}
                        {!isLogged ? ''
                            :
                            <div className="btns">
                                {isOwner
                                    ? <>
                                        <Link to={`/edit/${post._id}`} className="edit-btn btn">
                                            Edit
                                        </Link>
                                        <Link to="#" className="delete-btn btn">
                                            Delete
                                        </Link>
                                    </>
                                    : <Link to="#" className="donate-btn btn">
                                        Donate
                                    </Link>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>

    );
}