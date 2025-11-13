import SeoHead from "@/components/SeoHead";

export const metadata = {
  title: "Management | The Career Pathway (CPS) Shimla",
  description:
    "Meet the faculty and management team of The Career Pathway (CPS), Shimla's leading HPAS & HAS coaching institute.",
  alternates: {
    canonical: "https://www.thecareerspathway.com/site/management",
  },
};

export default function ManagementPage() {
  const faculty = [
    {
      name: "Director CPS",
      role: "Founder & Chief Mentor",
      image: "/images/faculty/default1.png",
    },
    {
      name: "Senior Faculty",
      role: "HPAS / HAS Subject Expert",
      image: "/images/faculty/default2.png",
    },
    {
      name: "Mentor CPS",
      role: "General Studies & HP GK Expert",
      image: "/images/faculty/default3.png",
    },
  ];

  return (
    <>
      <SeoHead
        title="Management | The Career Pathway (CPS) Shimla"
        description="Meet CPS Management & Faculty Team who guide students for HPAS, HAS & Government Exams in Himachal Pradesh."
        canonical="https://www.thecareerspathway.com/site/management"
      />

      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-blue-700 mb-10">
          Our Management & Faculty
        </h1>

        {/* INTRO TEXT */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          The Career Pathway (CPS) has a highly experienced and dedicated faculty team
          that guides students throughout their HPAS, HAS, Allied Services, and
          government exam preparation journey. Our mentors come with years of expertise,
          deep subject knowledge, and strong mentoring abilities.
        </p>

        {/* FACULTY GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {faculty.map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
              </div>

              <h2 className="text-xl font-semibold mt-4 text-blue-700">{f.name}</h2>
              <p className="text-gray-600">{f.role}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-16 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Commitment
          </h2>
          <p className="text-gray-700 text-lg">
            At CPS, we ensure that each student receives personalized guidance,
            structured preparation, and exam-oriented strategy to excel in HPAS,
            HAS & other competitive exams.
          </p>
        </div>
      </div>
    </>
  );
}
