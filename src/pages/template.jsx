import React, {Component} from 'react';
import {Route} from 'react-router';
import {observer, inject} from "mobx-react";

import SidebarMenu from '../components/Menu/index.jsx';
import {
    Dashboard,
    Users
} from './index'


import { Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

@inject('routing')
@observer
class Template extends Component {
    render() {
        const {location} = this.props.routing;

        return (
            <div>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            //console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            //console.log('collapsed, type', collapsed, type);
                        }}
                    >
                        <div className="logo" />

                        <SidebarMenu/>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} >
                            <span>Current pathname: {location.pathname}</span>
                        </Header>

                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <div>

                                    <Route path='/' exact component={Dashboard}/>
                                    <Route path='/users' component={Users}/>
                                </div>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Template;