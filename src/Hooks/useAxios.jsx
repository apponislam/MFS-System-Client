import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../Provider/Provider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const useAxios = () => {
    const { logOut, setLoading } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        // Add a response interceptor
        axiosSecure.interceptors.response.use(
            function (response) {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
            },
            function (error) {
                console.log(error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log("LogOut the user");
                    logOut()
                        .then(() => {
                            console.log("Successfully logged out");
                            setLoading(false);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    navigate("/login");
                }
            }
        );
    }, [logOut, navigate, setLoading]);

    return axiosSecure;
};

export default useAxios;
