import {link} from "react-router-dom";

const blogList = ({blogs,title}) => {
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
            <div className="blog-preview" key= {blog.id}>
                <link to ={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>                
                 </link> 
            </div>                 
            )s)}
        </div>
    )
}

export default BlogList;