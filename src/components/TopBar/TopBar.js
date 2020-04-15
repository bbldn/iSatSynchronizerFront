import React from 'react';
import './TopBar.css';
import 'font-awesome/css/font-awesome.css'

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.barsClick = this.barsClick.bind(this);
    }

    barsClick(e) {
        e.preventDefault();
        this.props.onClick();
    }

    render() {
        return (
            <div className="page-topbar">
                <i className="fa fa-bars" onClick={this.barsClick}>

                </i>
            </div>
        );
    }
}

export default TopBar;