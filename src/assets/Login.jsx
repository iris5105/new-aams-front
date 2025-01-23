import React from 'react';
import {Typography, Button, Checkbox, Form, Input, Flex, Image } from 'antd';
import Logo from './image/aams.logo.jpg';
import { useNavigate } from 'react-router-dom';
const { Text, Title} = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const boxStyle = {
    borderRadius: 50,
    border: '1px solid rgb(7, 7, 7)',
    height : 500,
    width : 500
    
  };
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        sessionStorage.setItem('logInStat', 'true'); // 로그인 상태 저장
        navigate('/main')
      };
return(
    <Flex style = {{height : '100vh'}} vertical={true} justify = {'center'} align = {'center'}>
        <Flex style = {boxStyle} vertical={true} justify = {'center'} align = {'center'}>
            <Image width = {300} src={Logo} preview={false}></Image>
            <Title level = {2}> Welcome to AAMS </Title>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrLoginerCol={{span: 16}}
                style={{maxWidth: 400}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label = "Username"
                    name  = "username"
                    rules = {[
                            {required: true,
                            message: 'Please input your username!'
                            },
                            ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label = "Password"
                    name  = "password"
                    rules = {[
                            {required: true,
                            message: 'Please input your password!'
                            },
                            ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button id='logIn' type="primary" onClick={handleLogin}>
                    Log In
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    {/* </div> */}
    </Flex>
    )
};
export default Login;