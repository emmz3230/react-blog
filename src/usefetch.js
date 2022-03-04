import {useState,useEffect} from "react";

const useState = (url) => {

    const [data, setData] =useState([]);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

useEffect(()=>{
    const abortCont= new AbortController();


    setTimeout(() =>{
        fetch(url,{signal:sabortCont.signal})
        .then(res => {
            if(!res.ok)
            {
                throw error ('could not find data from resource');s
            }
            return res.json();
        })

        .then((data)=>{
            setData(data);
            setIsPending(false);
            setError(null);
        })

        .catch((err) => {
            if(err.name==='AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
        })
    },5);
    return () => abortCont.abort();
},[url]);
return {data,isPending,error};   
    
}
export default useFetch;