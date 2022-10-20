import { useContext } from "react";
import { PostContext } from '../../contexts/PostContext';
import { Post } from "./Post";

export const MyPosts = () => {
    const { posts } = useContext(PostContext);

    return (
        <section id="my-posts-page">
            <h1 className="title">My Posts</h1>
            <div className="my-posts">
                {posts.length > 0
                    ? posts.map(post => <Post key={post._id} post={post} />)
                    : <h1 className="title no-posts-title">You have no posts yet!</h1>}
            </div>
        </section>
    );
}