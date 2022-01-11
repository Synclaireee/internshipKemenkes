import React, { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import { Table, message } from 'antd';
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import wahana from 'constants/wahana'
import shuffle from 'helpers/shuffle'
import { getFirestore, doc, getDoc } from "firebase/firestore";


function Registration() {
  const history = useHistory();
  const [time, setTime] = useState(dayjs());
  const [clock, setClock] = useState(dayjs());
  const [registrationTime, setRegistrationTime] = useState();
  const [region, setRegion] = useState();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(!user || (user && !user.EMAIL)){
      history.push('/login');
      return;
    }
    getRegistrationTimeFirestore();
    setRegion(user.REGION);
    console.log(user.REGION);
  },[history,setRegion]);

  useEffect(() => {
    setInterval(() => {
      setClock(dayjs());
    }, 1000);
  }, []);

  const getRegistrationTimeFirestore = async ()=>{
      console.log('test');
      const db = getFirestore();
      const docRef = doc(db, "datetimes", "data");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRegistrationTime(dayjs(docSnap.data().registration_time));
      }
  }
  const dataSource = wahana[region] ? shuffle(wahana[region]) : [];
  const columns = [
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (_,__,index) => <span>{index+1}</span>,
      width:'5%'
    },
    {
      title: 'Propinsi',
      dataIndex: 'propinsi',
      key: 'propinsi',
    },
    {
      title: 'Kabupaten',
      dataIndex: 'kabupaten',
      key: 'kabupaten',
    },
    {
      title: ()=>{
        return(<div className={styles.red}>[Nama Wahana]</div>)
      },
      dataIndex: 'namaWahana',
      key: 'namaWahana',
      render: (record) => <span className={styles.wahanaName}>{record}</span>,
    },
    {
      title: 'Menu',
      dataIndex: '',
      key: 'x',
      render: () => <span className={styles.buttonChoose} onClick={onClick}>Pilih</span>,
      width: '4%'
    },
  ];
  
  const onClick = ()=>{
    message.destroy();
    const now = dayjs();
    const diffS = now.diff(time,'second');
    const diffMS = now.diff(time,'millisecond');
    if(diffMS <= 5000){
      message.success(`Sukses dalam waktu ${diffS} detik (${diffMS}ms) | ${now.format('DD-MM-YYYY HH:mm:ss')}`,20);
      history.push("/registrasi/berhasil");
      return;
    }
    else{
      message.error(`Gagal dalam waktu ${diffS} detik (${diffMS}ms) | ${now.format('DD-MM-YYYY HH:mm:ss')}`,20);
      return;
    }
  }
  return (
    <div>
        <div className={styles.time}>{clock.format('DD/MM/YYYY HH:mm:ss')}</div>
        <Table 
            dataSource={!registrationTime || (registrationTime && clock.isBefore(registrationTime)) ? []: dataSource}
            rowClassName={(record, index) => index % 2 !== 0 ? styles.rowLight :  styles.rowDark}
            columns={columns}
            pagination={false}
            bordered
            size='small'
        />
    </div>
  )
}

export default Registration