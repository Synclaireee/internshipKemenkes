import { useCallback, useState } from 'react'

const useReserveHospital = () =>{
    const [loading, setLoading] = useState(false);

    const postData = useCallback(async (props)=>{
        try{
            setLoading(true);
            const url = "https://isip-mock-be.herokuapp.com/hospitals/reserve"
            const res = await fetch(url, {method: 'POST', mode: 'cors', body:JSON.stringify({"entity": {...props}})});
            if(res.status === 500){
                const data = await res.json();
                throw new Error(data.error || 'Error');
            }
        }
        catch (e){
            throw e;
        }
        finally{
            setLoading(false);
        }
    },[]);
    return {postData, loading};
}

export default useReserveHospital;