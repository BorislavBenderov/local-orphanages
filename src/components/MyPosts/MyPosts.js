import { useContext } from "react";
import { PostContext } from '../../contexts/PostContext';
import { AuthContext } from "../../contexts/AuthContext";
import { Post } from "./Post";

export const MyPosts = () => {
    const { posts } = useContext(PostContext);
    const { auth } = useContext(AuthContext);
    const ownerPosts = posts.filter(x => x._ownerId === auth._id);

    return (
        <section id="my-posts-page">
            <h1 className="title">My Posts</h1>
            <div className="my-posts">
                {ownerPosts.length > 0
                    ? ownerPosts.map(post => <Post key={post._id} post={post} />)
                    : <h1 className="title no-posts-title">You have no posts yet!</h1>}
            </div>
        </section>
    );
}