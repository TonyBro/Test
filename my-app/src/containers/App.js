import React, {Component} from 'react';
import Header from './Header';
import {Footer} from '../components/Footer';
import Main from './Main';
import '../css/App.css';
import 'flexboxgrid';

class App extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            activeToggle: false,
            classes: "sideBar"
        }
    }

    handler() {
        if (this.state.activeToggle === false) {
            this.setState(() => {
                return {
                    activeToggle: true,
                    classes: "sideBar showBar"
                }
            });
        }
        else {
            this.setState(() => {
                return {
                    activeToggle: false,
                    classes: "hideBar showBar"
                }
            });
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.classes}/>
                <Header action={this.handler.bind(this)}/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
