import React, {Component} from 'react';
import Header from './Header';
import {Footer} from '../components/Footer';
import Main from './Main';
import $ from "jquery";
import '../css/App.css';
import 'flexboxgrid';

class App extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            activeToggle: false
        }
    }

    handler() {
        if (this.state.activeToggle === false) {
            this.setState(()=>{return {activeToggle: true}});
            $('.sideBar').removeClass('hideBar');
            $('.sideBar').addClass('showBar');
        }
        else {
            this.setState(()=>{return {activeToggle: false}});
            $('.sideBar').removeClass('showBar');
            $('.sideBar').addClass('hideBar')
        }
    }

    render() {
        return (
            <div>
                <div className="sideBar"/>
                <Header action={this.handler}/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
