import { useEffect, useState } from "react";
import { getCategories, updateCategory } from "../../api/api";
import { deleteCategory } from "../../api/api";
import { toast } from "react-toastify";
import { io } from 'socket.io-client';

const ViewCategory = ({ setFlag }) => {
    const [categories, setCategories] = useState([]);
    const [editData, setEditData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const socket = io("http://localhost:5000");
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchCategories();

        socket.on('category-created', (newCategory) => {
            setCategories(prev => [...prev, newCategory]);
        });

        return () => {
            socket.off('category-created');
        };
    }, []);

    const deleteCat = async (id) => {
        try {
            await deleteCategory(id);

            setCategories((prev) => prev.filter((category) => category._id !== id));

            toast.success("Category Deleted successfully");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const handleEditClick = (category) => {
        setEditData(category);
        setIsEditing(true);
    };
    const handleUpdate = async () => {
        setLoading(true);
        try {
            const updated = await updateCategory(editData._id, editData);
            setCategories((prev) =>
                prev.map((cat) => (cat._id === updated._id ? updated : cat)),
            );
            toast.success("Category Updated Successfully");
            setLoading(false);
            setIsEditing(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={() => setFlag(true)}
                className="m-3 underline cursor-pointer"
            >
                Add Category
            </button>
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                <h1 className="font-bold p-2">Categories</h1>
                <div className="overflow-auto max-h-96">
                    {categories.length > 0 ? (
                        <>
                            <table className="w-full text-left table-auto min-w-max">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                                Name
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                                Description
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70"></p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories
                                        .filter((category) => !category.isDeleted)
                                        .map((category) => (
                                            <tr
                                                className="even:bg-blue-gray-50/50"
                                                key={category._id}
                                            >
                                                <td className="p-4">
                                                    <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                        {category.name}
                                                    </p>
                                                </td>
                                                <td className="p-4">
                                                    <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                        {category.description}
                                                    </p>
                                                </td>
                                                <td className="p-4">
                                                    <button
                                                        onClick={() => handleEditClick(category)}
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                </td>
                                                <td
                                                    className="p-4"
                                                    onClick={() => deleteCat(category._id)}
                                                >
                                                    <a
                                                        href="#"
                                                        className="block font-sans text-sm font-medium text-blue-gray-900"
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        "No Categories found"
                    )}
                </div>
                {isEditing && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-lg font-semibold mb-4">Edit Category</h2>

                            <input
                                type="text"
                                value={editData.name}
                                onChange={(e) =>
                                    setEditData({ ...editData, name: e.target.value })
                                }
                                className="w-full border p-2 mb-3 rounded"
                                placeholder="Category Name"
                            />

                            <textarea
                                value={editData.description}
                                onChange={(e) =>
                                    setEditData({ ...editData, description: e.target.value })
                                }
                                className="w-full border p-2 mb-4 rounded"
                                placeholder="Description"
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
                                    {loading ? (
                                        <div className="flex items-center gap-2">
                                            <p>Updating...</p>
                                            <div role="status">
                                                <svg
                                                    aria-hidden="true"
                                                    class="w-4 h-4 text-neutral-tertiary animate-spin fill-brand"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                    />
                                                </svg>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        "Update"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewCategory;
