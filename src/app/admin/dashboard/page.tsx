import { redirect } from "next/navigation";
import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | CPS",
};

export default async function DashboardPage() {
  // 🔐 Check Admin Authentication
  const isAdmin =
    process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  if (!isAdmin) {
    redirect("/admin/login");
  }

  // 🗄 Connect DB
  await dbConnect();

  // 📊 Fetch Job Alerts Count
  const totalAlerts = await JobAlert.countDocuments();

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">
        Admin Dashboard
      </h1>

      {/* STAT CARD — JOB ALERTS ONLY */}
      <div className="grid md:grid-cols-1 gap-10">
        <div className="p-8 bg-white shadow-md rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Job Alerts
          </h2>
          <p className="text-4xl font-bold text-blue-700 mt-3">
            {totalAlerts}
          </p>
        </div>
      </div>

      {/* QUICK LINK — JOB ALERTS ONLY */}
      <div className="mt-16 grid md:grid-cols-1 gap-8">
        <a
          href="/admin/job-alerts"
          className="block bg-blue-700 text-white p-6 rounded-xl text-lg font-semibold text-center hover:bg-blue-800 transition"
        >
          Manage Job Alerts
        </a>
      </div>
    </div>
  );
}
