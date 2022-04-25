import React,{useState} from 'react'
import { Form, Input, Button, Checkbox, Row,Col } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Login = () => {
    let navigate = useNavigate();


    const onFinish = (values) => {
       // Api  call console.log('Success:', values);

        //

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`,values).then(response=>{
            //  console.log(response);
              alert("Login Success");
              localStorage.setItem("token",response.data["authtoken"]);
              localStorage.setItem("role","admin")

              navigate("/add");
            
              //getData();
           }).catch(err=>{
               console.log(err);
           })

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
      <Row style={{marginTop:"100px"}}>
          <Col span={12} offset={6}>
          
          <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

          </Col>

  
          </Row>
 
);
}

export default Login