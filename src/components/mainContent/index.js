import React, { Component } from 'react';
import SideBar from '../common/sideBar';
import Header from '../common/Header';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Dashboard from '../dashboard';
import Products from '../products';
import Orders from '../orders';
import Login from '../authentication/login';
import Signup from '../authentication/signup';
import Customer from '../customers';
import Coupon from '../coupons';
import Categories from '../categories';
import Settings from '../settings';
import NewProduct from '../products/newProduct';
import OrderDetail from '../orders/orderDetail';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.refDropdown = React.createRef();
        this.state = {
            sideBarMobileToggle: false
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.refDropdown.current && !this.refDropdown.current.contains(event.target)) {
            this.setState({
                tableRow: false
            });
        }
    };

    sideBarMobileHandler = () => {
        this.setState({
            sideBarMobileToggle: !this.state.sideBarMobileToggle
        })
    }

    render() {
        return (
            <Router>
                <main className="main-content flex flex-row flex-nowrap items-stretch">
                    <div className="sideBar max-w-sm w-full overflow-y-auto hidden lg:block">
                        <SideBar />
                    </div>
                    
                    <div className={`sideBar overflow-y-auto lg:hidden fixed left-0 top-0 h-full z-30 bg-gray-100 ${this.state.sideBarMobileToggle ? "left-0 sideBarTransition" : "-left-96"}`}>
                        <SideBar />
                    </div>

                    <div onClick={this.sideBarMobileHandler} className={`lg:hidden ${this.state.sideBarMobileToggle ? "show" : "hidden"}`}>
                        <div className="sidePanelOverlay fixed top-0 left-0 right-0 bottom-0 z-20 bg-gray-50 w-100 h-100"></div>
                    </div>

                    <div className="overflow-x-auto main-wrapper work-sans flex-grow">
                        <Header sideBarMobileHandler={this.sideBarMobileHandler}/>
                        
                        
                            <Route
                                exact
                                path={"/"}
                                component={Dashboard} /> 

                            <Route
                                exact
                                path={"/products"}
                                component={Products} /> 

                            <Route
                                exact
                                path={"/products/new-product"}
                                component={NewProduct} /> 

                            <Route
                                exact
                                path={"/Orders"}
                                component={Orders} />
                            
                            <Route
                                exact
                                path={"/login"}
                                component={Login} />
                            
                            <Route
                                exact
                                path={"/signup"}
                                component={Signup} />

                            <Route
                                exact
                                path={"/customers"}
                                component={Customer} />
                            
                            <Route
                                exact
                                path={"/coupons"}
                                component={Coupon} />

                            <Route
                                exact
                                path={"/categories"}
                                component={Categories} />

                            <Route
                                exact
                                path={"/settings"}
                                component={Settings} />

                            <Route
                                exact
                                path={"/order-detail"}
                                component={OrderDetail} />
                        
                    </div>
                </main>
            </Router>
        )
    }
}

export default MainContent;