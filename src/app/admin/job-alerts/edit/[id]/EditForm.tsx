"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ alert }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleEdit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    await fetch(`/api/admin/job-alerts/${alert._id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: form.get("title"),
        slug: form.get("slug"),
        description: form.get("description"),
        date: form.get("date"),
      }),
    });

    router.push("/admin/job-alerts");
  };

  return (
    <form onSubmit={handleEdit} className="space-y-4">
      <input
        name="title"
        className="input"
        defaultValue={alert.title}
        required
      />

      <input
        name="slug"
        className="input"
        defaultValue={alert.slug}
        required
      />

      <textarea
        name="description"
        className="input"
        rows={4}
        defaultValue={alert.description}
        required
      />

      <input
        type="date"
        name="date"
        className="input"
        defaultValue={alert.date?.substring(0, 10)}
        required
      />

      <button className="px-4 py-2 bg-blue-700 text-white rounded">
        {loading ? "Updating..." : "Update Job Alert"}
      </button>
    </form>
  );
}
