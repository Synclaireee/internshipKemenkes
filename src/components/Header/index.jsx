import { Menu, message } from 'antd'
import routes from 'constants/routes';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';
import styles from './index.module.scss'

const { SubMenu } = Menu;
function Header() {
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const onClick = ({ key }) => {
    message.destroy();
    if(key === "logout"){
      localStorage.removeItem("USER");
      setIsLoggedIn(false);
      setIsAdmin(false);
      message.success('Logout Sukses');
      history.push('/login');
      return
    }
    history.push(key);
  }

  useEffect(()=>{
    const userString = localStorage.getItem("USER");
    if (!userString){
      setIsLoggedIn(false);
      setIsAdmin(false);
      return
    }
    const userEmail = JSON.parse(userString).EMAIL;
    if (userEmail){
      setIsLoggedIn(true);
    }
    if (userEmail === "admin@admin.com"){
      setIsAdmin(true);
    }
    console.log(userEmail);
  },[])

  return (
    <div className={styles.container}>
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        onClick={onClick}
        >
        <Menu.Item style={{ pointerEvents: 'none' }}> Beranda</Menu.Item>
        <Menu.Item style={{ pointerEvents: 'none' }}> Data Internship</Menu.Item>
        <SubMenu key="sub1" title="Data Pendaftaran">
          <Menu.Item style={{ pointerEvents: 'none' }}> Data Permohonan</Menu.Item>
          <Menu.Item key={routes.REGISTRATION}> Pendaftaran Internship</Menu.Item>
          <Menu.Item style={{ pointerEvents: 'none' }}> Fakta Integritas</Menu.Item>
        </SubMenu>
        {isAdmin && <Menu.Item key={routes.ADMINPAGE}>Set Time</Menu.Item>}
        {isLoggedIn && <Menu.Item key="logout">Logout</Menu.Item>}
      </Menu>
    </div>
  )
}

export default Header