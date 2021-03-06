import React from 'react';
import {connect } from 'react-redux';
import { Form, Input, Button, Checkbox   } from 'antd';
import { NavLink } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import * as actions from '../store/actions/auth';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = (props) => {
  const onFinish = values => {
    //console.log('Success:', values);
    props.onAuth(values.username, values.password);
    props.history.push('/');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  let errorMessage = null;
  if(props.error) {
      errorMessage = (
          <p>{props.error.message}</p>
      );
  }

  return (
    <div>
        {errorMessage}
        {
            props.loading ?
            <LoadingOutlined style={{ fontSize: 24 }} spin /> 
            :
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                Login
                </Button>
                Or
                <NavLink style={{marginRight: '10px'}} to='/signup/'> sign up</NavLink>
            </Form.Item>
            </Form>
        }
    </div>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username,password))
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);