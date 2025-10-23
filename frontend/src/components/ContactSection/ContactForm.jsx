import React, { useState } from "react";
import axios from "../../utils/api"; // make sure this is your axios setup
import AnimatedSection from "../Common/AnimatedSection";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const temp = {};
    if (!form.name) temp.name = "Name is required";
    if (!form.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email is invalid";
    if (!form.message) temp.message = "Message cannot be empty";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      setSubmitted(false);
      await axios.post("/messages", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection>
      <section className="py-20 max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 shadow-lg flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}

          <button
            type="submit"
            disabled={loading}
            className={`bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && <p className="text-green-500 mt-2">Message sent successfully!</p>}
        </form>
      </section>
    </AnimatedSection>
  );
};

export default ContactForm;
