import SeoHead from "@/components/SeoHead";

export const metadata = {
  title: "Study Material | HPAS & HAS Notes | The Career Pathway (CPS) Shimla",
  description:
    "Download high–quality HPAS, HAS, Allied Services, and Himachal GK study materials. Updated notes provided by CPS Shimla faculty.",
  alternates: {
    canonical: "https://www.thecareerspathway.com/site/study-material",
  },
};

export default function StudyMaterialPage() {
  const materials = [
    {
      title: "HPAS Prelims General Studies Notes",
      desc: "Complete General Studies notes coverage prepared by expert faculty.",
      pdf: "/pdf/hpas-gs.pdf",
    },
    {
      title: "Himachal GK Complete Notes",
      desc: "Updated HP GK notes with latest state updates and important topics.",
      pdf: "/pdf/hp-gk.pdf",
    },
    {
      title: "HAS Mains GS Notes",
      desc: "Detailed mains notes for HPAS/HAS written examination.",
      pdf: "/pdf/has-mains.pdf",
    },
    {
      title: "Indian Polity Notes",
      desc: "Laxmikanth-based hand-written polity notes.",
      pdf: "/pdf/polity.pdf",
    },
    {
      title: "Geography Notes",
      desc: "NCERT + advanced geography notes for HPAS/HAS.",
      pdf: "/pdf/geography.pdf",
    },
    {
      title: "Economy Notes",
      desc: "Indian economy notes for prelims + mains.",
      pdf: "/pdf/economy.pdf",
    },
  ];

  return (
    <>
      <SeoHead
        title="Study Material | HPAS & HAS Notes | The Career Pathway (CPS)"
        description="Download HPAS, HAS, Allied Services and Himachal GK study material. HPAS Notes | HAS Notes | GK Notes | CPS Shimla."
        canonical="https://www.thecareerspathway.com/site/study-material"
      />

      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* PAGE HEADING */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Study Material</h1>

        <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
          The Career Pathway (CPS) provides updated and exam-oriented study
          materials designed specifically for HPAS, HAS, Allied Services, and
          Himachal State Examinations. All notes are crafted by expert faculty
          with complete coverage of syllabus and latest updates.
        </p>

        {/* MATERIAL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((m, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {m.title}
              </h2>
              <p className="text-gray-600 mb-4">{m.desc}</p>

              <a
                href={m.pdf}
                target="_blank"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-16 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Why CPS Study Material?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every PDF is designed by subject experts with a focus on exam
            pattern, HPAS/HAS syllabus, Himachal-specific content, past year
            questions and conceptual clarity.
          </p>
        </div>
      </div>
    </>
  );
}
