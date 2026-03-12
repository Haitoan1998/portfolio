"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactDetails = [
  {
    label: "Phone Number",
    icon: "/images/phone.png",
    value: "0815221160",
  },
  {
    label: "Email",
    icon: "/images/mail.png",
    value: "toan53011@gmail.com",
  },
  {
    label: "Address",
    icon: "/images/add.png",
    value: "Minh Khai, Hai Ba Trung, Ha Noi",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="w-full mx-auto mt-5"
    >
      <div className="bg-[#1a1a20] p-6 sm:p-8 md:p-12 rounded-lg sm:rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT - FORM */}

        <div className="flex flex-col gap-8 flex-1">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight">
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
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:outline-none focus:border-[#b3ff00] focus:ring-1 focus:ring-[#b3ff00] transition font-mono"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone"
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:outline-none focus:border-[#b3ff00] focus:ring-1 focus:ring-[#b3ff00] transition font-mono"
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
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:outline-none focus:border-[#b3ff00] focus:ring-1 focus:ring-[#b3ff00] transition font-mono"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:outline-none focus:border-[#b3ff00] focus:ring-1 focus:ring-[#b3ff00] transition font-mono"
              />

            </div>

            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Message"
              className="w-full bg-[#2a2a30] text-zinc-300 placeholder:text-zinc-600 border border-zinc-700 p-4 rounded-md focus:outline-none focus:border-[#b3ff00] focus:ring-1 focus:ring-[#b3ff00] transition font-mono resize-none"
            />

            {/* BUTTON */}

            <motion.button
              disabled={loading}
              type="submit"
              className="group w-fit flex items-center gap-3 bg-[#b3ff00] text-black font-extrabold px-6 py-3 rounded-md hover:shadow-[0_0_30px_rgba(179,255,0,0.5)] transition duration-300 font-mono disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* STATUS MESSAGE */}

            {status === "success" && (
              <p className="text-green-400 font-mono text-sm">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 font-mono text-sm">
                Failed to send message. Please try again.
              </p>
            )}

          </form>
        </div>

        {/* RIGHT - CONTACT INFO */}

        <div className="flex flex-col gap-6 md:mt-16 w-full max-w-[380px] self-center md:self-auto">

          {contactDetails.map((detail, index) => (

            <motion.div
              key={detail.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4"
            >

              <div className="p-4 rounded dark:bg-zinc-800 bg-[#f8f8f8] flex items-center justify-center text-emerald-400 dark:border-zinc-700 border-[#c0dcbc] border">
                <img src={detail.icon} alt="" width={20} />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="text-sm text-zinc-500 font-mono">
                  {detail.label}
                </p>
                <p className="text-base text-white font-semibold font-mono break-words hover:text-[#b3ff00] transition">
                  {detail.value}
                </p>
              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;