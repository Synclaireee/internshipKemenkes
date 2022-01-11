import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


function Identity() {
  const history = useHistory();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(!user || (user && !user.EMAIL)){
      history.push('/login');
      return;
    }
  });
  
  return (
    <div>
        <div>
            IDENTITAS DATA PESERTA
        </div>
        <div>
            Nama Peserta
        </div>
    </div>
  )
}

export default Identity