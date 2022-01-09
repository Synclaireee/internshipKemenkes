import { Menu, message } from 'antd'
import routes from 'constants/routes';
import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'

const { SubMenu } = Menu;

function Header() {
  const history = useHistory()

  const onClick = ({ key }) => {
    message.destroy();
    if(key === "logout"){
      localStorage.removeItem("USER");
      message.success('Logout Sukses');
      history.push('/login');
      return
    }
    history.push(key);
  }

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
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    </div>
  )
}

export default Header