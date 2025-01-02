import React, { useEffect, useState } from "react";
import { InquiryService } from "../services/api";
import Input from "./ui/input";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobType: "",
    contact: "",
    email: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Auto-dismiss success message after 3 seconds
  useEffect(() => {
    let timeoutId;
    if (success) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }

    // Cleanup timeout on component unmount or when success changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [success]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Combine first and last name for the API
      const payload = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        contact: formData.contact,
        email: formData.email,
        address: formData.address,
        message: formData.message,
        jobType: formData.jobType,
      };

      await InquiryService.createInquiry(payload);
      setSuccess(true);
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   contact: "",
      //   email: "",
      //   address: "",
      //   message: "",
      //   jobType: "",
      // });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex mt-16 mb-20 gap-16 items-start justify-center">
      {/* Left Side */}
      <div className="basis-[100%] h-full">
        <img
          className="rounded-xl w-full"
          src="/contact-us.avif"
          alt="Contact us illustration"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-2 basis-[100%] mt-4">
        <h1 className="font-bold text-3xl text-gray-800">Get In Touch</h1>
        <span className="relative bottom-2 my-1.5 font-semibold text-gray-700">
          Have questions or feedback? We're here to help!
        </span>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col basis-full">
              <label htmlFor="firstName">First Name</label>
              <Input
                placeholder="eg. John"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="lastName">Last Name</label>
              <Input
                placeholder="eg. Doe"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="contact">Contact</label>
              <Input
                type="number"
                placeholder="eg. 98xxxxxxx"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="email">Email Address</label>
              <Input
                type="email"
                placeholder="eg. johndoe@gmail.com"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="jobType">Business Type</label>

            <select
              name=""
              id="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="outline-none rounded p-2 bg-gray-200 border-b-2 border-gray-400"
            >
              <option value="healthcare">Healthcare</option>
              <option value="startup">Startup</option>
              <option value="education">Education</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <Input
              placeholder="eg. Kathmandu"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              rows={4}
              placeholder="Write your queries here."
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="outline-none rounded p-2 bg-gray-200 border-b-2 border-gray-400"
              required
            />
          </div>

          {/* buttons */}
          <div className="flex gap-3 items-center justify-end mt-4">
            <button
              type="submit"
              disabled={loading}
              className="gap-4 border-[2px] rounded-md font-semibold bg-blue border-blue px-6 py-[7px] text-white disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
