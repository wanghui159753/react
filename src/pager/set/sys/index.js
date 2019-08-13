import './index.less'
import React from 'react';
import {Button,Table} from "antd";
import ResetModal from './modal'
//列对应数据


class sys extends React.Component{
    state={
        columns : [
            {
                title: '账号',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '名称',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '角色',
                dataIndex: 'address',
                key: Math.random(),
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '公司',
                dataIndex: 'address',
                key: Math.random(),
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '电话',
                dataIndex: 'address',
                key: Math.random(),
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
                title: '操作',
                key: 'tags',
                dataIndex: 'tags',
                render: text => (
                    // console.error(text)
                    // return (
                    <p>
                        <span style={{color:'blue',borderRight:'1px solid #000',padding:'0 5px'}} onClick={this.handleReset(text)}>修改</span>
                        <span style={{color:'red',padding:'0 5px'}} onClick={this.handleDelect(text)}>删除</span>
                    </p>
                    // )
                ),
            }
        ],
        tableDate:[
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ],
        rowSelection:{
            onChange(select,selectMore){
                // state.selectRow=select
            }
        },
        //选中行
        selectRow:[],
        modal:{
            visible:false,
            data:{
                name:'',
                'z_h':'',
                phone:'',
                Email:''
            }
        }
    }
    //修改
    handleReset(row){
        this.setState({
            modal:Object.assign(this.state.modal.data,{data:row})
        })
        this.modalVisibleChange()
    }
    //删除
    handleDelect(){}
    //弹框显示切换
    modalVisibleChange(){
        this.setState({modal:Object.assign(this.state.modal,{visible:!this.state.modal.visible})})
    }
    render(){
        const state=this.state;
        return(
            <div>
                <Table rowSelection={{
                    onChange:(select,selectrow)=>{
                        this.state.selectRow=select
                    }
                }} dataSource={this.state.tableDate} columns={this.state.columns}></Table>
                <ResetModal visible={state.modal.visible} form={state.modal.data} modalVisibleChange={this.modalVisibleChange.bind(this)}></ResetModal>
            </div>
        )
    }
}

export default sys;
