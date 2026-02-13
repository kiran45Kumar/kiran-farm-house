import React, { useEffect, useState } from "react";
import { updateGallery, getGalleries, getCategories } from "../../api/api";
import { toast } from "react-toastify";

const ViewGallery = ({ setFlag }) => {
    const [galleries, setGalleries] = useState([]);
    const [editData, setEditData] = useState(null);
    const [categories, setCategories] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchGalleries = async () => {
            const data = await getGalleries();
            setGalleries(data);
        };
        fetchGalleries();
    }, []);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const handleEditClick = (gallery) => {
        setEditData(gallery);
        setIsEditing(true);
    };

    const handleUpdate = async () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("title", editData.title);
            formData.append("description", editData.description);

            if (editData.category && editData.category._id) {
                formData.append("categoryId", editData.category._id);
            }

            if (editData.image) {
                formData.append("image", editData.image);
            }
            console.log("editData before update:", editData);

            const updated = await updateGallery(editData._id, formData);

            setGalleries((prev) =>
                prev.map((gallery) => (gallery._id === updated._id ? updated : gallery))
            );

            toast.success("Gallery Updated Successfully");
            setIsEditing(false);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={() => setFlag(true)} className="m-3 underline cursor-pointer">
                Add Gallery
            </button>

            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                <h1 className="font-bold p-2">Galleries</h1>

                <div className="overflow-auto max-h-96">
                    {galleries.length > 0 ? (
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b bg-blue-gray-50">Title</th>
                                    <th className="p-4 border-b bg-blue-gray-50">Description</th>
                                    <th className="p-4 border-b bg-blue-gray-50">Image</th>
                                    <th className="p-4 border-b bg-blue-gray-50"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {galleries.map((gallery) => (
                                    <tr key={gallery._id} className="even:bg-blue-gray-50/50">
                                        <td className="p-4">{gallery.title}</td>
                                        <td className="p-4">{gallery.description}</td>
                                        <td className="p-4">
                                            {gallery.image?.url ? (
                                                <a
                                                    href={gallery.image.url}
                                                    target="_blank"
                                                    className="hover:text-blue-400"
                                                    rel="noreferrer"
                                                >
                                                    View Image
                                                </a>
                                            ) : (
                                                "No Image"
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <button
                                                className="text-blue-600 hover:underline"
                                                onClick={() => handleEditClick(gallery)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        "No Galleries Found"
                    )}
                </div>


                {isEditing && editData && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-lg font-semibold mb-4">Edit Gallery</h2>

                            <input
                                type="text"
                                name="title"
                                value={editData.title}
                                onChange={(e) =>
                                    setEditData({ ...editData, title: e.target.value })
                                }
                                className="w-full border p-2 mb-3 rounded"
                                placeholder="Title"
                            />

                            <textarea
                            name="description"
                                value={editData.description}
                                onChange={(e) =>
                                    setEditData({ ...editData, description: e.target.value })
                                }
                                className="w-full border p-2 mb-3 rounded"
                                placeholder="Description"
                            />

                            <select
                            name="category"
                                value={editData.category?._id || ""}
                                onChange={(e) => {
                                    const selected = categories.find((cat) => cat._id === e.target.value);
                                    setEditData({ ...editData, category: selected });
                                }}
                                className="w-full border p-2 mb-3 rounded"
                            >
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>

                            <input
                                name="image"
                                type="file"
                                onChange={(e) =>
                                    setEditData({ ...editData, image: e.target.files[0] })
                                }
                                className="w-full border p-2 mb-4 rounded"
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 border rounded"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleUpdate}
                                    className="px-4 py-2 bg-black text-white rounded"
                                >
                                    {loading ? "Updating..." : "Update"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewGallery;
