import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { HomePost } from "./HomePost";

export const Home = () => {
    const { posts } = useContext(PostContext);

    return (
        <section id="dashboard-page">
            <h1 className="title">All Posts</h1>
            <div className="all-posts">
                {posts.length > 0
                    ? posts.map(post => <HomePost key={post._id} post={post} />)
                    : <h1 className="title no-posts-title">No posts yet!</h1>}
            </div>
        </section>
    );
}