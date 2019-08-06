import React from 'react';
import {Modal,Form,Input,Button} from "antd";
export default class reset extends React.Component{
    constructor(props){
        super(props)
        this.state={
            form:props.form
        }
    }
    //输入框双向数据流
    handleInput(key,event){
        this.setState({
            form:Object.assign(this.state.form,{[key]:event.target.value})
        })
    }
    //更新数据
    submit(){

    }
    render() {
        let {roleName,comments}=this.state.form
        let {visible}=this.props
        return (
            <Modal
                visible={visible}
                footer={null}
                onCancel={this.props.handleCanle}
            >
                <Form onSubmit={this.submit.bind(this)}>
                    <Form.Item>
                        <span>角色名</span>
                        <Input value={roleName} required={true} placeholder={'请输入角色名'} onInput={this.handleInput.bind(this,'roleName')}/>
                    </Form.Item>
                    <Form.Item>
                        <span>备注</span>
                        <Input value={comments} required={true}  placeholder={'请输入备注'} onInput={this.handleInput.bind(this,'comments')}/>
                    </Form.Item>
                    <Form.Item style={{textAlign:'right'}}>
                        <Button  onClick={this.props.handleCanle}>取消</Button>
                        <Button htmlType={'submit'} type={'primary'} style={{marginLeft:'20px'}}>提交</Button>
                    </Form.Item>
                    </Form>
            </Modal>
        )
    }
}
