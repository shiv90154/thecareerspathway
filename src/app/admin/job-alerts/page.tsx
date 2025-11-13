import Link from "next/link";

async function getAlerts() {
  const res = await fetch("http://localhost:3000/api/admin/job-alerts", {
    cache: "no-store",
  });

  if (!res.ok) return { alerts: [] };

  return res.json();
}

export default async function JobAlertsPage() {
  const { alerts } = await getAlerts();

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold mb-6">Job Alerts</h1>

      <Link
        href="/admin/job-alerts/create"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add New Alert
      </Link>

      <div className="mt-8 space-y-4">
        {alerts && alerts.length > 0 ? (
          alerts.map((alert: any) => (
            <div
              key={alert._id}
              className="p-5 border rounded flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{alert.title}</h2>
                <p className="text-gray-600">{alert.slug}</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href={`/admin/job-alerts/edit/${alert._id}`}
                  className="text-blue-700"
                >
                  Edit
                </Link>

                <Link
                  href={`/admin/job-alerts/delete/${alert._id}`}
                  className="text-red-600"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No job alerts found.</p>
        )}
      </div>
    </div>
  );
}
