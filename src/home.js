import { useState, useEffect } from "react";
import BlogList from "./bloglist";
// import usefetch  from "./usefetch";
// import axios from axios;

const Home = () =>{
    // initialize blog data using usestate
    let [blogData, setBlogData] = useState('');
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    // useEffect to change blogData
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json()
                console.log(json); 
                setBlogData(json);
                
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []); 

    // use usefetch custom hook and pass url of the local json database
    // const {data:blogs, isPending, error} = useState('https://jsonplaceholder.typicode.com/posts');

    // we then use the conditional display fromat to display incase we have an error
    // and a Loading message and pass the blogs and the title to the blog list component which could display the blogs in a list
return (
    <div className= "home"> 
        {error && <div>{error}</div>}
        {isPending && <div>{Loading}</div>}
        <BlogList blogs = {blogData} title = "All Blogs"/>
    </div>
);
}

export default Home;