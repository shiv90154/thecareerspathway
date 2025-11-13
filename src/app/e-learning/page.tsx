import SeoHead from "@/components/SeoHead";

export const metadata = {
  title: "E-Learning | Online Classes for HPAS & HAS | The Career Pathway (CPS)",
  description:
    "Access high-quality online video lectures, digital notes, and mock tests for HPAS and HAS preparation through CPS E-Learning.",
  alternates: {
    canonical: "https://www.thecareerspathway.com/site/e-learning",
  },
};

export default function ELearningPage() {
  return (
    <>
      <SeoHead
        title="E-Learning | Online Classes for HPAS & HAS | CPS Shimla"
        description="CPS E-Learning provides video lectures, digital notes, mock tests, and online learning platform for HPAS and HAS aspirants."
        canonical="https://www.thecareerspathway.com/site/e-learning"
      />

      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6">E-Learning</h1>

        {/* INTRO */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl">
          The Career Pathway (CPS) offers an advanced E-Learning platform for HPAS, 
          HAS and other competitive exam aspirants. Get access to premium online 
          video lectures, digital notes, mock tests, and regular updates — all from 
          the comfort of your home.
        </p>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Video Lectures",
              desc: "Topic-wise HD video lectures for HPAS & HAS syllabus."
            },
            {
              title: "Digital Notes",
              desc: "Well-structured study material available for download."
            },
            {
              title: "Mock Tests",
              desc: "Online test series based on latest exam pattern."
            }
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{f.title}</h2>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* VIDEO SECTION */}
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Demo Video Lecture
        </h2>

        <div className="aspect-video bg-gray-300 rounded-xl flex items-center justify-center">
          <p className="text-gray-600">Demo Lecture Will Be Displayed Here</p>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Why Choose CPS E-Learning?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>HD Video Lectures by Expert Faculty</li>
            <li>Updated Digital Notes</li>
            <li>Topic-wise Practice Questions</li>
            <li>Regular Doubt Sessions</li>
            <li>Mock Tests with Performance Analysis</li>
            <li>Access Anytime, Anywhere on Mobile & Desktop</li>
          </ul>
        </div>
      </div>
    </>
  );
}
