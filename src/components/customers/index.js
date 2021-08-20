import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './customer.css';

class Customers extends Component {
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
        const customerListing = [
            {ID:"MATCUS-0", Name: "Jenny Simmonds", PhoneNumber:"(+921) 211-32-1145", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Active" },
            {ID:"MATCUS-1", Name: "Ammara Molloy", PhoneNumber:"(+921) 916-971-217	", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Block" },
            {ID:"MATCUS-0", Name: "Jenny Simmonds", PhoneNumber:"(+921) 211-32-1145", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Active" },
            {ID:"MATCUS-1", Name: "Ammara Molloy", PhoneNumber:"(+921) 916-971-217	", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Block" },
            {ID:"MATCUS-0", Name: "Jenny Simmonds", PhoneNumber:"(+921) 211-32-1145", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Active" },
            {ID:"MATCUS-1", Name: "Ammara Molloy", PhoneNumber:"(+921) 916-971-217	", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Block" },
            {ID:"MATCUS-0", Name: "Jenny Simmonds", PhoneNumber:"(+921) 211-32-1145", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Active" },
            {ID:"MATCUS-1", Name: "Ammara Molloy", PhoneNumber:"(+921) 916-971-217	", Balances:"211.00", TotalOrders:"10", CreatedAt: "Aug, 15, 2020", Status: "Block" }
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
                                    <button className="bg-gray-200 hover:bg-yellow-400 hover:text-white w-full py-2.5 font-medium text-sm">
                                        <i className="fa fa-filter mr-2" aria-hidden="true"></i>
                                        FILTER
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="product-filter mt-3 xl:mt-0 xl:w-1/4 sm:pl-1 relative flex">
                            <button className="bg-green-400 hover:bg-yellow-400 text-white w-full py-2.5 font-medium text-sm mr-1">
                                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                                ADD CUSTOMER
                            </button>
                        </div>
                    </div>
                
                    <div className="overflow-x-auto customer-records">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">ID</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Name</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Phone Number</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Balances</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Total orders</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Status</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Created at</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerListing.map((customer, i) =>{
                                    return <tr key={i}>
                                                <td className="p-4 text-sm text-left text-gray-700">{customer.ID}</td>
                                                <td className="p-4 text-sm text-left font-semibold text-gray-900 hover:text-yellow-400">
                                                    <Link to="#">{customer.Name}</Link>
                                                </td>
                                                <td className="p-4 text-sm text-left text-gray-700">{customer.PhoneNumber}</td>
                                                <td className="p-4 text-sm text-left text-gray-700">{customer.Balances}</td>
                                                <td className="p-4 text-sm text-left text-gray-700">{customer.TotalOrders}</td>
                                                <td className="p-4 text-sm text-left text-gray-700">{customer.CreatedAt}</td>
                                                <td className="p-4 text-sm text-left">
                                                    <span className="bg-gray-100 py-2 px-3 rounded font-semibold text-green-600">{customer.Status}</span>
                                                </td>
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

export default Customers;