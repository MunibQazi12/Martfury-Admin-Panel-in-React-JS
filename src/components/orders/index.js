import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './order.css';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.refDropdown = React.createRef();
        this.state = {
            tableRow: ''
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

    tableRowHandler = (x) => {
        this.setState({
            tableRow: x
        })
    }

    render () {
        const orderListing = [
            {ID:"#A580", Date: "Aug, 15, 2020", Name: "Unero Black Military", Payment: "Paid", Status: "Delivered", Total:"56.00", StatusColor: "green-400" },
            {ID:"#B260", Date: "Aug, 15, 2020", Name: "Marsh Speaker", Payment: "Unpaid", Status: "Delivered", Total:"56.00", StatusColor: "green-400"},
            {ID:"#A583", Date: "Aug, 15, 2020", Name: "Lined Blend T-Shirt", Payment: "Paid", Status: "In Progress", Total:"516.00", StatusColor: "yellow-400"},
            {ID:"#A583", Date: "Aug, 15, 2020", Name: "DJI MAcvic Quadcopter", Payment: "Unpaid", Status: "Cancel", Total:"112.00", StatusColor: "red-400"},
            {ID:"#A583", Date: "Aug, 15, 2020", Name: "Black T-Shirt", Payment: "Paid", Status: "Delivered", Total:"30.00", StatusColor: "green-400"}
    ];

        return (
            <>
                <div className="product-listing p-6 xl:px-8 xl:pb-8 xl:pt-0 mt-24">
                    <div className="product-header xl:flex justify-between pb-12">
                        <div className="product-header-filter xl:w-3/5">
                            <form method="get" className="sm:flex">
                                <div className="filter-form-left sm:flex sm:w-5/6">
                                    <div className="form-group sm:px-1 w-full mb-3 sm:mb-0">
                                        <input type="text" placeholder="Search..." className="w-full py-2.5 px-3 bg-white border focus:outline-none font-light text-sm text-gray-900 focus:border-yellow-400" />
                                    </div>

                                    <div className="form-group sm:px-1 w-full mb-3 sm:mb-0">
                                        <select className="w-full py-2.5 px-3 bg-white border focus:outline-none font-light text-sm text-gray-900">
                                            <option value="1">Status</option>
                                            <option value="2">Active</option>
                                            <option value="3">Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="filter-form-right mt-2 sm:mt-0 sm:w-1/6 sm:px-1">
                                    <button className="bg-gray-200 hover:bg-yellow-400 w-full py-2.5 font-medium text-sm">
                                        <i className="fa fa-filter text-gray-900 mr-2" aria-hidden="true"></i>
                                        FILTER
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="product-filter mt-3 xl:mt-0 xl:w-1/4 sm:pl-1 relative flex">
                            <button className="bg-green-400 hover:bg-yellow-400 text-white w-full py-2.5 font-medium text-sm mr-1">
                                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                                NEW ORDER
                            </button>
                            
                            <button className="bg-gray-200 hover:bg-yellow-400 w-full py-2.5 font-medium text-sm">
                                <i className="fa fa-download mr-2" aria-hidden="true"></i>
                                EXPORT
                            </button>
                        </div>
                    </div>
                
                    <div className="overflow-x-auto order-records">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">ID</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Date</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Product</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Payment</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Fullfillment</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Total</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderListing.map((order, i) =>{
                                    return <tr key={i}>
                                                <td className="p-4 text-sm text-left text-gray-700">{order.ID}</td>
                                                <td className="p-4 text-sm text-left text-gray-700">{order.Date}</td>
                                                <td className="p-4 text-sm text-left font-semibold text-gray-900 hover:text-yellow-400">
                                                    <Link to="/order-detail">{order.Name}</Link>
                                                </td>
                                                <td className="p-4 text-sm text-left">
                                                    <span className="bg-gray-100 py-2 px-3 rounded font-semibold text-green-600">{order.Payment}</span>
                                                </td>
                                                <td className="p-4 text-sm text-left text-gray-700 flex items-center"><span className={`h-1.5 w-1.5 inline-block bg-${order.StatusColor} rounded mr-1`}>&nbsp;</span>{order.Status}</td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 text-left">${order.Total}</td>
                                                <td ref={this.refDropdown} className="p-4 text-sm text-center text-left">
                                                    <i onClick={() => this.tableRowHandler(i) } className="fa fa-ellipsis-h cursor-pointer" aria-hidden="true"></i>
                                                    <div className={`dropdown-menu border border-gray-100 flex flex-col text-left rounded w-24 absolute bg-white right-4 ${this.state.tableRow === i ? "show" : "hidden"}`}>
                                                        <Link to="https://tailwindcss.com/docs/display" className="text-sm text-gray-800 font-light hover:bg-gray-100 px-2 py-1">Edit</Link>
                                                        <Link to="#" className="text-sm text-gray-800 font-light hover:bg-gray-100 px-2 py-1">Delete</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        })}
                            </tbody>
                        </table>
                    </div>                                           
                            
                            
                </div>
            </> 
        )
    }
}

export default Orders;