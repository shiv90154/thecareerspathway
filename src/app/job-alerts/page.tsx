import SeoHead from "@/components/SeoHead";

// ⭐ Correct Public API URL (no admin here)
async function getAlerts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job-alerts`, {
    cache: "no-store",
  });

  // If API failed
  if (!res.ok) {
    return { alerts: [] };
  }

  return res.json();
}

export default async function JobAlertsPage() {
  const { alerts } = await getAlerts();

  return (
    <>
      <SeoHead
        title="Job Alerts | HP Govt Jobs | HPAS & HAS Notifications | CPS"
        description="Check the latest HP government job alerts, HPAS updates, HAS notifications and govt exam vacancies from CPS Shimla."
        canonical="https://www.thecareerspathway.com/site/job-alerts"
      />

      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Job Alerts
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-700 mb-10 max-w-3xl">
          Stay updated with the latest HP Government job notifications, 
          HPAS exams, HAS updates, Allied Services alerts and other job 
          opportunities in Himachal Pradesh.
        </p>

        {/* LIST */}
        <div className="grid md:grid-cols-3 gap-8">
          {alerts && alerts.length > 0 ? (
            alerts.map((alert: any) => (
              <a
                href={`/site/job-alerts/${alert.slug}`}
                key={alert._id}
                className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {alert.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3">
                  {alert.createdAt
                    ? new Date(alert.createdAt).toLocaleDateString()
                    : "Recently Added"}
                </p>

                <p className="text-gray-700">
                  {alert.description.length > 120
                    ? alert.description.slice(0, 120) + "..."
                    : alert.description}
                </p>
              </a>
            ))
          ) : (
            <p className="text-gray-600">No job alerts available.</p>
          )}
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-16 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Why Follow CPS Job Alerts?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Daily HP Govt job notifications</li>
            <li>HPAS / HAS exam alerts</li>
            <li>Allied Services vacancies</li>
            <li>Direct official notification links</li>
            <li>Trusted by thousands of students</li>
          </ul>
        </div>
      </div>
    </>
  );
}
