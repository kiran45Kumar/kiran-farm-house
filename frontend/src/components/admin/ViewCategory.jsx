import { useEffect, useState } from 'react'
import { getCategories } from '../../api/api';
import { deleteCategory } from '../../api/api';
import {toast} from 'react-toastify';
const ViewCategory = ({ setFlag }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            // console.log(data);
            setCategories(data);
        }
        fetchCategories();
    }, []);

 const deleteCat = async (id) => {
    try {
        await deleteCategory(id);

        setCategories(prev =>
            prev.filter(category => category._id !== id)
        );

        toast.success("Category Deleted successfully");
    } catch (error) {
        toast.error(error.message);
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
            <div
                className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                <h1 className='font-bold p-2'>Categories</h1>
                <div className="overflow-auto max-h-96">
                    {categories ? <>
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
                                {categories.filter(category=>!category.isDeleted).map((category) => (
                                    <tr className="even:bg-blue-gray-50/50" key={category._id}>
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
                                            <a href="#" className="block font-sans text-sm font-medium text-blue-gray-900">
                                                Edit
                                            </a>
                                        </td>
                                        <td className="p-4" onClick={()=>deleteCat(category._id)}>
                                            <a href="#" className="block font-sans text-sm font-medium text-blue-gray-900">
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </> : "No contacts found"}
                </div>
            </div>
        </div>
    )
}

export default ViewCategory;
