import {useparams,useHistory} from "react-router-dom";
import useFetch from './usefetch';

const BlogDetails = ()=>{
// this is about the delete button

    const {id} = useparams();
    const {data:blog,errors,isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const History = useHistory;

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
        method:'delete'
        }).then(() =>{
            history.pushState(`/`);
        })
    }


return(
    // this is where the article are been input 

    <div className="blog-details">
        {isPending && <div>loading...</div>}
        {errors && <div>{error}</div>}
        <article>
        <h2>{blog.title}</h2>
        <p>written by {blog.author}</p>
        <div>{blog.body}</div>
        <button onclick={HandleClick}>delete</button>
        </article>
    </div>
)
}

export default BlogDetails;