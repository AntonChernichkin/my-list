import React from 'react';

import './text-component.css'

class TextComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            height: 185,
        }
        
        this.removeHeight = () => {
            this.setState(state => ({
                height : --state.height
            }))
        }

        this.addHeight = this.addHeight.bind(this);
    }

    clearHeight = () => {
        this.setState( () => ({
            height: 185
        }))
    }

    addHeight() {
        this.setState(({height}) => ({
            height : ++height
        }))
    }

    render() {
        const {name, surname} = this.props;
        const {height} = this.state;
        return (
            <div className = "testNames">
                <div className="testNames-obj"> Name:<span> {name}</span>  <br/> Surname: <span>{surname}</span> <br/> Height: <span>{height} sm.</span> </div>
                <button className="btn" onClick = {this.addHeight}>Add Height</button>
                <button className="btn" onClick = {this.removeHeight}>Remove Height</button>
                <button className="btn" onClick = {this.clearHeight}>Clear Height</button>
            </div>
        )
    }
}

export default TextComponent;