import { getTotals } from "../../api/api";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
const AdminContent = () => {
  const [totals, setTotals] = useState({});
  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const data = await getTotals();
        setTotals(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTotals();
  }, []);
  return (
    <>
      <div className="admin-content bg-gray-50 w-full min-h-180  rounded-md shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 m-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-gray-500 font-medium text-sm">
              Total Galleries
            </h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totals.gallery_count || 0}{" "}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-gray-500 font-medium text-sm">
              Total Contacts
            </h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totals.contact_count || 0}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-gray-500 font-medium text-sm">
              Total Testimonials
            </h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {totals.testimonial_count || 0}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default AdminContent;
