"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditJobAlertPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id; // Dynamic ID

  const [loading, setLoading] = useState(true);
  const [alertData, setAlertData] = useState({
    title: "",
    slug: "",
    description: "",
  });

  const [msg, setMsg] = useState("");

  // 1) Fetch existing data
  useEffect(() => {
    async function fetchAlert() {
      try {
        const res = await fetch(`/api/admin/job-alerts/${id}`);
        if (!res.ok) {
          setMsg("Failed to load alert");
          return;
        }

        const data = await res.json();
        setAlertData({
          title: data.alert.title,
          slug: data.alert.slug,
          description: data.alert.description,
        });

        setLoading(false);
      } catch (err) {
        setMsg("Error loading alert");
        setLoading(false);
      }
    }

    fetchAlert();
  }, [id]);

  // 2) Update Function
  async function handleUpdate(e: any) {
    e.preventDefault();
    setMsg("");

    const res = await fetch(`/api/admin/job-alerts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alertData),
    });

    if (res.ok) {
      setMsg("Updated Successfully!");
      setTimeout(() => {
        router.push("/admin/job-alerts");
      }, 800);
    } else {
      setMsg("Error updating alert!");
    }
  }

  if (loading) {
    return <p className="p-5 text-gray-600">Loading alert data...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold mb-6">Edit Job Alert</h1>

      {msg && <p className="mb-3 text-green-600 font-semibold">{msg}</p>}

      <form onSubmit={handleUpdate} className="space-y-6">

        <input
          className="input"
          placeholder="Job Title"
          value={alertData.title}
          onChange={(e) =>
            setAlertData({ ...alertData, title: e.target.value })
          }
          required
        />

        <input
          className="input"
          placeholder="Slug"
          value={alertData.slug}
          onChange={(e) =>
            setAlertData({ ...alertData, slug: e.target.value })
          }
          required
        />

        <textarea
          className="input"
          rows={5}
          placeholder="Description"
          value={alertData.description}
          onChange={(e) =>
            setAlertData({ ...alertData, description: e.target.value })
          }
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Update Alert
        </button>
      </form>
    </div>
  );
}
