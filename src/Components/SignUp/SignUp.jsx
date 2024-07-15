import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Sgin Up Page</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body p-4 pb-2 md:p-8 md:pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" placeholder="Paste your image link" name="link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered w-full" required />
                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                        <FaEye />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-primary bg-black border-black hover:bg-transparent text-white hover:border-black hover:text-black">Sign Up</button>
                            </div>
                        </form>
                        <p className="pl-4 md:pl-8 pb-6 label-text-alt">
                            Already have an account? Please
                            <span className="link link-hover text-[#0356f9]">
                                <Link to="/signin"> Sign In</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
