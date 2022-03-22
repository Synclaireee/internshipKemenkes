import React from 'react'
import styles from './index.module.scss'
import users from 'constants/users'

import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom'
import useAccessTime from '../../hooks/useAccessTime.js'
import dayjs from 'dayjs';

function Login() {
    const history = useHistory()
    const {data, error} = useAccessTime();
    const loginTime = dayjs(data.LoginTime);
    const onFinish = (values) => {
        const user = users.filter((item)=>{
            return item.EMAIL === values.EMAIL
        });
        if(user.length && values.PASSWORD === user[0].PASSWORD){
            localStorage.setItem("USER", JSON.stringify(user[0]))
            if(values.EMAIL === "admin@admin.com"){
                message.success('Login Sukses');
                history.push('/admin')
            }
            else if(!error && loginTime && dayjs().isBefore(loginTime)){
                message.error('Belum dapat login')
                return
            }
            else{
                message.success('Login Sukses');
                history.push('/')
            }
            return;
        }
        else{
            message.error('Autentikasi Gagal')
        }
    };
  return (
    <div className={styles.loginContainer}>
        <div className={styles.loginContainer__title}>
            <span>
                Pemilihan Wahana
            </span>
        </div>
        {!error && loginTime && 
            <div className={styles.loginContainer__title}>
                Login Time: {loginTime.format("DD/MM/YYYY HH:mm:ss")}
            </div>
        }
        <div className={styles.loginContainer__form}>
            <div className={styles.loginContainer__form__title}>
                Halaman Autentikasi
            </div>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="E-Mail"
                    name="EMAIL"
                    rules={[{ required: true, message: 'Mohon masukkan email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="PASSWORD"
                    rules={[{ required: true, message: 'Mohon masukkan password' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 2, span: 6 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
  )
}

export default Login
