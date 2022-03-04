import React, { Component } from 'react';
import './Step.css';

import ButtonsPanel from './ButtonsPanel';
import Move from './Move';

class Step extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            inputValue: 1
        };
    }

    changeValue = (action) => {



        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += this.state.inputValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue
            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });
        })
    }

    changeStep = (value) => {
        this.setState({
            inputValue: Number(value)
        })
    }


    render() {
        return (
            <div className='step-app'>
                <h4>Licznik:</h4>
                <span className='value'>
                    {this.state.counterValue}
                </span>
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Move changeStep={this.changeStep} />
            </div>
        )
    }
}

export default Step;