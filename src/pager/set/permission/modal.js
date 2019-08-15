import './index.less'
import {Modal, Form, Input, Button,Radio,Select} from "antd";
import React from 'react'
import FormItem from "antd/es/form/FormItem";
const { Option } = Select;

export default class modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: props.form,
            option:[{val:1,key:'选项1'},{val:2,key:'选项2'},{val:3,key:'选项3'}]
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps,'----------')
        this.setState({
            form: nextProps.form
        })
    }

    handleSubmit() {

    }

    handleInput(name, event) {
        let val=Number(event)?event:event.target.value
        this.setState({
            form: Object.assign(this.state.form, {[name]: val})
        })
    }

    render() {
        const {form} = this.state;
        let {visible} = this.props;
        return (
            <Modal
                visible={visible}
                title={'权限修改'}
                onCancel={this.props.modalVisibleChange}
                footer={null}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <span className={'name'}>权限名称</span>
                        <Input value={form.name} onInput={this.handleInput.bind(this, 'name')}/>
                    </Form.Item>
                    <Form.Item>
                        <span className={'name'}>权限标识</span>
                        <Input value={form.z_h} onInput={this.handleInput.bind(this, 'z_h')}/>
                    </Form.Item>
                    <Form.Item>
                        <span className={'name'}>菜单url</span>
                        <Input value={form.phone} onInput={this.handleInput.bind(this, 'phone')}/>
                    </Form.Item>
                    <Form.Item>
                        <span className={'name'}>菜单图标</span>
                        <Input value={form.Email} onInput={this.handleInput.bind(this, 'Email')}/>
                    </Form.Item>
                    <Form.Item>
                        <span className={'name'}>是否为菜单</span>
                        <Radio.Group onChange={this.handleInput.bind(this, 'menu')}>
                            <Radio value='1'>是</Radio>
                            <Radio value='0'>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <span className={'name'}>上级菜单</span>
                        <Select style={{width:'80%'}} onChange={value=>this.handleInput.bind(this, 'option',value)} className='option'>
                            {this.state.option.map(item=><Option value={item.val}>{item.key}</Option>)}
                        </Select>
                    </Form.Item>
                    <FormItem style={{textAlign: 'center'}}>
                        <Button type={'primary'} htmlType={'submit'}>提交</Button>
                        <Button style={{marginLeft: '20px'}} onClick={this.props.modalVisibleChange}>取消</Button>
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}
