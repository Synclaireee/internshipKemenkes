import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'


function PostRegistration() {
  const history = useHistory();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(!user || (user && !user.EMAIL)){
      history.push('/login');
      return;
    }
  });
  
  return (
    <div className={styles.title}>
        <span>ANDA SUDAH MELAKUKAN PEMILIHAN WAHANA</span>
        <span>SILAHKAN MEMONITOR PERSETUJUAN DARI KIDI</span>
    </div>
  )
}

export default PostRegistration