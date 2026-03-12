"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// ... các icons khác

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Cảm ơn bạn! Tin nhắn đã được gửi thành công.");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    } catch (error) {
      alert("Lỗi kết nối server.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section id="Contact" className="w-full mx-auto py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="border-2 border-[#1fb6ff] bg-[#1a1a20] p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-2xl">
        <div className="flex flex-col gap-8 flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#b3ff00] font-mono uppercase">
            Lets connect
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                placeholder="Your name" 
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:border-[#b3ff00] transition font-mono outline-none" 
              />
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text" 
                placeholder="Phone" 
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:border-[#b3ff00] transition font-mono outline-none" 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:border-[#b3ff00] transition font-mono outline-none"
              />
              <input 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text" 
                placeholder="Subject" 
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:border-[#b3ff00] transition font-mono outline-none" 
              />
            </div>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              rows={6} 
              className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:border-[#b3ff00] transition font-mono resize-none outline-none"
            ></textarea>

            <motion.button 
              disabled={loading}
              type="submit" 
              className="group w-fit flex items-center gap-3 bg-[#b3ff00] text-black font-extrabold px-6 py-3 rounded-md hover:shadow-[0_0_30px_rgba(179,255,0,0.5)] transition duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;