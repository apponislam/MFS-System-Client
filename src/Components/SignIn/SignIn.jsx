import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body p-4 pb-2 md:p-8 md:pb-3">
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
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">Login</button>
                            </div>
                        </form>
                        <div className="flex items-center justify-between px-4 md:px-8 mb-4">
                            <label className="label pt-0 pb-0">
                                <p className="label-text-alt link link-hover">
                                    You have no accout?{" "}
                                    <span className="link link-hover text-[#0356f9]">
                                        <Link to="/signup">Sign Up Here</Link>
                                    </span>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
