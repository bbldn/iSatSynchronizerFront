import React from "react";
import {Link} from "react-router-dom";
import './SideBar.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-2 col-sm-4 col-md-3 col-lg-3 col-xl-2 page-sidebar">
                <div className="row">
                    <div className="page-sidebar-link-wrapper">
                        <Link className="page-sidebar-link" to="/">Главная</Link>
                    </div>
                    <div className="page-sidebar-link-wrapper">
                        <Link className="page-sidebar-link" to="/synchronize/products/by-category">Категории => Товары</Link>
                    </div>
                    <div className="page-sidebar-link-wrapper">
                        <Link className="page-sidebar-link" to="/synchronize/products">Товары</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;