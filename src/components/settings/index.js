import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Settings extends Component {
    

    render () {
        return (
            <>
                <div className="md:w-10/12 lg:w-9/12 p-6 xl:p-8 xl:pt-0 mt-24 lg:mt-0">
                    <h3 className="mb-0 text-lg text-gray-900 font-semibold text-left mb-4">Account Settings</h3>

                    <div className="flex flex-col sm:flex-row mb-5">
                        <div className="w-full mb-5 sm:mb-0 sm:mr-3">
                            <label className="block text-left text-sm mb-2">Full Name</label>
                            <input type="text" className="border focus:outline-none px-4 py-3 w-full focus:border-yellow-400" />
                        </div>

                        <div className="w-full sm:ml-3">
                            <label className="block text-left text-sm mb-2">Display Name</label>
                            <input type="text" className="border focus:outline-none px-4 py-3 w-full focus:border-yellow-400" />
                        </div>
                    </div>

                    <div className="flex mb-5">
                        <div className="w-full">
                            <label className="block text-left text-sm mb-2">Email</label>
                            <input type="email" className="border focus:outline-none px-4 py-3 w-full focus:border-yellow-400" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row mb-5">
                        <div className="w-full mb-5 sm:mb-0 sm:mr-3">
                            <label className="block text-left text-sm mb-2">Role</label>
                            <input type="text" className="border focus:outline-none px-4 py-3 w-full focus:border-yellow-400" />
                        </div>

                        <div className="w-full sm:ml-3">
                            <label className="block text-left text-sm mb-2">Address</label>
                            <input type="text" className="border focus:outline-none px-4 py-3 w-full focus:border-yellow-400" />
                        </div>
                    </div>

                    <div className="flex mb-5">
                        <div className="w-full">
                            <label className="block text-left text-sm mb-2">Bio</label>
                            <textarea className="border focus:outline-none px-4 py-3 w-full focus:border-yellow-400" style={{minHeight: "220px"}}></textarea>
                        </div>
                    </div>
                
                    <div className="flex flex-col sm:flex-row justify-center">
                        <button type="button" className="bg-gray-100 text-gray-900 hover:bg-yellow-400 hover:text-white text-base px-6 py-2 font-medium mb-5 sm:mb-0 sm:mr-2">CANCEL</button>
                        <button type="button" className="bg-green-400 text-white hover:bg-yellow-400 text-base px-6 py-2 font-medium sm:ml-2">UPDATE PROFILE</button>
                    </div>
                </div>
            </> 
        )
    }
}

export default Settings;