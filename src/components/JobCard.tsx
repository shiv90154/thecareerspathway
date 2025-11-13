import Link from "next/link";

export default function JobCard({
  title,
  slug,
  date,
  excerpt,
  featured,
}: {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/site/job-alerts/${slug}`}
      className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      {excerpt && <p className="text-gray-600 text-sm mb-2">{excerpt}</p>}
      <p className="text-gray-600 text-sm">Published: {date}</p>
    </Link>
  );
}
