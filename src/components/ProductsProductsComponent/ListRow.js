import React from "react";

class ListRow extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onNodeChange(this.props.item);
    }

    render() {
        let button = null;
        if (true === this.props.item.added) {
            button = <button className="btn btn-danger" onClick={this.onClick}>Удалить</button>;
        } else {
            button = <button className="btn btn-success" onClick={this.onClick}>Добавить</button>;
        }

        return (
            <li className="list-group-item row">
                <div className="col">
                    {this.props.item.name}
                </div>
                <div className="col text-right">
                    {button}
                </div>
            </li>
        );
    }
}

export default ListRow;