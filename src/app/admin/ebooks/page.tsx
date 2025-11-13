import dbConnect from "@/lib/db";
import Ebook from "@/models/Ebook";

export const dynamic = "force-dynamic";

export default async function AdminEbooksPage() {
  await dbConnect();
  const ebooks = await Ebook.find().sort({ createdAt: -1 });

  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Manage E-Books</h1>

      <a
        href="/admin/ebooks/create"
        className="bg-blue-700 text-white px-4 py-2 rounded-lg inline-block mb-6"
      >
        + Add New E-Book
      </a>

      <div className="grid gap-6">
        {ebooks.length === 0 ? (
          <p>No E-books found.</p>
        ) : (
          ebooks.map((ebook: any) => (
            <div
              key={ebook._id}
              className="bg-white p-5 shadow-md rounded-lg border"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {ebook.title}
              </h2>
              <p className="text-gray-700 mb-3">{ebook.description}</p>

              <div className="flex gap-4">
                <a
                  href={`/admin/ebooks/edit/${ebook._id}`}
                  className="text-blue-600 font-semibold"
                >
                  Edit
                </a>
                <a
                  href={`/admin/ebooks/delete/${ebook._id}`}
                  className="text-red-600 font-semibold"
                >
                  Delete
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
