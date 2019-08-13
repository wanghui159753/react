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
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: '名称',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: '角色',
                dataIndex: 'address',
                key: Math.random(),
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: '公司',
                dataIndex: 'address',
                key: Math.random(),
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: '电话',
                dataIndex: 'address',
                key: Math.random(),
                sorter: (a, b) => a.name.length - b.name.length
            },
            {
                title: '操作',
                key: 'tags',
                dataIndex: 'tags',
                render: (text,record) => (
                    <p>
                        <span style={{color:'blue',borderRight:'1px solid #000',padding:'0 5px'}} onClick={()=>{this.handleReset(record)}}>修改</span>
                        <span style={{color:'red',padding:'0 5px'}} onClick={()=>{this.handleDelect(record)}}>删除</span>
                    </p>
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
        const {tableDate,columns,modal}=this.state;
        return(
            <div>
                <Table 
                rowSelection={{
                    onChange:(select,selectrow)=>{
                        this.state.selectRow=select
                    }
                }} 
                dataSource={tableDate} 
                columns={columns}>
                </Table>
                {
                    modal.visible?(<ResetModal visible={modal.visible} form={modal.data} modalVisibleChange={this.modalVisibleChange.bind(this)}></ResetModal>):null
                }
                
            </div>
        )
    }
}

export default sys;
