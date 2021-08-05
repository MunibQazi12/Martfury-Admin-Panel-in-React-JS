import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../common/sideBar';
import Header from '../common/Header';
import Chart from '../../assets/images/chart.png';
import CircleChart from '../../assets/images/circle-chart.png';
import MapAndBundle from '../../assets/images/map-and-bundle.png';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.refDropdown = React.createRef();
        this.state = {
            sideBarMobileToggle: false,
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

    sideBarMobileHandler = () => {
        this.setState({
            sideBarMobileToggle: !this.state.sideBarMobileToggle
        })
    }

    tableRowHandler = (x) => {
        this.setState({
            tableRow: x
        })
    }

    render() {
        const recentOrders = [
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Paid", Fullfillment: "Delivered", Total: "56.00"},
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Unpaid", Fullfillment: "Delivered", Total: "56.00"},
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Paid", Fullfillment: "Delivered", Total: "56.00"},
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Unpaid", Fullfillment: "Delivered", Total: "56.00"},
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Paid", Fullfillment: "Delivered", Total: "56.00"},
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Unpaid", Fullfillment: "Delivered", Total: "56.00"},
            {ID:"#A580", Date: "Aug, 15, 2020", Product: "Unero Black Military", Payment: "Paid", Fullfillment: "Delivered", Total: "56.00"},
        ];
        
        return (
            <>
                <main className="main-content flex flex-row flex-nowrap items-stretch">
                    <div className="sideBar overflow-y-auto hidden lg:block">
                        <SideBar />
                    </div>
                    
                    <div className={`sideBar overflow-y-auto lg:hidden fixed left-0 top-0 h-full z-30 ${this.state.sideBarMobileToggle ? "left-0 sideBarTransition" : "-left-96"}`}>
                        <SideBar />
                    </div>

                    <div onClick={this.sideBarMobileHandler} className={`lg:hidden ${this.state.sideBarMobileToggle ? "show" : "hidden"}`}>
                        <div className="sidePanelOverlay fixed top-0 left-0 right-0 bottom-0 z-20 bg-gray-50 w-100 h-100"></div>
                    </div>

                    <div className="overflow-x-auto main-wrapper p-6 xl:p-8 work-sans flex-grow">
                        <Header sideBarMobileHandler={this.sideBarMobileHandler}/>

                        <section className="dashboard-content flex flex-col xl:flex-row justify-between work-sans mt-20 lg:mt-0">
                            <div className="section-left lg:pr-8 order-2 xl:order-1">
                                <div className="flex flex-wrap flex-col md:flex-row">
                                    <div className="md:w-8/12 flex-grow text-left">
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
                                        </div>
                                    </div>

                                    <div className="md:w-4/12 flex-grow text-left">
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
                            
                                <div className="recent-orders">
                                    <h4 className="mb-0 text-gray-900 font-semibold text-xl pb-4 text-left">Recent Orders</h4>
                                
                                    <div className="overflow-x-auto recent-order-content">
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
                                                {recentOrders.map((order, i) =>{
                                                    return <tr key={i}>
                                                                <td className="py-4 text-sm">{order.ID}</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">{order.Date}</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">{order.Product}</Link></td>
                                                                <td className="py-4 text-center text-sm">
                                                                    <span className="bg-gray-200 p-2 rounded font-semibold text-green-500">{order.Payment}</span>
                                                                </td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center">
                                                                    <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                                <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>
                                                                <td ref={this.refDropdown} className="py-4 text-sm text-center">
                                                                    <i onClick={() => this.tableRowHandler(i) } className="fa fa-ellipsis-h cursor-pointer" aria-hidden="true"></i>
                                                                    <div className={`dropdown-menu border border-gray-100 flex flex-col text-left rounded w-24 absolute bg-white ${this.state.tableRow === i ? "show" : "hidden"}`}>
                                                                        <Link to="https://tailwindcss.com/docs/display" className="text-sm text-gray-800 font-light hover:bg-gray-100 px-2 py-1">Edit</Link>
                                                                        <Link to="#" className="text-sm text-gray-800 font-light hover:bg-gray-100 px-2 py-1">Delete</Link>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        })}

                                                {/* <tr>
                                                    <td className="py-4 text-sm bg-gray-50">#A580</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50">Aug, 15, 2020</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                    <td className="py-4 text-center text-sm bg-gray-50">
                                                        <span className="bg-gray-200 p-2 rounded font-semibold text-gray-500">Unpaid</span>
                                                    </td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center bg-gray-50">
                                                        <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50">$56.00</td>
                                                    <td className="py-4 text-sm text-center bg-gray-50"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                </tr>

                                                <tr>
                                                    <td className="py-4 text-sm">#A580</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                    <td className="py-4 text-center text-sm">
                                                        <span className="bg-gray-200 p-2 rounded font-semibold text-green-500">Paid</span>
                                                    </td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center">
                                                        <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>
                                                    <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                </tr>

                                                <tr>
                                                    <td className="py-4 text-sm bg-gray-50">#A580</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50">Aug, 15, 2020</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                    <td className="py-4 text-center text-sm bg-gray-50">
                                                        <span className="bg-gray-200 p-2 rounded font-semibold text-gray-500">Unpaid</span>
                                                    </td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center bg-gray-50">
                                                        <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50">$56.00</td>
                                                    <td className="py-4 text-sm text-center bg-gray-50"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                </tr>

                                                <tr>
                                                    <td className="py-4 text-sm">#A580</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                    <td className="py-4 text-center text-sm">
                                                        <span className="bg-gray-200 p-2 rounded font-semibold text-green-500">Paid</span>
                                                    </td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center">
                                                        <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>
                                                    <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                </tr>

                                                <tr>
                                                    <td className="py-4 text-sm bg-gray-50">#A580</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50">Aug, 15, 2020</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                    <td className="py-4 text-center text-sm bg-gray-50">
                                                        <span className="bg-gray-200 p-2 rounded font-semibold text-gray-500">Unpaid</span>
                                                    </td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center bg-gray-50">
                                                        <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 bg-gray-50">$56.00</td>
                                                    <td className="py-4 text-sm text-center bg-gray-50"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                </tr>

                                                <tr>
                                                    <td className="py-4 text-sm">#A580</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900">Aug, 15, 2020</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900"><Link to="#" className="hover:text-yellow-400">Unero Black Military</Link></td>
                                                    <td className="py-4 text-center text-sm">
                                                        <span className="bg-gray-200 p-2 rounded font-semibold text-green-500">Paid</span>
                                                    </td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900 flex items-center justify-center">
                                                        <span className="text-green-400 text-xl mr-1">&#x2022;</span>Delivered</td>
                                                    <td className="py-4 text-sm font-semibold text-gray-900">$56.00</td>
                                                    <td className="py-4 text-sm text-center"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>                                           
                                    <Link to="#" className="text-blue-400 hover:text-yellow-500 font-semibold text-sm text-left block mt-8">
                                        View Full Orders <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </Link>
                                </div>   
                            </div>

                            <div className="section-right flex-grow lg:max-w-full xl:max-w-xs xl:pl-4 xl:border-l xl:border-gray-4 order-1 xl:order-2">
                                <div className="statistics">
                                    <div className="statistics-header flex justify-between items-center pb-8">
                                        <h4 className="mb-0 text-gray-900 font-semibold text-xl">Statics</h4>
                                        <div className="sort-by font-light text-gray-600 text-sm">
                                            <i className="fa fa-calendar-o mr-4" aria-hidden="true"></i>
                                            <select className="focus:outline-none bg-transparent">
                                                <option>Last 30 days</option>
                                                <option>Last 90 days</option>
                                                <option>Last 180 days</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap lg:justify-between xl:flex-col">
                                        <div className="statistics-card bg-yellow-50 rounded-2xl mb-4 w-full md:w-5/12 lg:w-auto md:mr-4 lg:mr-0">
                                            <div className="flex items-center rounded-lg p-6">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                                    <i className="fa fa-cart-arrow-down text-yellow-400" aria-hidden="true"></i>
                                                </div>

                                                <div className="pl-3 xl:pl-6 text-left">
                                                    <p className="text-gray-500 font-light">Orders</p>
                                                    <h4 className="text-xl text-gray-900 font-semibold">254
                                                        <small className="text-green-600">
                                                            <i className="fa fa-long-arrow-up mx-2" aria-hidden="true"></i>
                                                            <span className="text-sm font-semibold">12.5%</span>
                                                        </small>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="statistics-card bg-red-50 rounded-2xl mb-4 w-full md:w-5/12 lg:w-auto md:mr-4 lg:mr-0">
                                            <div className="flex items-center rounded-lg p-6">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                                    <i className="fa fa-cart-arrow-down text-yellow-400" aria-hidden="true"></i>
                                                </div>

                                                <div className="pl-3 xl:pl-6 text-left">
                                                    <p className="text-gray-500 font-light">Revenue</p>
                                                    <h4 className="text-xl text-gray-900 font-semibold">$6,260
                                                        <small className="text-green-600">
                                                            <i className="fa fa-long-arrow-up mx-2" aria-hidden="true"></i>
                                                            <span className="text-sm font-semibold">7.1%</span>
                                                        </small>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="statistics-card bg-green-50 rounded-2xl mb-4 w-full md:w-5/12 lg:w-auto md:mr-4 lg:mr-0">
                                            <div className="flex items-center rounded-lg p-6">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                                    <i className="fa fa-cart-arrow-down text-yellow-400" aria-hidden="true"></i>
                                                </div>

                                                <div className="pl-3 xl:pl-6 text-left">
                                                    <p className="text-gray-500 font-light">Revenue</p>
                                                    <h4 className="text-xl text-gray-900 font-semibold">$2,567
                                                        <small className="text-green-600">
                                                            <i className="fa fa-long-arrow-down mx-2" aria-hidden="true"></i>
                                                            <span className="text-sm font-semibold">0.32%</span>
                                                        </small>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <h4 className="mb-0 text-gray-900 font-semibold text-xl text-left mt-8 mb-4">Top Countries</h4>

                                <div className="flex mb-4">
                                    <div className="flex w-2/4">
                                        <span className="text-yellow-400 mr-4">&#x2022;</span>
                                        <p className="font-light text-sm">United States
                                            <span className="font-medium block text-left">80%</span>
                                        </p>
                                    </div>

                                    <div className="flex w-2/4">
                                        <span className="text-red-400 mr-4">&#x2022;</span>
                                        <p className="font-light text-sm">United Kingdom
                                            <span className="font-medium block text-left">65%</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex w-2/4">
                                        <span className="text-green-400 mr-4">&#x2022;</span>
                                        <p className="font-light text-sm">Germany
                                            <span className="font-medium block text-left">65%</span>
                                        </p>
                                    </div>

                                    <div className="flex w-2/4">
                                        <span className="text-green-900 mr-4">&#x2022;</span>
                                        <p className="font-light text-sm">Russia
                                            <span className="font-medium block text-left">35%</span>
                                        </p>
                                    </div>
                                </div>
                            
                                <div>
                                    <img src={MapAndBundle} alt="MapAndBundle" />
                                </div>

                                <p className="text-gray-800 mb-0 text-sm font-light text-left">We only started collecting region data from January 2015</p>
                            </div>
                        </section>
                    </div>
                </main>
            </>
        )
    }
}

export default Dashboard;