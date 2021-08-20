import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './product.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.refDropdown = React.createRef();
        this.state = {
            tableRow: ''
        }
    }

    componentWillMount() {
        document.addEventListener("onclick", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("onclick", this.handleClickOutside);
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
        const productListing = [
            {ID:"ABH-0", Name: "Herschel Leather Duffle Bag In Brown Color", SKU:"AB123456789-1", Stock:"Stock", Price:"125.30", Categories:{category1: "Bags", category2: "Clothing & Apparel"}, Date: "2019/11/06"},
            {ID:"ABH-1", Name: "Apple iPhone Retina 6s Plus 64GB", SKU:"CD987654316-1", Stock:"Stock", Price:"1,249.99", Categories:{category1: "Computers & Technologies", category2: "Mobiles"}, Date: "2018/12/11"},
            {ID:"ABH-2", Name: "Marshall Kilburn Portable Wireless Speaker", SKU:"SF1133569600-1", Stock:"Stock", Price:"36.78", Categories:{category1: "Babies & Moms", category2: "Refrigerators"}, Date: "2019/11/06"},
            {ID:"ABH-3", Name: "Xbox One Wireless Controller Black Color", SKU:"AB123456788", Stock:"Out of Stock", Price:"55.30", Categories:{category1: "Accessories", category2: "Air Conditioners"}, Date: "2019/11/06"},
            {ID:"ABH-4", Name: "Grand Slam Indoor Of Show Jumping Novel", SKU:"AB123456783", Stock:"Out of Stock", Price:"32.39", Categories:{category1: "Books & Office", category2: "Cars & Motocycles"}, Date: "2019/11/06"},
            {ID:"ABH-5", Name: "Rayban Rounded Sunglass Brown Color", SKU:"AB123456783-0", Stock:"Stock", Price:"321.39", Categories:{category1: "Clothing & Apparel", category2: "Cars & Motocycles"}, Date: "2019/11/06"}
    ];

        return (
            <>
                <div className="product-listing p-6 xl:px-8 xl:pb-8 xl:pt-0 mt-24">
                    <div className="product-actions flex justify-end pb-12">
                        <Link to="/products/new-product" className="px-8 py-2.5 bg-green-400 hover:bg-yellow-400 text-white font-medium text-sm uppercase">
                            <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                            NEW PRODUCT
                        </Link>
                    </div>

                    <div className="product-header flex xl:flex-row flex-col pb-12">
                        <div className="product-header-filter w-full xl:w-3/4 order-2 xl:order-1">
                            <form method="get" className="flex flex-col sm:flex-row">
                                <div className="filter-form-left flex flex-col sm:flex-row w-full sm:w-5/6">
                                    <div className="form-group pl-0 sm:pr-1 xl:px-1 w-full mb-4 sm:mb-0">
                                        <select className="w-full py-2.5 px-3 bg-white border focus:outline-none font-light text-sm text-gray-900">
                                            <option value="1">Select Category</option>
                                            <option value="2">Clothing & Apparel</option>
                                            <option value="3">Electronics</option>
                                        </select>
                                    </div>

                                    <div className="form-group sm:px-1 w-full mb-4 sm:mb-0">
                                        <select className="w-full py-2.5 px-3 bg-white border focus:outline-none font-light text-sm text-gray-900">
                                            <option value="1">Product Type</option>
                                            <option value="2">Simple Product</option>
                                            <option value="3">Groupped Product</option>
                                        </select>
                                    </div>

                                    <div className="form-group sm:px-1 w-full mb-4 sm:mb-0">
                                        <select className="w-full py-2.5 px-3 bg-white border focus:outline-none font-light text-sm text-gray-900">
                                            <option value="1">Status</option>
                                            <option value="2">Active</option>
                                            <option value="3">Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="filter-form-right pr-0 sm:pl-1 xl:px-1 w-full sm:w-1/6">
                                    <button className="bg-gray-200 hover:bg-yellow-400 w-full py-2.5 font-medium text-sm">
                                        <i className="fa fa-filter text-gray-900 mr-2" aria-hidden="true"></i>
                                        FILTER
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="product-filter mb-4 xl:mb-0 w-full xl:w-1/4 xl:pl-1 relative order-1 xl:order-2">
                            <form method="get" className="h-full">
                                <input type="text" className="h-full border px-4 py-2.5 focus:outline-none text-sm w-full focus:border-yellow-400" placeholder="Search product" />
                                <button className="absolute top-2 right-4">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                
                    <div className="overflow-x-auto product-records">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">ID</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Name</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">SKU</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Stock</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Price</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Categories</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left">Date</th>
                                    <th className="font-light border-b border-gray-300 p-4 text-gray-600 text-sm text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {productListing.map((product, i) =>{
                                    return <tr key={i}>
                                                <td className="p-4 text-sm text-left text-gray-700">{product.ID}</td>
                                                <td className="p-4 text-sm text-left font-semibold text-gray-900 hover:text-yellow-400">
                                                    <Link to="#">{product.Name}</Link>
                                                </td>
                                                <td className="p-4 text-sm text-left text-gray-700">{product.SKU}</td>
                                                <td className="p-4 text-sm text-left">
                                                    <span className="bg-gray-100 py-2 px-3 rounded font-semibold text-green-600">{product.Stock}</span>
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 text-left">£{product.Price}</td>
                                                <td className="p-4 text-sm text-gray-400 text-left">
                                                    <Link to="#" className="hover:text-yellow-400">{product.Categories.category1}</Link> <Link to="#" className="hover:text-yellow-400">{product.Categories.category2}</Link></td>
                                                <td className="p-4 text-sm text-gray-700 text-left">{product.Date}</td>
                                                <td ref={this.refDropdown} className="p-4 text-sm text-center text-left">
                                                    <div onClick={() => this.tableRowHandler(i) }>
                                                        <i className="fa fa-ellipsis-h cursor-pointer" aria-hidden="true"></i>
                                                    </div>
                                                    <div className={`dropdown-menu border border-gray-100 flex flex-col text-left rounded w-24 absolute bg-white right-4 ${this.state.tableRow === i ? "show" : "hidden"}`}>
                                                        <Link to="/login" className="text-sm text-gray-800 font-light hover:bg-gray-100 px-2 py-1">Edit</Link>
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

export default Products;