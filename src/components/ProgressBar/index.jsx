import React, {Component} from 'react';
import Pace from 'react-pace-progress'
import {observer, inject} from 'mobx-react';

@inject('dashboardStore')
@observer
class ProgressBar extends Component {
    render(){
        console.log('Progress bar pending', this.props.dashboardStore.pending);
        const showPending = this.props.dashboardStore.pending;
        return showPending ? <Pace color="#27ae60"/> : "";
    }
}

export default ProgressBar;
