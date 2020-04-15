import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
// import 'bootstrap-4-grid/css/grid.css';
import './App.css';
import SideBar from "./components/SideBar/SideBar";
import MainComponent from "./components/MainComponent/MainComponent";
import CategoryProductsComponent from "./components/CategoryProductsComponent/CategoryProductsComponent";
import ProductsProductsComponent from "./components/ProductsProductsComponent/ProductsProductsComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarOpened: false
        };
        this.barsClick = this.barsClick.bind(this);
    }

    barsClick() {
        this.setState({
            sideBarOpened: !this.state.sideBarOpened
        });
    }

    render() {
        let sideBar = this.state.sideBarOpened ? <SideBar/> : '';

        return (
            <div className="container-main container-fluid">
                <Router>
                    <TopBar onClick={this.barsClick}/>
                    <div className="row content-main">
                        {sideBar}
                        <div className="col">
                            <Switch>
                                <Route path="/synchronize/products/by-category">
                                    <CategoryProductsComponent/>
                                </Route>
                                <Route path="/synchronize/products">
                                    <ProductsProductsComponent/>
                                </Route>
                                <Route path="/">
                                    <MainComponent/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
