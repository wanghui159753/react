import './index.less';
import React from 'react';
import {Table, Modal, Tree,Icon,Button} from 'antd';
import ResetInfo from './alert/index'
const {confirm} = Modal;
const { TreeNode } = Tree;

const req = {
    "code": 0,
    "msg": "",
    "count": 3,
    "data": [{
        "createBy": 1,
        "createTime": "2018/12/13 11:11:44",
        "updateBy": 1,
        "updateTime": "2018/12/13 15:50:37",
        "isDelete": 0,
        "roleId": 1,
        "roleName": "超级管理员",
        "comments": "超级管理员"
    }, {
        "createBy": 1,
        "createTime": "2018/12/13 11:11:44",
        "updateBy": 1,
        "updateTime": "2018/12/13 15:50:35",
        "isDelete": 0,
        "roleId": 2,
        "roleName": "管理员",
        "comments": "系统管理员"
    }, {
        "createBy": 1,
        "createTime": "2018/12/13 11:11:44",
        "updateBy": 1,
        "updateTime": "2018/12/13 15:50:35",
        "isDelete": 0,
        "roleId": 3,
        "roleName": "普通用户",
        "comments": "系统普通用户"
    }]
};
export default class role extends React.Component {
    state = {
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
        data: req.data.map(item => Object.assign(item, {key: item.roleId})),
        columns: [{
            title: '角色名',
            dataIndex: 'roleName',
            sorter(a, b) {
                return a.roleId - b.roleId
            }
        }, {
            title: '备注',
            dataIndex: 'comments',
            sorter(a, b) {
                return a.comments.length - b.comments.length
            }
        }, {
            title: '创建时间',
            dataIndex: 'createTime',
            sorter(a, b) {
                return new Date(a.createTime) - new Date(b.createTime)
            }
        }, {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => (
                <div className={'action'}>
                    <span onClick={() => this.reset(text, record)}>修改</span><span
                    onClick={() => this.delete(text, record, index)} className={'delect'}>删除</span><span
                    onClick={() => this.permission(text, record)}>权限管理</span>
                </div>
            )
        }],
        treeData :[
            {
                title: '0-0',
                key: '0-0',
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0' },
                            { title: '0-0-0-1', key: '0-0-0-1' },
                            { title: '0-0-0-2', key: '0-0-0-2' },
                        ],
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0' },
                            { title: '0-0-1-1', key: '0-0-1-1' },
                            { title: '0-0-1-2', key: '0-0-1-2' },
                        ],
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2',
                    },
                ],
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0' },
                    { title: '0-1-0-1', key: '0-1-0-1' },
                    { title: '0-1-0-2', key: '0-1-0-2' },
                ],
            },
            {
                title: '0-2',
                key: '0-2',
            },
        ],
        visible:false,
        reset_visible:false,
        form:{}
    }
    onExpand = expandedKeys => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    };

    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    };

    onSelect = (selectedKeys, info) => {
        this.setState({ selectedKeys });
    };

    renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} switcherIcon={<Icon type="appstore" />} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    sort1 = (a, b, c) => {
        console.log(a, b, c)
    }

    //修改
    reset(text) {
        if(text){
            this.setState({
                form:{
                    roleName:text.roleName,
                    comments:text.comments,
                    roleId:text.roleId
                },
                
                reset_visible:!this.state.reset_visible
            },()=>{
               console.log(this.state)
            })
        }else
        this.setState({
            reset_visible:!this.state.reset_visible
        })
    }

    //权限
    permission(text) {
        this.setState({
            visible:true
        })
    }
    //权限确定,向后台发送
    handleOk(){
    }
    //删除
    delete(text, full, index) {
        const _this = this;
        confirm({
            title:'确定删除吗？',
            onOk() {
                _this.state.data.splice(index, 1)
                _this.setState({
                    data: [..._this.state.data]
                })
            },
            onCancel() {
                console.log('Cancel');
            }
        })
    }

    render() {
        return (
            <div>
                <Table
                    bordered={true}
                    dataSource={this.state.data}
                    onChange={this.sort1}
                    columns={this.state.columns}
                ></Table>
                <Modal
                    visible={this.state.visible}
                    title="权限管理"
                    onOk={this.handleOk}
                    onCancel={()=>{this.setState({visible:false})}}
                >
                    <Tree
                        checkable
                        onExpand={this.onExpand}
                        expandedKeys={this.state.expandedKeys}
                        autoExpandParent={this.state.autoExpandParent}
                        onCheck={this.onCheck}
                        checkedKeys={this.state.checkedKeys}
                        onSelect={this.onSelect}
                        selectedKeys={this.state.selectedKeys}
                        switcherIcon={<Icon type="appstore" />}
                    >
                        {this.renderTreeNodes(this.state.treeData)}
                    </Tree>
                </Modal>
                {
                    !this.state.reset_visible?null:(
                        <ResetInfo
                            visible={this.state.reset_visible}
                            handleCanle={this.reset.bind(this)}
                            form={this.state.form}
                        ></ResetInfo>
                    )
                }
                
            </div>
        );
    }
}
