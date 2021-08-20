import React, { Component } from 'react';
import {NavLink, Link, router, route} from 'react-router-dom';
import './sideBar.css';
import Admin from '../../../assets/images/admin.jpg';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

class SideBar extends Component {
    render() {
        
        return (
            <>
                <div className="w-72 sm:w-80 lg:w-96 flex-grow h-full pl-8 pt-8 pb-8 lg:pl-16 lg:pt-16 lg:pb-16 text-left bg-gray-100 work-sans">
                    <div className="relative h-100 pb-24">
                        <div className="sideBar-top pr-8">
                            <div className="user-info relative w-full flex items-center justify-between mb-20">
                                <div className="flex">
                                    <div className="user-dp">
                                        <img src={Admin} alt="admin" />
                                    </div>

                                    <div className="user-name pl-2">
                                        <p className="text-sm mb-0 text-gray-600">Hello,
                                            <Link to="#" className="block text-gray-900 font-semibold text-lg">Xenon Store</Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="user-exit">
                                    <i className="fa fa-sign-out text-2xl" aria-hidden="true"></i>
                                </div>
                            </div>

                            <div className="earning-count pb-10 border-b border-gray-300 mb-12">
                                <small className="font-semibold text-gray-600">Earning</small>
                                <h3 className="text-3xl	font-bold text-gray-900">$12,560.55</h3>
                            </div>
                        </div>

                        <div className="sidebar-categories">
                            <ul className="flex flex-col p-0 m-0 list-none">
                                <li className="hover:text-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" exact to="/" >
                                        <i className="fa fa-home mr-6" aria-hidden="true"></i> Dashboard
                                    </NavLink>
                                </li>

                                <li className="hover:text-yellow-400 border-r-2 border-gray-100 hover:border-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" to="/products" >
                                        <i className="fa fa-database mr-6" aria-hidden="true"></i> Products
                                    </NavLink>
                                </li>

                                <li className="hover:text-yellow-400 border-r-2 border-gray-100 hover:border-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" to="/orders" >
                                        <i className="fa fa-shopping-bag mr-6" aria-hidden="true"></i> Orders
                                    </NavLink>
                                </li>

                                <li className="hover:text-yellow-400 border-r-2 border-gray-100 hover:border-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" to="/customers" >
                                        <i className="fa fa-users mr-6" aria-hidden="true"></i> Customers
                                    </NavLink>
                                </li>

                                <li className="hover:text-yellow-400 border-r-2 border-gray-100 hover:border-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" to="/coupons" >
                                        <i className="fa fa-percent mr-6" aria-hidden="true"></i> Coupons
                                    </NavLink>
                                </li>

                                <li className="hover:text-yellow-400 border-r-2 border-gray-100 hover:border-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" to="/categories" label="Categories">
                                        <i className="fa fa-newspaper-o mr-6" aria-hidden="true"></i> Categories
                                    </NavLink>
                                </li>

                                <li className="hover:text-yellow-400 border-r-2 border-gray-100 hover:border-yellow-400 category-item">
                                    <NavLink className="text-base py-3 block font-medium flex items-center" to="/settings" label="Settings">
                                        <i className="fa fa-cog mr-6" aria-hidden="true"></i> Settings
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SideBar;