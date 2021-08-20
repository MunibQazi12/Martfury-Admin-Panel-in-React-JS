import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './coupons.css';

class Coupons extends Component {
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
        const couponListing = [
            {Code: "MARTFURY-2020", Percent: "10", Currency: "50.00", CreatedAt: "Jul 21, 2020", Status: "Expired" },
            {Code: "MARTFURY-MID2020", Percent: "5", Currency: "25.00", CreatedAt: "Jul 21, 2020", Status: "Expired" },
            {Code: "SUMMERHOT", Percent: "7.5", Currency: "50.00", CreatedAt: "Jul 21, 2020", Status: "Expired" },
            {Code: "EXLORE2020", Percent: "3", Currency: "10.00", CreatedAt: "Jul 21, 2020", Status: "Expired" },
            {Code: "LAPTOP2020", Percent: "10", Currency: "50.00", CreatedAt: "Jul 21, 2020", Status: "Expired" }
    ];

        return (
            <>
                <div className="flex flex-col xl:flex-row work-sans mt-24 xl:mt-0">
                    <div className="coupon-listing p-6 xl:px-8 xl:pb-8 xl:pt-0 xl:mt-0 border-r xl:w-2/3 order-2 xl:order-1 relative"> 
                        <div className="overflow-x-auto coupon-records">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Code</th>
                                        <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Percent</th>
                                        <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Currency</th>
                                        <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Created at</th>
                                        <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Status</th>
                                        <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {couponListing.map((coupon, i) => {
                                        return <tr key={i}>
                                                    <td className="p-4 text-sm text-left text-gray-700 font-semibold">{coupon.Code}</td>
                                                    <td className="p-4 text-sm text-left text-gray-700">{coupon.Percent}%</td>
                                                    <td className="p-4 text-sm text-left text-gray-900">{coupon.Currency}</td>
                                                    <td className="p-4 text-sm text-left text-gray-700">{coupon.CreatedAt}</td>
                                                    <td className="p-4 text-sm text-left">
                                                        <span className="bg-gray-100 py-2 px-3 rounded font-semibold text-gray-600">{coupon.Status}</span>
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
                                            
                    <div className="coupon-info xl:w-1/3 xl:order-2 p-6 xl:pt-0 xl:px-8 pb-8 order-1 xl:order-2">
                        <h3 className="mb-0 text-lg text-gray-900 font-semibold text-left mb-4">New Coupon</h3>

                        <div className="form-group mb-6">
                            <label className="block text-sm text-gray-900 text-left mb-2">Coupon Code</label>
                            <input type="text" placeholder="Coupon Code" className="border focus:outline-none focus:border-yellow-400 text-sm px-4 py-3 w-full" />
                        </div>

                        <div className="form-group mb-6">
                            <label className="block text-sm text-gray-900 text-left mb-2">By Percent</label>
                            <input type="text" placeholder="By percent" className="border focus:outline-none focus:border-yellow-400 text-sm px-4 py-3 w-full" />
                        </div>

                        <div className="form-group mb-6">
                            <label className="block text-sm text-gray-900 text-left mb-2">By Currency</label>
                            <input type="text" placeholder="By currency" className="border focus:outline-none focus:border-yellow-400 text-sm px-4 py-3 w-full" />
                        </div>

                        <div className="form-group mb-6">
                            <label className="block text-sm text-gray-900 text-left mb-2">Expired Date</label>
                            <input type="text" placeholder="Expiry date" className="border focus:outline-none focus:border-yellow-400 text-sm px-4 py-3 w-full" />
                        </div>

                        <div className="form-group mb-6">
                            <label className="block text-sm text-gray-900 text-left mb-2">Description</label>
                            <textarea placeholder="Description" className="border focus:outline-none focus:border-yellow-400 text-sm px-4 py-3 w-full" style={{minHeight: "160px"}} />
                        </div>

                        <div className="form-group flex flex-col sm:flex-row justify-between sm:mt-24">
                            <button type="reset" className="bg-gray-200 text-gray-900 text-sm px-10 py-3 font-semibold w-full sm:mr-1 mb-4 sm:mb-0">RESET</button>
                            <button type="submit" className="border-0 rounded-0 bg-green-400 text-white text-sm hover:bg-yellow-400 hover:text-white px-10 py-3 font-semibold w-full sm:ml-1">ADD NEW</button>
                        </div>
                    </div>
                </div>
            </> 
        )
    }
}

export default Coupons;