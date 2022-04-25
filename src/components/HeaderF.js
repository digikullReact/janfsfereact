import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";


const { Header } = Layout;

const HeaderF = () => {
  const token=localStorage.getItem("token")
const menuItems=[
  {
    "title":"Add",
    "link":"/add"
  },
  {
    "title":"Show",
    "link":"/show"
  }

]

  return (
    
    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {menuItems.map((ele, index) => {
       
        return <Menu.Item key={index}>  <Link to={ele.link}>{ele.title}</Link> </Menu.Item>;
      })}

      {
        token?
        <Menu.Item >  <Link to="/logout">Logout</Link> </Menu.Item> :""
      }
    </Menu>
  </Header>
  )
}

export default HeaderF