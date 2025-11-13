import SeoHead from "@/components/SeoHead";

async function getAlert(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/job-alerts/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function generateMetadata({ params }: any) {
  const { alert } = await getAlert(params.slug);

  return {
    title: `${alert?.title} | Job Alert | CPS`,
    description: alert?.description,
    alternates: {
      canonical: `https://www.thecareerspathway.com/site/job-alerts/${params.slug}`,
    },
  };
}

export default async function JobDetails({ params }: any) {
  const { slug } = params;
  const { alert } = await getAlert(slug);

  if (!alert) {
    return (
      <div className="max-w-7xl mx-auto p-10 text-center text-gray-600">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <p>The job alert you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  return (
    <>
      <SeoHead
        title={`${alert.title} | Job Alert | CPS`}
        description={alert.description}
        canonical={`https://www.thecareerspathway.com/site/job-alerts/${slug}`}
      />

      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* JOB TITLE */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4">{alert.title}</h1>

        {/* DATE */}
        <p className="text-gray-600 mb-6">
          Published on:{" "}
          {new Date(alert.date).toLocaleDateString("en-IN")}
        </p>

        {/* SHORT DESCRIPTION */}
        <p className="text-lg text-gray-700 mb-10">{alert.description}</p>

        {/* CONTENT BOX */}
        <div className="bg-white shadow-lg rounded-xl p-8 leading-relaxed text-lg text-gray-800">
          <div dangerouslySetInnerHTML={{ __html: alert.content }} />
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            About CPS Job Alerts
          </h2>
          <p className="text-gray-700 text-lg">
            CPS provides verified and latest HP Government job updates, HPAS &
            HAS notifications, Allied Services alerts, and exam information to 
            help students stay updated and prepared.
          </p>
        </div>
      </div>
    </>
  );
}
