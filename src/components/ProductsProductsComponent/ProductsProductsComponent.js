import React from "react";
import axios from 'axios/dist/axios';
import ListRow from "./ListRow";
import SideBarRight from "../SideBarRight/SideBarRight";

class ProductsProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            node: [],
            nodeForUpdate: []
        };


        this.onInput = this.onInput.bind(this);
        this.onClick = this.onClick.bind(this);
        this.checkExistsInForUpdate = this.checkExistsInForUpdate.bind(this);
    }

    onInput(e) {
        const bodyFormData = new FormData();
        bodyFormData.set('name', e.target.value);
        axios({
            method: 'post',
            url: '/api/product/search',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        }).then((response) => {
            response = response.data;
            if (true === response.ok) {
                this.setState({node: response.data.products});
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    checkExistsInForUpdate(id) {
        for (let value of this.state.nodeForUpdate) {
            if (value.id === id) {
                return true;
            }
        }

        return false;
    }

    onClick(item) {
        if (true === this.checkExistsInForUpdate(item.id)) {
            this.state.nodeForUpdate = this.state.nodeForUpdate.filter((value) => {
                return value.id !== item.id;
            });
        } else {
            this.state.nodeForUpdate.push(item);
        }

        this.setState({nodeForUpdate: this.state.nodeForUpdate});
    }

    render() {
        const list = this.state.node.map((item) => {
            item.added = this.checkExistsInForUpdate(item.id);
            return <ListRow item={item} onNodeChange={this.onClick}/>;
        }

        );
        return (
            <div>
                <SideBarRight nodes={this.state.nodeForUpdate} onClick={this.onClick}/>
                <div className="row justify-content-center">
                    <input onChange={this.onInput} type="text" className="form-control" placeholder="Введите имя товара"/>
                </div>
                <div className="row justify-content-center">
                    <ul className="list-group w-100">
                        {list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProductsProductsComponent;