import { Link, NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { IoMenu } from "react-icons/io5";

function App() {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="p-3 pb-0 flex justify-between">
                        <label htmlFor="my-drawer-2" className="btn bg-black  drawer-button lg:hidden">
                            <div className="text-white text-xl">
                                <IoMenu />
                            </div>
                        </label>
                        <div className="flex justify-between gap-3 lg:flex-1">
                            <Link to="/signin">
                                <button className="btn bg-black border border-black text-white hover:bg-transparent hover:text-black hover:border-black">Log In</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn bg-black border border-black text-white hover:bg-transparent hover:text-black hover:border-black">Registration</button>
                            </Link>
                        </div>
                    </div>

                    <div className="p-3">
                        <Outlet> </Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-3">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup">Registration</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
