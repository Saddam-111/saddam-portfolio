import React, { useState } from "react";
import axios from "../../utils/api";
import AnimatedSection from "../Common/AnimatedSection";
import TerminalCard from "../Common/TerminalCard";
import TerminalInput from "../Common/TerminalInput";
import TerminalButton from "../Common/TerminalButton";

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
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4">
          <TerminalCard title="contact_form.sh">
            <h2 className="text-xl font-mono text-[#33ff00] uppercase tracking-wider mb-6" style={{ textShadow: "0 0 10px rgba(51,255,0,0.5)" }}>
              {"//"} SEND_MESSAGE
            </h2>
            
            <form onSubmit={handleSubmit}>
              <TerminalInput
                label="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="font-mono text-xs text-[#ff3333] block -mt-2 mb-3">
                  error: {errors.name}
                </span>
              )}

              <TerminalInput
                type="email"
                label="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="font-mono text-xs text-[#ff3333] block -mt-2 mb-3">
                  error: {errors.email}
                </span>
              )}

              <TerminalInput
                type="textarea"
                label="message"
                placeholder="Your message here..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="font-mono text-xs text-[#ff3333] block -mt-2 mb-3">
                  error: {errors.message}
                </span>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                <TerminalButton variant="primary" disabled={loading}>
                  {loading ? "SENDING..." : "SEND_MESSAGE"}
                </TerminalButton>

                {submitted && (
                  <span className="font-mono text-sm text-[#33ff00]">
                    ✓ message sent successfully
                  </span>
                )}
              </div>
            </form>

            <div className="mt-4 font-mono text-xs text-[#666666]">
              <span className="text-[#ffb000]">$</span> Press enter to submit
            </div>
          </TerminalCard>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactForm;
