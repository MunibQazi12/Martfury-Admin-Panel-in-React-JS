import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <div className="header-dashboard flex justify-between items-center mb-20">
                    <div className="header-left flex-grow">
                        <h3 className="text-gray-900 font-bold text-2xl text-left">Dashboard</h3>
                        <p className="text-gray-600 text-sm text-left">Everything here</p>
                    </div>

                    <div className="header-center relative max-w-xl flex-grow">
                        <form className="" method="get">
                            <input type="text" placeholder="Search something" className="w-full px-8 text-sm focus:outline-none h-12 border-b hover:border-yellow-400 focus:border-yellow-400 text-gray-600" />
                            <button className="absolute left-0 transform translate-y-3">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>

                    <div className="header-right flex items-center flex-grow justify-end">
                        <Link to="#" className="mr-4 text-sm font-semibold hover:text-yellow-400">VIEW YOUR STORE</Link>
                        <i className="fa fa-sign-out text-2xl" aria-hidden="true"></i>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;