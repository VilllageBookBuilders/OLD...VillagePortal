import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {
    onFinish = (values, requestType, articleID) => {
        console.log(values);
        const title = values.title;
        const content = values.content;
        console.log(title,content);
        switch ( requestType ) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/',{
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.err(err));
                break;
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.err(err));
                break;
            default:
                console.log('unexpected form subbmision');
        }
    }

    render() {
        return (
            <div>
              <Form onFinish={(values) => this.onFinish(
                  values,
                  this.props.requestType,
                  this.props.articleID
              )}>
                <Form.Item label="Title" name="title">
                  <Input placeholder="Put a title here"/>
                </Form.Item>
                <Form.Item name="content" label="Content">
                  <Input placeholder="Put some content here"/>
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
              </Form>
            </div>
          );
    }
}

export default CustomForm;