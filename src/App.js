import React, {Component} from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Template from "./pages/template";
import ProgressBar from './components/ProgressBar';

@observer
class App extends Component {

    render = () => {
        return (
            <div>
                <ProgressBar/>
                <Template/>
            </div>
        );
    }
}

export default App;
