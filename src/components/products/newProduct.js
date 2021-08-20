import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './product.css';

class NewProduct extends Component {
    render() {
        return (
            <>
                <section className="p-6 xl:px-8 xl:pb-8 xl:pt-0 mt-24 work-sans">
                    <form>
                        <div className="flex w-full">
                            <div className="grid sm:grid-flow-col sm:grid-cols-2 gap-6 w-full">
                                <div className="border w-full">
                                    <div className="bg-green-50 px-4 py-4 text-left font-semibold">
                                        <figcaption>General</figcaption>
                                    </div>

                                    <div className="px-6 py-4">
                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Product Name<sup className="text-pink-500">*</sup></label>
                                            <input type="text" placeholder="Enter product name..." className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Reference<sup className="text-pink-500">*</sup></label>
                                            <input type="text" placeholder="Enter product reference..." className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Product Summary<sup className="text-pink-500">*</sup></label>
                                            <textarea style={{minHeight: "165px"}} placeholder="Enter product description..." className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Regular Price<sup className="text-pink-500">*</sup></label>
                                            <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Sale Price<sup className="text-pink-500">*</sup></label>
                                            <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Sale Quantity<sup className="text-pink-500">*</sup></label>
                                            <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Sold Items<sup className="text-pink-500">*</sup></label>
                                            <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm text-gray-900 text-left mb-2">Product Description<sup className="text-pink-500">*</sup></label>
                                            <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="w-full border mb-12">
                                        <div className="bg-green-50 px-4 py-4 text-left font-semibold">
                                            <figcaption>Product Images</figcaption>
                                        </div>

                                        <div className="px-6 py-4">
                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">Product Thumbnail</label>
                                                <div className="flex">
                                                    <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400 rounded-l-md" />
                                                    <label className="sideBarTransition px-4 py-3 bg-red-700 hover:bg-yellow-400 table text-white rounded-r-md"> CHOOSE
                                                        <input type="file" size="60" className="hidden" />
                                                    </label> 
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">Product Gallery</label>
                                                <div className="flex mb-6">
                                                    <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400 rounded-l-md" />
                                                    <label className="sideBarTransition px-4 py-3 bg-red-700 hover:bg-yellow-400 table text-white rounded-r-md"> CHOOSE
                                                        <input type="file" size="60" className="hidden" />
                                                    </label> 
                                                </div>

                                                <div className="flex">
                                                    <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400 rounded-l-md" />
                                                    <label className="sideBarTransition px-4 py-3 bg-red-700 hover:bg-yellow-400 table text-white rounded-r-md"> CHOOSE
                                                        <input type="file" size="60" className="hidden" />
                                                    </label> 
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">Video (optional)</label>
                                                <input type="text" placeholder="Enter video URL" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border mb-12">
                                        <div className="bg-green-50 px-4 py-4 text-left font-semibold mb-4">
                                            <figcaption>Product Images</figcaption>
                                        </div>

                                        <div className="px-6 py-4">
                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">SKU <sup className="text-pink-500">*</sup></label>
                                                <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">Status</label>
                                                <select className="bg-white text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400">
                                                    <option value="status-1">Status 1</option>
                                                    <option value="status-2">Status 2</option>
                                                    <option value="status-3">Status 3</option>
                                                    <option value="status-4">Status 4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border mb-12">
                                        <div className="bg-green-50 px-4 py-4 text-left font-semibold mb-4">
                                            <figcaption>Meta</figcaption>
                                        </div>

                                        <div className="px-6 py-4">
                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">Brand</label>
                                                <select className="bg-white text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400">
                                                    <option value="Brand-1">Brand 1</option>
                                                    <option value="Brand-2">Brand 2</option>
                                                    <option value="Brand-3">Brand 3</option>
                                                    <option value="Brand-4">Brand 4</option>
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-sm text-gray-900 text-left mb-2">Tags</label>
                                                <input type="text" className="text-sm w-full px-4 py-3 border focus:outline-none focus:border-yellow-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="flex flex-col sm:flex-row justify-between mt-24">
                            <button className="py-3 px-9 mb-5 sm:mb-0 text-sm font-medium bg-gray-800 text-white hover:bg-yellow-400">BACK</button>

                            <button className="py-3 px-9 mb-5 sm:mb-0 text-sm font-medium bg-gray-100 text-gray-800 hover:bg-yellow-400 hover:text-white">CANCEL</button>

                            <button className="py-3 px-9 mb-5 sm:mb-0 text-sm font-medium bg-red-700 text-white hover:bg-yellow-400">SUBMIT</button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default NewProduct;