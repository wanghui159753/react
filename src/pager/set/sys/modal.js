import {Modal, Form, Input,Button} from "antd";
import React  from 'react'
import FormItem from "antd/es/form/FormItem";


export default class modal extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            form:props.form
        }
    }


    handleSubmit() {
        
    }

    handleInput(name,event) {
        this.setState({
            form:Object.assign(this.state.form,{[name]:event.target.value})
        })
    }

    render() {
        const {form} = this.state;
        let {visible}=this.props;
        return (
            <Modal
                visible={visible}
                title={'用户信息修改'}
                onCancel={this.props.modalVisibleChange}
                footer={null}
                >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <span>用户昵称</span>
                        <Input value={form.name} onInput={this.handleInput.bind(this, 'name')}/>
                    </Form.Item>
                    <Form.Item>
                        <span>账号</span>
                        <Input value={form.z_h} onInput={this.handleInput.bind(this, 'z_h')}/>
                    </Form.Item>
                    <Form.Item>
                        <span>手机号</span>
                        <Input value={form.phone} onInput={this.handleInput.bind(this, 'phone')}/>
                    </Form.Item>
                    <Form.Item>
                        <span>邮箱</span>
                        <Input value={form.Email} onInput={this.handleInput.bind(this, 'Email')}/>
                    </Form.Item>
                    <FormItem>
                        <Button type={'primary'} htmlType={'submit'}>提交</Button>
                        <Button onClick={this.props.modalVisibleChange}>取消</Button>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
