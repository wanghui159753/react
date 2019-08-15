import './menu.less';
import React from 'react';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import Role from '@/pager/set/role/index'
import Sys from '@/pager/set/sys/index'
import Permission from '@/pager/set/permission/index';
import noMatch from '@/pager/404/404';
import img from '@/static/img/head.png'
import {Layout, Menu, Icon, Breadcrumb} from 'antd';

const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;

class menu extends React.Component {
    state = {
        collapsed: false,
        nav: null
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    selectChange = item => {
        this.setState({
            nav: item.key
        });

    }

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.selectChange}>
                        <SubMenu title={<span>
                          <Icon type='setting'/>
                          <span>系统设置</span>
                            </span>}>
                            <Menu.Item key="角色管理">
                                <Icon type="user"/>
                                <Link to='/set/role' className='menu_a'>角色管理</Link>
                            </Menu.Item>
                            <Menu.Item key="权限管理">
                                <Icon type="video-camera"/>
                                <Link to='/set/sys' className='menu_a'>权限管理</Link>
                            </Menu.Item>
                            <Menu.Item key="用户管理">
                                <Icon type="upload"/>
                                <Link to='/set/permission' className='menu_a'>用户管理</Link>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{height:'100vh'}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <div className="right">
                            <img src={img} width={30} alt=""/>
                        </div>
                    </Header>
                    <div className={'nav'}>
                        <Breadcrumb>
                            <Breadcrumb.Item>系统设置</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.nav}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Content
                        style={{
                            margin: '24px 16px',
                            background: '#fff',
                            minHeight: 'unset'
                        }}
                    >
                        <Switch>
                            <Route exact path={'/set/sys'} component={Sys}/>
                            <Route exact path={'/set/permission'} component={Permission}/>
                            <Route exact path={'/set/role'} component={Role}/>
                            <Route component={noMatch}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default menu;
