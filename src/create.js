import { useState } from "react";
import {useHistory} from "react-router-dom";

const create = () =>{
    const [title,setTitle] = useState('');
    const [body,SetBody] =useState('');
    const [author,setAuthor] = useState("Emmz");
    const [isPending, setIsPending] = useState("false");
    const history = useHistory;

    // created the handleSubmit button 
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author} ;
        setIsPending(true);


        fetch ('http://localhost:8000/blogs',{
            method:'post',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
        setIsPending(false);
        history.push('/');
        })
    }
   
    return(
        // added anew blog and title
        <div className="create">
            <h2>add  a new blog</h2>
            <form onsubmit={handleSubmit}>
                <label>blog Title</label>
                <input
                type="text"
                required
                value={title}
                onchange={(e)=> setTitle(e.target.value)}
                />
                {/* added the blogtext */}
                <label>Blog Body</label>
                <textarea
                required
                value={body}
                onchange={(e) => SetBody(e.target.value)}
                />
                {/* added the blog author name */}
                <label> Blog Author</label>
                <select
                value="author"
                onChange={(e) => setAuthor(e.target.value)}
                >
                <option value="Emmanuel">Emmanuel </option>
                <option value = "Emmz">Emmz</option>
                <option value="Samuel"> Samuel</option>
                </select>
                {/* loading the information of the blog */}
                {isPending && <button>Add blog</button>}
                {isPending && <button>Adding  blog</button>}

            </form>
        </div>
    )



}

export default create;