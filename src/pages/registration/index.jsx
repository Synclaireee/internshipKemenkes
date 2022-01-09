import React, { useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import { Table, message } from 'antd';
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import wahana from 'constants/wahana'


function Registration() {
  const history = useHistory();
  const [time, setTime] = useState(dayjs());
  const [clock, setClock] = useState(dayjs());
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(!user || (user && !user.EMAIL)){
      history.push('/login');
      return;
    }
  });

  useEffect(() => {
    setInterval(() => {
      setClock(dayjs());
    }, 1000);
  }, []);

  const dataSource = wahana.SUMATERAUTARA
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
      title: 'Nama Wahana',
      dataIndex: 'namaWahana',
      key: 'namaWahana',
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: () => <a onClick={onClick}>Pilih</a>,
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
            dataSource={dataSource}
            columns={columns}
            pagination={false}
        />
    </div>
  )
}

export default Registration