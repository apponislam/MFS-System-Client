import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const axiosPublic = useAxiosPublic();
    // console.log(axiosPublic);
    // const { createUser, setLoading } = useContext(AuthContext);
    // const nvaigate = useNavigate();

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && value.length <= 5) {
            setPassword(value);
        }
    };

    const signUpBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const emailOrPhone = e.target.emailOrPhone.value;
        const pin = e.target.pin.value;
        console.log(name, emailOrPhone, pin);

        if (pin.length < 4 && pin.length > 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pin must be in 5 number",
            });
            return;
        }

        axiosPublic
            .post("/register", {
                emailOrPhone,
                name,
                pin,
            })
            .then((response) => {
                console.log(`Registration successful! Token: ${response.data}`);
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.msg}`,
                });
            });
    };

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Registration Page</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body p-4 pb-2 md:p-8 md:pb-2" onSubmit={signUpBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Or Number</span>
                                </label>
                                <input type="text" placeholder="Email Or Number" name="emailOrPhone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pin</span>
                                </label>
                                <div className="relative">
                                    <input value={password} onChange={handlePasswordChange} type={showPassword ? "text" : "password"} placeholder="Pin" name="pin" className="input input-bordered w-full" required />
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
