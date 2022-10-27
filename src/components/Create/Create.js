import * as postService from '../../services/postService';
import { PostContext } from '../../contexts/PostContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const { onCreate } = useContext(PostContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const userdata = Object.fromEntries(new FormData(e.target));
        
        postService.create(userdata)
        .then(newPost => {
            onCreate(newPost);
            navigate('/');
        })
    }


    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <h1 className="title">Create Post</h1>
                <article className="input-group">
                    <label htmlFor="title">Post Title</label>
                    <input type="title" name="title" id="title" />
                </article>
                <article className="input-group">
                    <label htmlFor="description">Description of the needs </label>
                    <input type="text" name="description" id="description" />
                </article>
                <article className="input-group">
                    <label htmlFor="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" />
                </article>
                <article className="input-group">
                    <label htmlFor="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" />
                </article>
                <article className="input-group">
                    <label htmlFor="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" />
                </article>
                <input type="submit" className="btn submit" defaultValue="Create Post" />
            </form>
        </section>

    );
}