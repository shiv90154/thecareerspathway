"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAlert() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const res = await fetch("/api/admin/job-alerts/create", {
      method: "POST",
      body: JSON.stringify({
        title: form.get("title"),
        slug: form.get("slug"),
        description: form.get("description"),
        date: form.get("date"),
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/admin/job-alerts");
    } else {
      setMsg("Error creating job alert!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold mb-6">Add Job Alert</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" className="input" placeholder="Title" required />

        <input name="slug" className="input" placeholder="Slug" required />

        <textarea
          name="description"
          className="input"
          placeholder="Description"
          rows={4}
          required
        />

        <input
          type="date"
          name="date"
          className="input"
          placeholder="Date"
          required
        />

        <button
          className="px-4 py-2 bg-blue-700 text-white rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Job Alert"}
        </button>

        {msg && <p className="text-red-600">{msg}</p>}
      </form>
    </div>
  );
}
