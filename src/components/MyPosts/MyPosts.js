
export const MyPosts = () => {
    

    return (
        <section id="my-posts-page">
            <h1 className="title">My Posts</h1>
            {/* Display a div with information about every post (if any)*/}
            <div className="my-posts">
                <div className="post">
                    <h2 className="post-title">Clothes</h2>
                    <img
                        className="post-image"
                        src="./images/clothes.jpeg"
                        alt="Material Image"
                    />
                    <div className="btn-wrapper">
                        <a href="#" className="details-btn btn">
                            Details
                        </a>
                    </div>
                </div>
                <div className="post">
                    <h2 className="post-title">Toys</h2>
                    <img
                        className="post-image"
                        src="./images/toys.jpeg"
                        alt="Material Image"
                    />
                    <div className="btn-wrapper">
                        <a href="#" className="details-btn btn">
                            Details
                        </a>
                    </div>
                </div>
            </div>
            {/* Display an h1 if there are no posts */}
            <h1 className="title no-posts-title">You have no posts yet!</h1>
        </section>

    );
}