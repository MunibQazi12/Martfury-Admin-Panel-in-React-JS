import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../common/sideBar';
import Header from '../common/Header';
import Chart from '../../assets/images/chart.png';
import CircleChart from '../../assets/images/circle-chart.png';

class Dashboard extends Component {
    render() {
        return (
            <>
                <main className="main-content flex flex-row flex-nowrap items-stretch ">
                    <SideBar />
                    <div className="main-wrapper p-8 work-sans flex-grow">
                        <Header />

                        <section className="dashboard-content flex justify-between work-sans">
                            <div className="section-left pr-8 flex-grow">
                                <div className="flex flex-wrap">
                                    <div className="w-8/12 flex-grow text-left">
                                        <div className="sales-report pb-8">
                                            <h4 className="mb-0 text-gray-900 font-semibold text-xl">Sales Report</h4>
                                            <div className="px-4 py-2">
                                                <img src={Chart} alt="chart" className="w-full" />
                                            </div>

                                            <div className="report-footer mb-12">
                                                <div className="flex flex-wrap justify-between items-center">
                                                    <div className="w-8/12 flex-grow text-left font-light text-sm flex items-center text-gray-800">
                                                        <span className="text-yellow-400 text-2xl mr-2">&#8226;</span>
                                                        <span>Items Earning Sales ($)</span>
                                                    </div>

                                                    <div className="w-4/12 flex-grow text-right font-light text-gray-800">
                                                        <Link to="#" className="hover:text-yellow-400 text-sm">Export Report <i className="fa fa-cloud-download" aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="recent-orders">
                                                <h4 className="mb-0 text-gray-900 font-semibold text-xl pb-4">Recent Orders</h4>
                                           
                                                <div className="recent-order-content">
                                                    <table className="w-full">
                                                        <thead>
                                                            <tr>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">ID</th>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">Date</th>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">Product</th>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">Payment</th>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">Fullfillment</th>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">Total</th>
                                                                <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm">ID</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>

                                                            <tr>
                                                                <td className="py-4 text-sm">#A580</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-600">Paid</span>
                                                                </td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">Delivered</td>

                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>

                                                                <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>                                           
                                           
                                           
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-4/12 flex-grow text-left">
                                        <div className="sales-report pb-8 text-gray-900 font-semibold text-xl">
                                            <h4 className="mb-0">Earnings</h4>
                                        </div>

                                        <div className="px-4 py-2">
                                            <div>
                                                <img src={CircleChart} alt="Circle chart" />
                                            </div>

                                            <div className="card-status pl-8 pt-8">
                                                <p className="flex items-center yellow text-gray-500 text-sm mb-2">
                                                    <span className="text-yellow-400 text-2xl mr-2">&#8226;</span>
                                                    <strong className="mr-8"> $20,199</strong>
                                                    <span>Income</span>
                                                </p>

                                                <p className="flex items-center yellow text-gray-500 text-sm mb-2">
                                                    <span className="text-red-400 text-2xl mr-2">&#8226;</span>
                                                    <strong className="mr-8"> $1,021</strong>
                                                    <span>Taxes</span>
                                                </p>

                                                <p className="flex items-center yellow text-gray-500 text-sm mb-2">
                                                    <span className="text-green-500 text-2xl mr-2">&#8226;</span>
                                                    <strong className="mr-8"> $992.00</strong>
                                                    <span>Fees</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="section-right flex-grow max-w-xs">

                            </div>
                        </section>
                    </div>
                </main>
            </>
        )
    }
}

export default Dashboard;