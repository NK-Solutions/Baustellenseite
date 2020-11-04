import React, {Component} from 'react';
import './App.css';

class emailButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        window.location.href = `mailto:info@nksolutions.net`;
    }
    render() {
        return <button className="mailbttn" onClick={this.onClick}>&#9993; info@nksolutions.net</button>;
    }
}


export default emailButton