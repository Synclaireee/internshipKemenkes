import React, { useCallback, useEffect, useState } from 'react'
import * as dayjs from 'dayjs'
import { Table, message } from 'antd';
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import wahana from 'constants/wahana'
import shuffle from 'helpers/shuffle'
import normalize from 'helpers/normalizer'
import useAccessTime from 'hooks/useAccessTime.js'
import useHospitalList from 'hooks/useHospitalList.js'
import useReserveHospital from 'hooks/useReserveHospital';


function Registration() {
  const history = useHistory();
  const {data, error} = useAccessTime();
  const {data: hospitalData, loading: hospitalLoading, error: hospitalError} = useHospitalList();
  const {loading, postData} = useReserveHospital();
  const [clock, setClock] = useState(dayjs());
  const [isValidTime, setIsValidTime] = useState(false);
  const [region, setRegion] = useState();
  const [dataSource, setDataSource] = useState([]);
  const registrationTime = dayjs(data.registerTime);

  //USECALLBACK
  const checkValidTime = useCallback(()=>{
    if(!error && registrationTime && !isValidTime && clock.isAfter(registrationTime)){
      setIsValidTime(true);
    }
  },[clock, registrationTime, error,isValidTime]);

  const generateDataSource = useCallback(()=>{
    const data = hospitalData.length ? normalize(shuffle(hospitalData)) : [];
    setDataSource(data);
  },[hospitalData])

  //USEEFFECT
  useEffect(()=>{
    if(!isValidTime){
      checkValidTime();
    }
  },[checkValidTime, isValidTime])

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    if(!user || (user && !user.EMAIL)){
      history.push('/login');
      return;
    }
    setRegion(user.REGION);
  },[history,setRegion]);

  //clock refactor to component
  useEffect(() => {
    setInterval(() => {
      setClock(dayjs());
    }, 1000);
  },[]);

  useEffect(()=>{
    generateDataSource();
  },[generateDataSource])
  
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
      render: (record) => <span className={styles.buttonChoose} onClick={()=>onClick(record)}>Pilih</span>,
      width: '4%'
    },
  ];
  
  const onClick = async (record)=>{
    try{
      await postData(record);
      history.push("/registrasi/status");
    }
    catch(e){
      message.error(e.message);
    }
  }
  return (
    <div>
        <div className={styles.time}>{clock.format('DD/MM/YYYY HH:mm:ss')}</div>
        <Table 
            dataSource={isValidTime && !hospitalLoading && !hospitalError ? dataSource : []}
            rowClassName={(_, index) => index % 2 !== 0 ? styles.rowLight :  styles.rowDark}
            columns={columns}
            pagination={false}
            bordered
            size='small'
        />
    </div>
  )
}

export default Registration