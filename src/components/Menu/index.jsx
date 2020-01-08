import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {Menu, Icon} from 'antd';



const menuElements = [
                        {
                            nameKey: 'Dashboard',
                            icon: 'fund',
                            path: '/'
                        },
                        {
                            nameKey: 'Users',
                            icon: 'team',
                            path: '/users'
                        },
];

@inject('routing')
@observer
class SidebarMenu extends Component {

    goTo = (e) => {
        try {
            const path = e.item.props['data-path'];
            const { push } = this.props.routing;
            console.log('handle menu click', path);
            push(path);
        } catch (e) {
            console.log('menu goTo error', e);
        }
    };

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                {menuElements.map((element, index)=> {
                    return (
                        <Menu.Item key={index} onClick={(e) => this.goTo(e)} data-path={element.path}>
                            <Icon type={element.icon} />
                            <span className="nav-text"  >
                                {element.nameKey}
                            </span>
                        </Menu.Item>
                    )
                })}
            </Menu>
        );
    }
}

export default SidebarMenu;
