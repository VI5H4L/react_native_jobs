import { useEffect,useState } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env"

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint,query)=>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': "268298d4bfmshcd9985fbe32000ep1f60cbjsn81ec7e41d7d4",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query
        },
    };

    const fetchData = async () => {
        setIsLoading(true);
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        try{

        } catch (error){
            setError(error);
            alert("There is an error!");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();

    }

    return {data,isLoading,error,refetch};
}

export default useFetch;