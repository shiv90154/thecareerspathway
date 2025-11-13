"use client";

import { useState } from "react";

export default function CreateStudyMaterial() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const data = {
      title: e.target.title.value,
      subject: e.target.subject.value,
      description: e.target.description.value,
      pdfLink: e.target.pdfLink.value,
      slug: e.target.slug.value,
    };

    const res = await fetch("/api/study-material", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setMsg("Study Material Added Successfully!");
      e.target.reset();
    } else {
      setMsg("Error adding study material");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Add Study Material
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg grid gap-6"
      >
        <input name="title" className="input" placeholder="Title" required />
        <input name="subject" className="input" placeholder="Subject" required />
        <input name="slug" className="input" placeholder="Slug" required />
        <input name="pdfLink" className="input" placeholder="PDF URL" required />

        <textarea
          name="description"
          className="input"
          placeholder="Description"
          rows={4}
        ></textarea>

        <button
          disabled={loading}
          className="bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          {loading ? "Saving..." : "Add Study Material"}
        </button>

        {msg && <p className="text-green-600 font-semibold">{msg}</p>}
      </form>
    </div>
  );
}
