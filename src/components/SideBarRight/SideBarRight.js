import React from "react";
import './SideBarRight.css';
import 'font-awesome/css/font-awesome.css'

class SideBarRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({opened: !this.state.opened})
    }

    render() {
        let list = '';
        if (true === this.state.opened) {
            list = <div className="col-10 side-bar-right-list text-center">
                <ul>
                    {
                        this.props.nodes.map((item) =>
                            <li>
                                <span>{item.name} </span>
                                <i className="fa fa-times-circle" onClick={() => this.props.onClick(item)}>

                                </i>
                            </li>
                        )
                    }
                </ul>
                <button className="btn btn-success">Синхронизировать</button>
            </div>;
        }

        return (
            <div className="row side-bar-right justify-content-end">
                <div className="col-2 d-flex align-items-center side-bar-right-button-wrapper">
                    <div className="side-bar-right-button" onClick={this.onClick}>

                    </div>
                </div>
                {list}
            </div>
        );
    }
}

export default SideBarRight;