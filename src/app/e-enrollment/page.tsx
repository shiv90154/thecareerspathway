"use client";

import { useState } from "react";

export default function EEnrollmentForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      course: form.get("course"),
      message: form.get("message"),
    };

    const res = await fetch("/api/enroll", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setMsg("Enrollment submitted successfully!");
    } else {
      setMsg("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">E-Enrollment</h1>

      <p className="text-lg text-gray-700 mb-10 max-w-3xl leading-relaxed">
        Fill this online enrollment form to join HPAS, HAS, Allied Services
        and other government exam preparation programs at The Career Pathway (CPS).
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-3xl grid gap-6"
      >
        <input name="name" className="input" placeholder="Full Name" required />

        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email Address"
          required
        />

        <input
          name="phone"
          className="input"
          placeholder="Phone Number"
          required
        />

        <select name="course" className="input" required>
          <option value="">Select Course</option>
          <option value="HPAS">HPAS Coaching</option>
          <option value="HAS">HAS Coaching</option>
          <option value="Allied Services">Allied Services</option>
          <option value="HP Police">HP Police Coaching</option>
        </select>

        <textarea
          name="message"
          className="input"
          placeholder="Message (Optional)"
          rows={4}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {loading ? "Submitting..." : "Submit Enrollment"}
        </button>

        {msg && <p className="text-green-600 font-semibold text-lg">{msg}</p>}
      </form>

      <div className="mt-16 bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          Why Enroll Online?
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Easy enrollment from anywhere in Himachal</li>
          <li>Quick callback from CPS team</li>
          <li>Direct admission confirmation</li>
          <li>Online classes + study material access</li>
          <li>No need to visit the center initially</li>
        </ul>
      </div>
    </div>
  );
}
