import React from "react";
import {addCategory} from "../../api/api";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
const AddCategory = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const token = localStorage.getItem("adminToken");
    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }
    const submitCategory = async ()=>{
        if(!name){
            toast.error("Category Name is required");
            return;
        }
        try{
            const data = await addCategory(name, description);  
            toast.success("Category added successfully");
            setDescription("");
            setName("");
        }
        catch(error){
            toast.error(error.message);
        }
        
    }
    return (
        <div className="add-category flex items-center justify-center mt-10">
            <div className="space-y-4 max-w-md">
                <input
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="w-full border rounded p-2"
                />
                <textarea
                    type="text"
                    placeholder="Category Description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    className="w-full border rounded p-2"
                ></textarea>
                <button
                    onClick={submitCategory}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                    Add Gallery
                </button>
            </div>
        </div>
    );
};

export default AddCategory;
