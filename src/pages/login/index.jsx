import React, { useEffect } from 'react'
import styles from './index.module.scss'
import users from 'constants/users'

import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory()
    const onFinish = (values) => {
        console.log('Success:', values);
        const user = users.filter((item)=>{
            return item.EMAIL === values.EMAIL
        });
        console.log(user);
        if(user.length && values.PASSWORD === user[0].PASSWORD){
            localStorage.setItem("USER", JSON.stringify(user[0]))
            message.success('Login Sukses');
            history.push('/')
            return;
        }
        else{
            console.log(values.PASSWORD)
            message.error('Autentikasi Gagal')
        }
    };
    useEffect(()=>{
        console.log(users)
    });
  return (
    <div className={styles.loginContainer}>
        <div className={styles.loginContainer__title}>
            <span>
                Pemilihan Wahana
            </span>
        </div>
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
