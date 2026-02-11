import React, { useState } from "react";
import { loginUser } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await loginUser({ email, password });

            localStorage.setItem("adminToken", response.token);
            toast.success("Login Successful!");
            setTimeout(() => {
                navigate("/admin");
            }, 1500);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="admin-login p-6">

                <div className="space-y-4 max-w-sm mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border px-3 py-2"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border px-3 py-2"
                        placeholder="Password"
                    />

                    <button
                        onClick={login}
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
