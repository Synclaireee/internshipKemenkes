import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {message} from 'antd'
import styles from './index.module.scss'
function StatusCheck() {
  const history = useHistory();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(!user || (user && !user.EMAIL)){
      history.push('/login');
      return;
    }
  });

  const onClick = ()=>{
    message.success('Registrasi Sukses');
    history.push('/registrasi/berhasil');
  }
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            FORM CEK STATUS PEMILIHAN
        </div>
        <img className={styles.image} src="https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732__480.png" alt=""/>
        <a className={styles.link} onClick={onClick}>
            CEK STATUS
        </a>
    </div>
  )
}

export default StatusCheck