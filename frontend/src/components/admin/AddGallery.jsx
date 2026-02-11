import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { addGallery } from "../../api/api";
import { Navigate } from "react-router-dom";
const AddGallery = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formdata, setFormData] = useState({
        title: "",
        description: "",
        categoryId: "",
        image: null,
    });
    const token = localStorage.getItem("adminToken");
    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/categories/"
                );
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formdata,
            image: e.target.files[0],
        });
    };

    const submitGallery = async () => {
        if (!formdata.title) return toast.error("Title is required");
        if (!formdata.description) return toast.error("Description is required");
        if (!formdata.categoryId) return toast.error("Category is required");
        if (!formdata.image) return toast.error("Image is required");
        setLoading(true);
        try {
            const form = new FormData();
            form.append("title", formdata.title);
            form.append("description", formdata.description);
            form.append("categoryId", formdata.categoryId);
            form.append("image", formdata.image);

            await addGallery(form);

            toast.success("Gallery added successfully");

            setFormData({
                title: "",
                description: "",
                categoryId: "",
                image: null,
            });

        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-gallery p-6">
            <h1 className="text-2xl font-bold mb-4">Add Gallery</h1>

            <div className="space-y-4 max-w-md">

                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formdata.title}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        placeholder="Gallery Title"
                    />
                </div>

                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formdata.description}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                        placeholder="Gallery Description"
                    />
                </div>

                <div>
                    <label>Category</label>
                    <select
                        name="categoryId"
                        value={formdata.categoryId}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option value={category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full"
                    />
                </div>

                <button
                    onClick={submitGallery}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                    {loading?"Adding...":"Add Gallery"}
                </button>

            </div>
        </div>
    );
};

export default AddGallery;
