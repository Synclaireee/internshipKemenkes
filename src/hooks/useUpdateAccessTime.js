import { useState } from 'react'

const useUpdateAccessTime = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const postData = async (props)=>{
        try{
            setLoading(true);
            const url = "https://isip-mock-be.herokuapp.com/access_times/update"
            const res = await fetch(url, {method: 'POST', mode: 'cors', body:JSON.stringify({...props})});
            if(res.status === 200){
                setError(false);
            }
            setLoading(false);
        }
        catch{
            setLoading(false);
            setError(true);
        }
        return {loading, error}
    };

    return postData;
}

export default useUpdateAccessTime;