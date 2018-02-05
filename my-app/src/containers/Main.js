import React, {Component} from 'react';
import '../css/App.css';
import 'flexboxgrid';

class Main extends Component {
    constructor(props) {
        super(props);
        this.timer = this.timer.bind(this);
        this.state = {
            activeToggle: false,
            number: new Date().getMilliseconds() * this.getRandomArbitrary(1,9),
            timer: null
        }
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    timer() {
        let interval = setInterval(() => {
            this.setState(() => {
                return {
                    number: new Date().getMilliseconds() * this.getRandomArbitrary(1,9),
                    timer: interval
                }
            });
        }, 2500);
    }

    stopTimer() {
        clearInterval(this.state.timer);
    }

    forceRand() {
        this.setState(() => {
            return {number: new Date().getMilliseconds() * this.getRandomArbitrary(1,9)}
        });
    }

    componentDidMount() {
        this.timer();
    }

    render() {
        return (
            <div className="main">
                <div className="row center-xs number">
                    <label>{this.state.number}</label>
                </div>
                <div className="row center-xs ">
                    <div className="col-xs-5 col-md-3 col-lg-2">
                        <div className="box">
                            <a className="button">
                                <span onClick={this.forceRand.bind(this)}>Force Rand</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-5 col-md-3 col-lg-2">
                        <div className="box">
                            <a className="button">
                                <span onClick={this.stopTimer.bind(this)}>Stop</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;