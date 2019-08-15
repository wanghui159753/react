import './index.less'
import React from 'react';
import {Button, Table, Modal, Input} from "antd";
import ResetModal from './modal'

const {confirm} = Modal

//列对应数据


class sys extends React.Component {
    state = {
        columns: [
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
                render: (text, record, index) => (
                    <p>
                        <span
                            style={{color: 'blue', borderRight: '1px solid #000', padding: '0 5px', cursor: 'pointer'}}
                            onClick={() => this.handleReset(record)}>修改</span>
                        <span style={{color: 'red', padding: '0 5px', cursor: 'pointer'}} onClick={() => this.handleDelect(record, index)}>删除</span>
                    </p>
                ),
            }
        ],
        tableDate: [
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
        selectRow: [],
        modal: {
            visible: false,
            data: {
                name: '',
                'z_h': '',
                phone: '',
                Email: ''
            }
        },
        keyworld: ''
    }

    //修改
    handleReset(row) {
        this.setState({
            modal: Object.assign(this.state.modal.data, {data: row})
        })
        this.modalVisibleChange()
    }

    //删除
    handleDelect(recard, index) {
        const _this = this;
        confirm({
            title: '确定删除吗？',
            onOk() {
                _this.state.tableDate.splice(index, 1)
                _this.setState({
                    data: [..._this.state.tableDate]
                })
            },
            onCancel() {
                console.log('Cancel');
            }
        })
    }

    //弹框显示切换
    modalVisibleChange() {
        this.setState({modal: Object.assign(this.state.modal, {visible: !this.state.modal.visible})})
    }

    关键词双向数据

    handleKeyworld(e) {
        this.setState({keyworld: e.target.value})
    }

    //关键词搜索
    handleSearch() {
    }

    //导出
    handleExport() {
    }

    render() {
        const {tableDate, columns, modal} = this.state;
        return (
            <div>
                <div className="action">
                    <div className="left">
                        <Input value={this.state.keyworld} onInput={this.handleKeyworld} placeholder={'请输入关键词'}/>
                        <Button icon={'search'} onClick={this.handleSearch}>搜索</Button>
                    </div>
                    <div className="right">
                        <Button onClick={this.handleReset.bind(this, {})} type='primary'>添加用户</Button>
                    </div>
                </div>
                <div style={{padding: '5px 20px', background: '#fafafa'}}>
                    <Button onClick={this.handleExport} type='primary'>导出</Button>
                </div>
                <Table
                    rowSelection={{
                        onChange: (select, selectrow) => {
                            this.state.selectRow = select
                        }
                    }}
                    dataSource={tableDate}
                    columns={columns}>
                </Table>
                <ResetModal visible={modal.visible} form={modal.data}
                            modalVisibleChange={this.modalVisibleChange.bind(this)}></ResetModal>
            </div>
        )
    }
}

export default sys;
