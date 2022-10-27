import { PostContext } from '../../contexts/PostContext';
import { useContext, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import * as postService from '../../services/postService';

export const Edit = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const { posts, onEdit } = useContext(PostContext);
    const post = posts.find(x => x._id === postId);

    const [values, setValues] = useState({
        title: post.title,
        description: post.description,
        imageUrl: post.imageUrl,
        address: post.address,
        phone: post.phone
    });
    
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userdata = Object.fromEntries(new FormData(e.target));

        postService.edit(postId, userdata)
        .then(result => {
            onEdit(postId, result);
            navigate(`/details/${postId}`);
        })
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <h1 className="title">Edit Post</h1>
                <article className="input-group">
                    <label htmlFor="title">Post Title</label>
                    <input type="title" name="title" id="title" value={values.title} onChange={changeHandler}/>
                </article>
                <article className="input-group">
                    <label htmlFor="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value={values.description} onChange={changeHandler}/>
                </article>
                <article className="input-group">
                    <label htmlFor="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value={values.imageUrl} onChange={changeHandler}/>
                </article>
                <article className="input-group">
                    <label htmlFor="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value={values.address} onChange={changeHandler}/>
                </article>
                <article className="input-group">
                    <label htmlFor="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value={values.phone} onChange={changeHandler}/>
                </article>
                <input type="submit" className="btn submit" value="Edit Post" />
            </form>
        </section>

    );
}