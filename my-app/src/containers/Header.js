import React, {Component} from 'react';
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import '../css/App.css';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Toggle  onClick={this.props.action}/>
            </div>
        );
    }
}

export default Header;
