export const Edit = () => {
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <h1 className="title">Edit Post</h1>
                <article className="input-group">
                    <label htmlFor="title">Post Title</label>
                    <input type="title" name="title" id="title" defaultValue="" />
                </article>
                <article className="input-group">
                    <label htmlFor="description">Description of the needs </label>
                    <input type="text" name="description" id="description" defaultValue="" />
                </article>
                <article className="input-group">
                    <label htmlFor="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue="" />
                </article>
                <article className="input-group">
                    <label htmlFor="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" defaultValue="" />
                </article>
                <article className="input-group">
                    <label htmlFor="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" defaultValue="" />
                </article>
                <input type="submit" className="btn submit" defaultValue="Edit Post" />
            </form>
        </section>

    );
}