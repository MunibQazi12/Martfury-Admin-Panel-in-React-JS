import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <>
                <div className="p-6 xl:p-8 header-dashboard flex justify-between items-center mb-20 fixed lg:relative xl:relative bg-gray-100 lg:bg-transparent w-full top-0 left-0 z-10">
                    <div className="header-left flex-grow">
                        <h3 className="text-gray-900 font-bold text-2xl text-left">Dashboard</h3>
                        <p className="text-gray-600 text-sm text-left hidden lg:block">Everything here</p>
                    </div>

                    <div className="header-center relative max-w-xl flex-grow hidden lg:block">
                        <form className="" method="get">
                            <input type="text" placeholder="Search something" className="w-full px-8 text-sm focus:outline-none h-12 border-b hover:border-yellow-400 focus:border-yellow-400 text-gray-600 bg-transparent" />
                            <button className="absolute left-0 transform translate-y-3">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>

                    <div className="header-right flex items-center flex-grow justify-end">
                        <Link to="#" className="mr-4 text-sm font-semibold hover:text-yellow-400 flex items-center">
                            <span className="hidden sm:inline-block">VIEW YOUR STORE</span> <i className="ml-2 fa fa-sign-out text-2xl" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" className="block lg:hidden" onClick={this.props.sideBarMobileHandler}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </Link>
                    </div>


                </div>
            </>
        )
    }
}

export default Header;