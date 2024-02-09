//Making a custom hook
import { useState, useEffect } from "react";//hook

const useFetch =(url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal:abortCont.signal})
                .then(res => {
                    console.log(res); //We can get the response
                    if (!res.ok) {
                        throw Error('Could not fetch the data from resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {   //For finding any error
                    // console.log(err.message); 
                     if(err.name ==='AbortError'){
                        console.log('fetch aborted')
                     } else {
                        setIsPending(false);
                        setError(err.message);
                     }
                })
        }, 1000); //Loading Message
       return () => abortCont.abort();
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;