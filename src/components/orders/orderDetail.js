import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './order.css';

class OrderDetail extends Component {
    render () {
        const orderItems = [
            {Item: "Herschel Leather Duffle Bag In Brown Color", Quantity: "1", Price: "29.59", Total: "29.59"}, 
            {Item: "Herschel Leather Duffle Bag In Brown Color", Quantity: "1", Price: "86.59", Total: "86.59"}, 
            {Item: "Herschel Leather Duffle Bag In Brown Color", Quantity: "1", Price: "39.19", Total: "39.19"}, 
            {Item: "Herschel Leather Duffle Bag In Brown Color", Quantity: "1", Price: "14.01", Total: "14.01"}
        ]

        return (
            <>
                <div className="flex flex-col lg:flex-row items-start p-6 xl:p-8 work-sans mt-24 lg:mt-0">
                    <div className="w-full lg:w-9/12 md:pr-6 order-2 lg:order-1">
                        <div className="flex flex-col md:flex-row justify-between text-left">
                            <div className="md:w-4/12 md:px-4 md:pr-5 mb-8 md:mb-0">
                                <h3 className="text-gray-900 font-semibold text-base mb-5">Shipping Information</h3>

                                <h5 className="text-gray-900 font-semibold text-sm mb-3">John Doe</h5>

                                <p className="text-sm text-gray-500 mb-3"><span className="font-medium text-gray-900">Address:</span> 117-195 Iroquois Ave London, ON N6C 2K9</p>

                                <p className="text-sm text-gray-500 mb-3"><span className="font-medium text-gray-900">Phone No.:</span> (+998) 117-211-31</p>

                                <p className="text-sm text-gray-500"><span className="font-medium text-gray-900">Email:</span> customer@martfury.com</p>
                            </div>

                            <div className="md:w-4/12 md:px-4 md:pr-5 mb-8 md:mb-0">
                                <h3 className="text-gray-900 font-semibold text-base mb-5">Billing Information</h3>

                                <p className="text-sm text-gray-500 mb-3"><span className="font-medium text-gray-900">Payment Type:</span> Visa</p>

                                <p className="text-sm text-gray-500 mb-3"><span className="font-medium text-gray-900">Provider:</span> **** **** **** *2121</p>

                                <p className="text-sm text-gray-500"><span className="font-medium text-gray-900">Valid Date:</span> 02-2025</p>
                            </div>

                            <div className="md:w-4/12 md:px-4 md:pr-5 mb-8 md:mb-0">
                                <h3 className="text-gray-900 font-semibold text-base mb-5">Shipping Information</h3>

                                <h5 className="text-gray-900 font-semibold text-sm mb-3">John Doe</h5>

                                <p className="text-sm text-gray-500 mb-3"><span className="font-medium text-gray-900">Address:</span> 117-195 Iroquois Ave London, ON N6C 2K9</p>

                                <p className="text-sm text-gray-500 mb-3"><span className="font-medium text-gray-900">Phone No.:</span> (+998) 117-211-31</p>

                                <p className="text-sm text-gray-500"><span className="font-medium text-gray-900">Email:</span> customer@martfury.com</p>
                            </div>
                    
                        </div>    
                    
                        <div className="text-gray-900 font-semibold text-xl mt-16 text-left">#ABD-235711</div>

                        <div className="mt-10">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-normal text-sm text-gray-400 border-b pb-4 px-2" style={{minWidth: "280px"}}>Product</th>
                                        <th className="text-left font-normal text-sm text-gray-400 border-b pb-4 px-2" style={{minWidth: "80px"}}>Quantity</th>
                                        <th className="text-left font-normal text-sm text-gray-400 border-b pb-4 px-2" style={{minWidth: "100px"}}>Price</th>
                                        <th className="text-left font-normal text-sm text-gray-400 border-b pb-4 px-2" style={{minWidth: "100px"}}>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {orderItems.map((orderProduct, i) => {
                                    return  <tr key={i}>
                                                <td className=" text-left py-2 px-2">
                                                    <Link to="#" className="text-gray-800 text-sm hover:text-yellow-400 px-2 inline-block">{orderProduct.Item}</Link>
                                                </td>

                                                <td className=" text-left py-2 text-gray-800 text-sm px-2">{orderProduct.Quantity}</td>

                                                <td className=" text-left py-2 text-gray-800 text-sm px-2">${orderProduct.Price}</td>

                                                <td className=" text-left py-2 text-gray-800 text-sm px-2">${orderProduct.Total}</td>
                                            </tr>
                                })}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-between bg-gray-100 px-2 py-3 mt-5">
                            <div className="font-semibold text-gray-900 text-sm">Sub Total:</div>
                            <div className="font-semibold text-gray-900 text-sm">$199.90</div>
                        </div>

                        <div className="flex justify-between px-2 py-3">
                            <div className="font-semibold text-gray-900 text-sm">Shipping Charge:</div>
                            <div className="font-semibold text-gray-900 text-sm">$24.00</div>
                        </div>

                        <div className="flex justify-between bg-gray-100 px-2 py-3">
                            <div className="font-semibold text-gray-900 text-sm">Estimated:</div>
                            <div className="font-semibold text-gray-900 text-sm">$12.00</div>
                        </div>

                        <div className="flex justify-between px-2 py-3">
                            <div className="font-semibold text-gray-900 text-sm">Total:</div>
                            <div className="font-semibold text-gray-900 text-sm">$211.00</div>
                        </div>
                    </div>

                    <div className="lg:w-3/12 md:px-4 lg:border-l order-1 mb-12 lg:mb-0 order-1 lg:order-2">
                        <h2 className="text-gray-900 text-2xl font-medium mb-5 text-left">Track Order</h2>

                        <div className="flex justify-between mb-10">
                            <div>
                                <h3 className="font-semibold text-base text-gray-900 mb-1 text-left">Order ID:</h3>
                                <p className="text-sm text-gray-600">#ABD-235711</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-base text-gray-900 mb-1 text-left">Tracking ID:</h3>
                                <p className="text-sm text-gray-600">21191818abs1</p>
                            </div>
                        </div>

                        <div className="order-status active-status relative pl-6 pb-6 text-left">
                            <p className="text-gray-900 font-medium mb-1">Order Placed</p>
                            <p className="text-gray-600 text-sm mb-3">Sep 19, 2020 <span className="text-xs">7:00am</span></p>
                        </div>

                        <div className="order-status active-status relative pl-6 pb-6 text-left">
                            <p className="text-gray-900 font-medium mb-1">Packed</p>
                            <p className="text-gray-600 text-sm mb-3">Sep 19, 2020 <span className="text-xs">7:00am</span></p>
                        </div>

                        <div className="order-status active-status relative pl-6 pb-6 text-left">
                            <p className="text-gray-900 font-medium mb-1">Shipped</p>
                            <p className="text-gray-600 text-sm mb-3">Sep 19, 2020 <span className="text-xs">7:00am</span></p>
                        </div>

                        <div className="order-status relative pl-6 text-left">
                            <p className="text-gray-900 font-medium mb-1">Delivered</p>
                            <p className="text-gray-600 text-sm">Estimated delivery within 1 day</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OrderDetail;