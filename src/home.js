import { useState } from "react";
import blogList from "./bloglist";
import usefetch  from "./usefetch";


const home = () =>{
    // use usefetch custom hook and pass url of the local json database
    const {data:blog, isPending, error} = useState('http://localhost:8000/blogs');

    // we then use the conditional display fromat to display incase we have an error
    // and a Loading message and pass the blogs and the title to the blog list component which could display the blogs in a list
return (
    <div classname= "home"> 
    {error && <div>{error}</div>}
    {ispending && <div>{Loading}</div>}
    <BlogList blogs = {blogs} title = "All Blogs"/>
    </div>
);
}

export default home;s