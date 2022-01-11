import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Form, Button, DatePicker, message } from 'antd';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

function AdminPage() {
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState(false);
    const [clock, setClock] = useState(dayjs());

    useEffect(()=>{
        const userString = localStorage.getItem("USER");
        if(!userString){
            history.push('/login');
            return;
        }
        const userEmail =  JSON.parse(userString).EMAIL;
        if (userEmail === "admin@admin.com"){
            setIsAdmin(true);
        }
        else{
            history.push('/');
        }
    },[history])
    
    useEffect(() => {
        setInterval(() => {
        setClock(dayjs());
        }, 1000);
    }, []);

    const onFinish = async (values)=>{
        const login_time = values.login_time ? dayjs(values.login_time).format("YYYY-MM-DD HH:mm:ss") : null;
        const registration_time = values.login_time ? dayjs(values.registration_time).format("YYYY-MM-DD HH:mm:ss") : null;

        const payload = {};
        if(login_time){
            payload['login_time'] = login_time
        }
        if(registration_time){
            payload['registration_time'] = registration_time
        }
        const db = getFirestore();
        const docRef = doc(db, "datetimes", "data");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef,payload);        
            message.success("Update Time Berhasil");
        }
    }
    return (
        <div className={styles.adminContainer}>
            <div className={styles.time}>{clock.format('DD/MM/YYYY HH:mm:ss')}</div>
            {isAdmin &&
                <div className={styles.adminContainer__form}>
                    <div className={styles.adminContainer__form__title}>
                        Admin Settings
                    </div>
                    <Form
                        className={styles.adminContainer__form__forms}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 14 }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Open Login Time"
                            name="login_time"
                        >
                            <DatePicker showTime className={styles.adminContainer__form__forms__item}/>
                        </Form.Item>

                        <Form.Item
                            label="Open Registration Time"
                            name="registration_time"
                        >
                            <DatePicker showTime className={styles.adminContainer__form__forms__item}/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            }
        </div>
    )
}

export default AdminPage