import contact_img from "../../assets/contact.jpg";
import icon from "../../assets/Icon.png";
import vector_png from "../../assets/Vector.png";
import validator from "validator";
import { useState } from "react";
import { submitContact } from "../../api/api";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e, func) => {
    func(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name) {
      toast.error("Name is required");
      setIsSubmitting(false);

      return;
    }
    if (!number) {
      toast.error("Number is required");
      setIsSubmitting(false);

      return;
    }
    if (number.length < 10) {
      toast.error("Phone number should be length of 10");
      setIsSubmitting(false);

      return;
    }
    if (!validator.isEmail(email)) {
      toast.error("Invalid email address");
      setIsSubmitting(false);

      return;
    }
    if (!location) {
      toast.error("Location is required");
      setIsSubmitting(false);

      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Valid email is required");
      setIsSubmitting(false);

      return;
    }
    const contactData = { name, email, phone: number, location, message };
    console.log(contactData);
    try {
      await submitContact(contactData);
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setNumber("");
      setLocation("");
      setMessage("");
    } catch (error) {
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-20">
        <div className="img-left">
          <img src={contact_img} alt="" className="contact-img" />
        </div>
        <div className="contact-right">
          <div className="bg-[#F8F7F0] rounded-full w-44 flex items-center justify-center h-8 gap-2">
            <img src={icon} alt="" />
            <h3 className=" signika-medium-500 text-[14px] font-normal capitalize">
              Get to contact us
            </h3>
          </div>
          <div className="">
            <h3 className=" signika-medium-500 text-[45px] font-normal ">
              Have any Questions? <br />
              Get in Touch!
            </h3>
          </div>
          <div className="contact-form my-3">
            <form action="" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="bg-neutral-secondary-medium rounded-md border border-[#404A3D33] text-heading text-sm rounded-base focus: outline-0 focus: block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="Your Name"
                    onChange={(e) => handleChange(e, setName)}
                  />
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    id="phone"
                    className="bg-neutral-secondary-medium rounded-md border border-[#404A3D33] text-heading text-sm rounded-base focus:outline-0 focus: block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="Phone Number"
                    onChange={(e) => handleChange(e, setNumber)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="bg-neutral-secondary-medium rounded-md border border-[#404A3D33] text-heading text-sm rounded-base focus: focus:outline-0 block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="Email Address"
                    onChange={(e) => handleChange(e, setEmail)}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    className="bg-neutral-secondary-medium rounded-md border border-[#404A3D33] text-heading text-sm rounded-base focus:outline-0 block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="Location"
                    onChange={(e) => handleChange(e, setLocation)}
                  />
                </div>
              </div>

              <textarea
                id="message"
                rows="4"
                className="bg-neutral-secondary-medium border rounded-md border-[#404A3D33] text-heading text-sm rounded-base focus:outline-0 block w-full p-3.5 shadow-xs placeholder:text-body"
                placeholder="Your message"
                onChange={(e) => handleChange(e, setMessage)}
              ></textarea>
              <div>
                <button className="bg-[#5B8C51] p-3 px-5 text-white text-xs rounded-full my-4 flex items-center gap-2 cursor-pointer">
                  {isSubmitting ? "Sending..." : "Send Message"}

                  <img
                    src={vector_png}
                    alt="contact-vector-icon"
                    className="h-3 w-3"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
