import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Form, Button, DatePicker, message } from 'antd';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import useUpdateAccessTime from 'hooks/useUpdateAccessTime';
import useAccessTime from 'hooks/useAccessTime.js'

function AdminPage() {
    const history = useHistory();
    const {data} = useAccessTime();
    const updateAccessTime = useUpdateAccessTime();
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
        const login_time = values.login_time ? dayjs(values.login_time).format() : data.loginTime;
        const registration_time = values.registration_time ? dayjs(values.registration_time).format() : data.registerTime;

        const payload = {};
        if(login_time){
            payload['loginTime'] = login_time
        }
        if(registration_time){
            payload['registerTime'] = registration_time
        }
        const {loading,error}= await updateAccessTime(payload);

        if(!loading){
            if(error){
                message.error('Gagal update!');
            }
            else{
                message.success('Update Sukses!');
            }
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