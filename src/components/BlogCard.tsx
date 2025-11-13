import Link from "next/link";

export default function BlogCard({ title, desc, slug, date }: any) {
  return (
    <Link
      href={`/site/job-alerts/${slug}`}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
    >
      <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>

      {date && (
        <p className="text-sm text-gray-600 mb-2">
          {new Date(date).toLocaleDateString()}
        </p>
      )}

      <p className="text-gray-700">{desc}</p>
    </Link>
  );
}
