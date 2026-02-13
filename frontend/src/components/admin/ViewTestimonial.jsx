import React, { useEffect, useState } from 'react'
import { getTestimonials, updateTestimonial } from '../../api/api'
import { toast } from 'react-toastify';

const ViewTestimonial = ({ setFlag }) => {
    const [testimonials, setTestimonials] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const data = await getTestimonials();
            setTestimonials(data);
        }
        fetchTestimonials();
    }, []);

    const handleEditClick = (testimonial) => {
        setEditData(testimonial);
        setIsEditing(true);
    };

    const handleUpdate = async () => {
        setLoading(true);
        try {
            const updated = await updateTestimonial(editData._id, editData);
            setTestimonials((prev) =>
                prev.map((testimonial) => (testimonial._id === updated._id ? updated : testimonial)),
            );
            toast.success("Testimonial Updated Successfully");
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
        <div className='tesimonials-view-section'>
            <div>
                <button
                    onClick={() => setFlag(true)}
                    className="m-3 underline cursor-pointer"
                >
                    Add Testimonial
                </button>
                <div
                    className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                    <h1 className='font-bold p-2'>Testimonials</h1>
                    <div className="overflow-auto max-h-96">
                        {testimonials ? <>
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
                                                Message
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                                Rating
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70"></p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testimonials.map((testimonial, index) => (
                                        <tr className="even:bg-blue-gray-50/50" key={index}>
                                            <td className="p-4">
                                                <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                    {testimonial.name}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                    {testimonial.message}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                    {testimonial.rating}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    className="text-blue-600 hover:underline"
                                                    onClick={() => handleEditClick(testimonial)}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </> : "No Testimonials found"}
                    </div>
                    {isEditing && editData && (
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg w-96">
                                <h2 className="text-lg font-semibold mb-4">Edit Gallery</h2>

                                <input
                                    type="text"
                                    name="title"
                                    value={editData.name}
                                    onChange={(e) =>
                                        setEditData({ ...editData, name: e.target.value })
                                    }
                                    className="w-full border p-2 mb-3 rounded"
                                    placeholder="Title"
                                />

                                <textarea
                                    name="description"
                                    value={editData.message}
                                    onChange={(e) =>
                                        setEditData({ ...editData, message: e.target.value })
                                    }
                                    className="w-full border p-2 mb-3 rounded"
                                    placeholder="Description"
                                />

                                 <input
                                    type="text"
                                    name="title"
                                    value={editData.rating}
                                    onChange={(e) =>
                                        setEditData({ ...editData, rating: e.target.value })
                                    }
                                    className="w-full border p-2 mb-3 rounded"
                                    placeholder="Title"
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
        </div>
    )
}

export default ViewTestimonial
