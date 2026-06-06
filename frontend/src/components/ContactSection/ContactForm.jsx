import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "../../utils/api";
import { Input, TextArea, Button } from "../Common";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const temp = {};
    if (!form.name.trim()) temp.name = "Name is required";
    if (!form.email.trim()) temp.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) temp.email = "Please enter a valid email";
    if (!form.message.trim()) temp.message = "Message cannot be empty";
    else if (form.message.trim().length < 10) temp.message = "Message must be at least 10 characters";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

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
      setErrors({ submit: err.response?.data?.message || "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">Contact</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
            Send me a message
          </h2>
          <p className="mt-4 text-text-secondary text-sm sm:text-base">
            I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

<motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-40px" }}
           className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm"
         >
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              error={errors.name}
              required
            />

            <Input
              type="email"
              label="Email Address"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={errors.email}
              required
            />

            <TextArea
              label="Message"
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              error={errors.message}
              required
            />

            {errors.submit && (
              <p className="text-sm text-error font-mono">{errors.submit}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              isLoading={loading}
            >
              Send Message
            </Button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-success font-mono"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
