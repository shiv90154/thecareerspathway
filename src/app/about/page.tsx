import SeoHead from "@/components/SeoHead";

export const metadata = {
  title: "About Us | The Career Pathway (CPS) Shimla",
  description:
    "Learn about The Career Pathway (CPS), the leading HPAS & HAS coaching institute in Shimla offering study material, job alerts, and e-learning.",
  alternates: {
    canonical: "https://www.thecareerspathway.com/site/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us | The Career Pathway (CPS) Shimla"
        description="The Career Pathway (CPS) is Himachal Pradesh’s most trusted coaching institute for HPAS, HAS, Allied Services & government exams."
        canonical="https://www.thecareerspathway.com/site/about"
      />

      <div className="max-w-7xl mx-auto px-5 py-16">

        {/* ABOUT HEADING */}
        <h1 className="text-4xl font-bold text-blue-700 mb-8">About Us</h1>

        {/* ABOUT TEXT */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The Career Pathway (CPS) is a premier coaching institute located in
          Shimla, Himachal Pradesh. Our core mission is to guide aspirants
          through competitive examinations like HPAS, HAS, Allied Services,
          Banking, HP Police, and central government exams.
          <br /><br />
          With a team of experienced mentors, high-quality study material,
          student-friendly learning methods, and personalized support, CPS has
          become one of the most trusted institutes for civil exam preparation.
        </p>

        {/* MISSION */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          To empower students with the right knowledge, strategy, and confidence,
          enabling them to crack competitive exams and achieve government
          positions in Himachal Pradesh and across India.
        </p>

        {/* VISION */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          To become the most result-oriented and student-focused coaching
          institute by offering updated study resources, expert mentorship, and
          technologically advanced e-learning systems.
        </p>

        {/* TEAM SECTION (OPTIONAL) */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
            Why Choose CPS?
          </h2>

          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Experienced & dedicated faculty.</li>
            <li>Updated study materials with Himachal-specific content.</li>
            <li>Daily Job Alerts & exam notifications.</li>
            <li>Modern e-learning platform & doubt sessions.</li>
            <li>Regular mock tests & performance tracking.</li>
            <li>Friendly environment & personalized guidance.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
