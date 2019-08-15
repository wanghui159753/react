import style from './index.module.less'
import {withRouter} from "react-router";
import React from 'react';
import {Card,Input,Form,Button} from "antd";
import bg from '@/static/img/login.png'
export default withRouter(class login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:{

            }
        }
    }
    handleInput(name,event){
        this.setState({
            user:Object.assign(this.state.user,{[name]:event.target.value})
        })
    }
    handleSubmit(){
        this.props.history.push('/')
    }
    render(){
        return(
            <div className={style['content']}>
                <img src={bg} alt=""/>
                <Card title='欢迎使用后台管理系统' hoverable={true} className={style['cards']}>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Form.Item className={style['ant-form-item']}>
                            <span className={style['name']}>账号</span>
                            <Input required value={this.state.user.name} style={{width:'60%'}} onInput={e=>this.handleInput('name',e)} />
                        </Form.Item>
                        <Form.Item className={style['ant-form-item']}>
                            <span className={style['name']}>密码</span>
                            <Input required value={this.state.user.pwd} style={{width:'60%'}} type='password' onInput={e=>this.handleInput('pwd',e)}/>
                        </Form.Item>
                        <Form.Item className={style['ant-form-item']}>
                            <span className={style['name']}>验证码</span>
                            <Input required value={this.state.user.code} style={{width:'60%'}}  onInput={e=>this.handleInput('code',e)}/>
                        </Form.Item>
                        <Form.Item className={style['ant-form-item']}>
                            <Button type='primary' htmlType="submit">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
})
