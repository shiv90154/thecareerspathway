import dbConnect from "@/lib/db";
import StudyMaterial from "@/models/StudyMaterial";

export default async function AdminStudyMaterialPage() {
  await dbConnect();
  const materials = await StudyMaterial.find().sort({ createdAt: -1 });

  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Manage Study Material
      </h1>

      <a
        href="/admin/study-material/create"
        className="bg-blue-700 text-white px-4 py-2 rounded-lg inline-block mb-6"
      >
        + Add Study Material
      </a>

      <div className="grid gap-6">
        {materials.length === 0 ? (
          <p>No study material found.</p>
        ) : (
          materials.map((mat: any) => (
            <div
              key={mat._id}
              className="bg-white p-5 shadow-md rounded-lg border"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {mat.title}
              </h2>
              <p className="text-gray-700 mb-3">{mat.description}</p>

              <div className="flex gap-4">
                <a
                  href={`/admin/study-material/edit/${mat._id}`}
                  className="text-blue-600 font-semibold"
                >
                  Edit
                </a>
                <a
                  href={`/admin/study-material/delete/${mat._id}`}
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
