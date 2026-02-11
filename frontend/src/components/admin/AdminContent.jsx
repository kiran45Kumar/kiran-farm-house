import React from "react";
import Contact from "./ContactForm";

const AdminContent = () => {
    return (
        <>
            <div className="admin-content bg-gray-50 w-full">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 class="text-gray-500 font-medium text-sm">Total Galleries</h2>
                        <p class="text-3xl font-bold text-gray-800 mt-2">24</p>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 class="text-gray-500 font-medium text-sm">Total Contacts</h2>
                        <p class="text-3xl font-bold text-gray-800 mt-2">102</p>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 class="text-gray-500 font-medium text-sm">Total Testimonials</h2>
                        <p class="text-3xl font-bold text-gray-800 mt-2">58</p>
                    </div>
                    <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 class="text-gray-500 font-medium text-sm">Total Members</h2>
                        <p class="text-3xl font-bold text-gray-800 mt-2">76</p>
                    </div>
                </div>
            <Contact />
            </div>
        </>


    );
};

export default AdminContent;
