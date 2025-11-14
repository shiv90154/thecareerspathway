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
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#FFFFFF] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0A2342] mb-4">
            Admin Dashboard
          </h1>
          <p className="text-[#1E3A5F] text-lg">
            Manage your Career Point Shimla content and job alerts
          </p>
        </div>

        {/* STATISTICS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* MAIN JOB ALERTS CARD */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#F5F5F5] p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1E3A5F]">
                Job Alerts
              </h3>
              <div className="w-10 h-10 bg-[#FFD600] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-[#0A2342] mb-2">
              {totalAlerts}
            </p>
            <p className="text-sm text-[#1E3A5F]">
              Active job alerts in the system
            </p>
          </div>

          {/* PLACEHOLDER FOR FUTURE STATS */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#F5F5F5] p-6 opacity-60">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1E3A5F]">
                Course Enrollments
              </h3>
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-[#1E3A5F] mb-2">
              0
            </p>
            <p className="text-sm text-[#1E3A5F]">
              Coming soon
            </p>
          </div>

          {/* ANOTHER PLACEHOLDER */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#F5F5F5] p-6 opacity-60">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1E3A5F]">
                Study Materials
              </h3>
              <div className="w-10 h-10 bg-[#D62828] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-[#1E3A5F] mb-2">
              0
            </p>
            <p className="text-sm text-[#1E3A5F]">
              Coming soon
            </p>
          </div>

        </div>

        {/* QUICK ACTIONS SECTION */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#F5F5F5] p-8">
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6 text-center">
            Quick Actions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* MAIN ACTION - MANAGE JOB ALERTS */}
            <a
              href="/admin/job-alerts"
              className="group bg-gradient-to-r from-[#0A2342] to-[#1E3A5F] text-white p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <svg className="w-6 h-6 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Manage Job Alerts</h3>
              <p className="text-sm opacity-90">Create, edit, and delete job alerts</p>
            </a>

            {/* SECONDARY ACTIONS */}
            <div className="bg-[#F5F5F5] p-6 rounded-xl text-center border-2 border-dashed border-[#1E3A5F] border-opacity-20">
              <div className="w-12 h-12 bg-[#1E3A5F] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Add New Feature</h3>
              <p className="text-sm text-[#1E3A5F] opacity-70">More tools coming soon</p>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-xl text-center border-2 border-dashed border-[#1E3A5F] border-opacity-20">
              <div className="w-12 h-12 bg-[#1E3A5F] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Add New Feature</h3>
              <p className="text-sm text-[#1E3A5F] opacity-70">More tools coming soon</p>
            </div>

          </div>
        </div>

        {/* RECENT ACTIVITY SECTION */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-[#F5F5F5] p-8">
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6">Recent Activity</h2>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#0A2342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[#1E3A5F]">Activity tracking will appear here as you manage content</p>
          </div>
        </div>

      </div>
    </div>
  );
}