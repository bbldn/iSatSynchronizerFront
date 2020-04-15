import React from "react";
import CheckboxTree from 'react-checkbox-tree';
import axios from 'axios/dist/axios';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import './CategoryProductsComponent.css';

class CategoryProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            expanded: [],
            nodes: [],
            onlyPriceUpdate: false
        };

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSynchronizeClick = this.onSynchronizeClick.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: '/api/category/tree',
        }).then((response) => {
            response = response.data;
            if (true === response.ok) {
                this.setState({nodes: response.data.categories})
            } else {
                console.log(response);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    onCheck(checked) {
        this.setState({checked});
    }

    onExpand(expanded) {
        this.setState({expanded});
    }

    onSynchronizeClick(e) {
        e.preventDefault();

        const bodyFormData = new FormData();
        bodyFormData.set('ids', this.state.checked.join(','));
        bodyFormData.set('onlyPriceUpdate', this.state.onlyPriceUpdate === true ? '1' : '0');
        axios({
            method: 'post',
            url: '/api/products/update/by-categories-ids',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (response) {
            response = response.data;
            if (true === response.ok) {
                alert('Ваш запрос на обновление успешно отправлен')
            } else {
                alert(response.errors.join(','));
            }
        }).catch(function (error) {
            alert('Возникла неизвестная ошибка');
            console.log(error);
        });
    }

    onChange() {
        this.setState({onlyPriceUpdate: !this.state.onlyPriceUpdate});
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center synchronize-top">
                    <label>
                        <input type="checkbox" id="onlyPriceUpdate" checked={this.state.onlyPriceUpdate}
                               onChange={this.onChange}/>
                        <span>Только цены</span>
                    </label>
                </div>
                <div className="row justify-content-center">
                    <a href="#" className="btn btn-success" onClick={this.onSynchronizeClick}>Синхронизировать</a>
                </div>
                <div className="row">
                    <div className="col">
                        <CheckboxTree
                            nodes={this.state.nodes}
                            checked={this.state.checked}
                            expanded={this.state.expanded}
                            onCheck={this.onCheck}
                            onExpand={this.onExpand}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryProductsComponent;