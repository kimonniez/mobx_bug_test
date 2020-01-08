import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import { Card, Col, Row } from 'antd';
//import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

@inject('dashboardStore')
@observer
class Dashboard extends Component {

    componentDidMount = async () => {
        const {fetchStat} = this.props.dashboardStore;
        await fetchStat();
    };

    render = () => {
        const {stat, regInfo, regInfoReady} = this.props.dashboardStore;

        return(
            <div>
               <Row gutter={16} style={{padding: '30px 0px 30px 0px'}}>
                    <Col span={8}>
                        <Card title="Titles" bordered={false}>
                            {stat.length && stat.map(row => (
                                <div key={row.id}>
                                    {row.title}
                                </div>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;