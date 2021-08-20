import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BackgroundImage from '../../../assets/images/login.jpg';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render () {
        return (
            <>

                <div className="flex work-sans h-screen flex-col md:flex-row">
                    <div className="w-full md:w-2/4 order-1 md:order-2 lg:order-2 h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>

                    </div>

                    <div className="w-full md:w-2/4 flex justify-center items-center p-6 order-2 md:order-1 lg:order-1">
                        <div className="max-w-md text-left">
                            <h2 className="text-gray-900 text-3xl">Xenon Store</h2>
                            <p className="text-gray-700 text-base mb-8">Enter your credentials to create your account.</p>

                            <form onSubmit={this.handleSubmit}>
                                <div className="border rounded">
                                    <div className="p-4 text-left border-b">
                                        <label htmlFor="username" className="block text-sm text-gray-500 mb-2 font-medium">User Name</label>
                                        <input type="text" name="username" placeholder="Your name" id="username" value={this.state.username} onChange={this.handleChange} className="focus:outline-none w-full" />
                                    </div>

                                    <div className="p-4 text-left border-b">
                                        <label htmlFor="email" className="block text-sm text-gray-500 mb-2 font-medium">Email</label>
                                        <input type="text" name="email" placeholder="your-email@gmail.com" id="username" value={this.state.email} onChange={this.handleChange} className="focus:outline-none w-full" />
                                    </div>

                                    <div className="p-4 text-left border-b">
                                        <label htmlFor="password" className="block text-sm text-gray-500 mb-2 font-medium">Password</label>
                                        <input type="password" name="password" placeholder="Your Password" id="password" value={this.state.password} onChange={this.handleChange} className="focus:outline-none w-full" />
                                    </div>

                                    <div className="p-4 text-left">
                                        <label htmlFor="confirmPassword" className="block text-sm text-gray-500 mb-2 font-medium">Confrim Password</label>
                                        <input type="password" name="confirmPassword" placeholder="my new" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} className="focus:outline-none w-full" />
                                    </div>

                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <input type="checkbox" id="remember" name="remember" value="remember" />
                                        <label htmlFor="remember" className="text-gray-600"> Remember me</label>
                                    </div>

                                    <div className="text-gray-400 underline hover:text-yellow-400">
                                        <Link to="#">Forgot Password</Link>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button type="submit" className="w-full text-white py-3 bg-green-400 hover:bg-yellow-400 rounded border-0 focus:outline-none">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Signup;