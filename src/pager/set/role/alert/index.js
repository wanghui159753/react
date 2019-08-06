import React from 'react';
import {Modal,Form,Input,Button} from "antd";
export default class reset extends React.Component{
    constructor(props){
        super(props)
        console.log(props,'-------------')
        this.state={
            form:props.form
        }
    }
    handleInput(a,b){
        console.log(a,b)
    }
    handleInputRemark(){}
    submit(){

    }
    render() {
        console.log(this.state,this.props,'==========')
        let {roleName,comments}=this.state.form
        let {visible}=this.props
        return (
            <Modal
                visible={visible}
                footer={null}
            >
                <Form onSubmit={this.submit.bind(this)}>
                    <Form.Item>
                        <span>角色名</span>
                        <Input required={true} placeholder={'请输入角色名'} onInput={this.handleInput('name').bind(this)}/>
                    </Form.Item>
                    <Form.Item>
                        <span>备注</span>
                        <Input required={true}  placeholder={'请输入备注'} onInput={this.handleInputRemark.bind(this)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button>取消</Button>
                        <Button htmlType={'submit'} type={'primary'}>提交</Button>
                    </Form.Item>
                    </Form>
            </Modal>
        )
    }
}
