"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleContact = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const form = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
    });

    if (res.ok) setMsg("Message sent successfully!");
    else setMsg("Something went wrong!");

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        For admissions, HPAS/HAS coaching, study material or job alerts—contact our team.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleContact}
          className="bg-white shadow-md p-8 rounded-xl grid gap-6"
        >
          <input name="name" className="input" placeholder="Your Name" required />
          <input name="email" type="email" className="input" placeholder="Your Email" required />
          <input name="phone" className="input" placeholder="Phone Number" required />

          <textarea
            name="message"
            className="input"
            rows={4}
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {msg && <p className="text-green-600 font-semibold text-lg">{msg}</p>}
        </form>

        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            The Career Pathway (CPS)
          </h2>

          <p className="text-gray-700 mb-6">
            Shimla, Himachal Pradesh  
            <br />
            <strong>Phone:</strong> +91 98000 00000  
            <br />
            <strong>Email:</strong> info@thecareerspathway.com
          </p>

          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map will appear here</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          Working Hours
        </h2>
        <p className="text-gray-700 text-lg">
          Monday – Saturday: 9 AM – 7 PM  
          <br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
}
