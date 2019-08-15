import React from 'react';
import {Input, Button, Table, Tag} from "antd";
import Modal from './modal'
export default class permission extends React.Component {
    state = {
        keyworld: '',
        modal:{data:{},visible:false},
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '类型',
                dataIndex: 'address',
                key: 'address',
                render: (text) => {
                    return <Tag>{text}</Tag>
                }
            },
            {
                title: '操作',
                dataIndex: '',
                key: Math.random(),
                render: (text, record, index) => {
                    return (
                        <p>
                            <span style={{
                                color: 'blue',
                                borderRight: '1px solid #000',
                                padding: '0 5px',
                                cursor: 'pointer'
                            }} onClick={() => this.handleReset(record)}>修改</span>
                            <span style={{color: 'red', padding: '0 5px', cursor: 'pointer'}}
                                  onClick={() => this.handleDelect(text, record, index)}>删除</span>
                        </p>
                    )
                }
            },
        ],
        data: [
            {
                key: 1,
                name: 'John Brown sr.',
                age: 60,
                address: 'New York No. 1 Lake Park',
                children: [
                    {
                        key: 11,
                        name: 'John Brown',
                        age: 42,
                        address: 'New York No. 2 Lake Park',
                    },
                    {
                        key: 12,
                        name: 'John Brown jr.',
                        age: 30,
                        address: 'New York No. 3 Lake Park',
                        children: [
                            {
                                key: 121,
                                name: 'Jimmy Brown',
                                age: 16,
                                address: 'New York No. 3 Lake Park',
                            },
                        ],
                    },
                    {
                        key: 13,
                        name: 'Jim Green sr.',
                        age: 72,
                        address: 'London No. 1 Lake Park',
                        children: [
                            {
                                key: 131,
                                name: 'Jim Green',
                                age: 42,
                                address: 'London No. 2 Lake Park',
                                children: [
                                    {
                                        key: 1311,
                                        name: 'Jim Green jr.',
                                        age: 25,
                                        address: 'London No. 3 Lake Park',
                                    },
                                    {
                                        key: 1312,
                                        name: 'Jimmy Green sr.',
                                        age: 18,
                                        address: 'London No. 4 Lake Park',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                key: 2,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ]
    }

    handleReset(row) {
        this.setState({
            modal: Object.assign(this.state.modal.data, {data: row})
        })
        this.modalVisibleChange()
    }

    modalVisibleChange(){
        this.setState({
            modal: Object.assign(this.state.modal, {visible: !this.state.modal.visible})
        })
    }
    handleDelect(text, record, index) {
        console.log(text, record, index)
    }

    关键词双向数据

    handleKeyworld(e) {
        this.setState({keyworld: e.target.value})
    }

    //关键词搜索
    handleSearch() {
    }


    render() {
        return (
            <div>
                <div className="action">
                    <div className="left">
                        <Input value={this.state.keyworld} onInput={this.handleKeyworld} placeholder={'请输入关键词'}/>
                        <Button icon={'search'} onClick={this.handleSearch}>搜索</Button>
                    </div>
                    <div className="right">
                        <Button onClick={this.handleReset.bind(this, {})} type='primary'>添加</Button>
                    </div>
                </div>
                <Table defaultExpandAllRows={true} dataSource={this.state.data} columns={this.state.columns}></Table>
                <Modal visible={this.state.modal.visible} form={this.state.modal.data} modalVisibleChange={this.modalVisibleChange.bind(this)}></Modal>
            </div>
        );
    }
}
