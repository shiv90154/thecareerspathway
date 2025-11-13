import SeoHead from "@/components/SeoHead";
import Link from "next/link";
import { 
  HiBookOpen, 
  HiCloudArrowDown,   // FIXED
  HiAcademicCap, 
  HiDocumentText,
  HiMap,
  HiCurrencyRupee,
  HiGlobeAlt,         // FIXED
  HiCalendar,
  HiStar,
  HiShieldCheck,
  
} from "react-icons/hi2";

export const metadata = {
  title: "HPAS HAS Study Material & Notes | The Career Pathway (CPS) Shimla",
  description: "Download premium HPAS, HAS, Allied Services study material & Himachal GK notes. Expert-prepared PDFs, current affairs, and exam-focused content by CPS faculty.",
  keywords: "HPAS study material, HAS notes, Himachal GK PDF, civil services study material, HPAS prelims notes, HAS mains material, CPS Shimla notes",
  alternates: {
    canonical: "https://www.thecareerspathway.com/study-material",
  },
  openGraph: {
    title: "HPAS HAS Study Material & Notes | The Career Pathway (CPS) Shimla",
    description: "Download premium HPAS, HAS, Allied Services study material & Himachal GK notes. Expert-prepared PDFs and exam-focused content.",
    url: "https://www.thecareerspathway.com/study-material",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/study-material-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HPAS HAS Study Material - The Career Pathway CPS Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const materials = [
  {
    title: "HPAS Prelims General Studies Notes",
    desc: "Complete General Studies notes with current affairs, prepared by expert faculty for HPAS 2025 preparation.",
    pdf: "/pdf/hpas-gs.pdf",
    icon: HiBookOpen,
    pages: "250+ Pages",
    updated: "Jan 2025",
    level: "Prelims + Mains",
    featured: true
  },
  {
    title: "Himachal GK Complete Notes 2025",
    desc: "Updated HP GK notes with latest state updates, history, culture, and important topics for HAS/HPAS.",
    pdf: "/pdf/hp-gk.pdf",
    icon: HiMap,
    pages: "180+ Pages", 
    updated: "Dec 2024",
    level: "All Exams",
    featured: true
  },
  {
    title: "HAS Mains General Studies Notes",
    desc: "Detailed mains notes for HPAS/HAS written examination with answer writing practice.",
    pdf: "/pdf/has-mains.pdf",
    icon: HiDocumentText,
    pages: "300+ Pages",
    updated: "Jan 2025",
    level: "Mains"
  },
  {
    title: "Indian Polity & Constitution Notes",
    desc: "Laxmikanth-based comprehensive polity notes with amendments and current constitutional updates.",
    pdf: "/pdf/polity.pdf",
    icon: HiGlobeAlt,
    pages: "200+ Pages",
    updated: "Nov 2024",
    level: "Prelims + Mains"
  },
  {
    title: "Geography & Environment Notes",
    desc: "NCERT + advanced geography notes with maps, diagrams and environmental studies for HPAS/HAS.",
    pdf: "/pdf/geography.pdf",
    icon: HiAcademicCap,
    pages: "220+ Pages",
    updated: "Dec 2024", 
    level: "Prelims + Mains"
  },
  {
    title: "Indian Economy & Budget Notes",
    desc: "Complete Indian economy notes with latest budget, economic survey and current updates.",
    pdf: "/pdf/economy.pdf",
    icon: HiCurrencyRupee,
    pages: "190+ Pages",
    updated: "Feb 2025",
    level: "Prelims + Mains"
  },
  {
    title: "Current Affairs Compendium 2025",
    desc: "Monthly current affairs compilation with focus on Himachal Pradesh and national events.",
    pdf: "/pdf/current-affairs.pdf",
    icon: HiCalendar,
    pages: "150+ Pages",
    updated: "Monthly",
    level: "All Exams",
    featured: true
  },
  {
    title: "Essay & Answer Writing Guide",
    desc: "Comprehensive guide for essay writing and answer presentation for HAS/HPAS mains.",
    pdf: "/pdf/essay-writing.pdf",
    icon: HiDocumentText,
    pages: "120+ Pages",
    updated: "Jan 2025",
    level: "Mains"
  }
];

const features = [
  {
    icon: HiStar,
    title: "Expert Prepared",
    description: "All materials prepared by experienced HPAS/HAS faculty"
  },
  {
    icon: HiCalendar,
    title: "Regular Updates",
    description: "Content updated monthly with current affairs and syllabus changes"
  },
  {
    icon: HiShieldCheck,
    title: "Exam Focused",
    description: "Specifically designed for HPAS, HAS and Himachal exams"
  },
  {
    icon: HiBookOpen,
    title: "Comprehensive Coverage",
    description: "Complete syllabus coverage with previous year questions"
  }
];

export default function StudyMaterialPage() {
  return (
    <>
      <SeoHead
        title="HPAS HAS Study Material & Notes | The Career Pathway (CPS) Shimla"
        description="Download premium HPAS, HAS, Allied Services study material & Himachal GK notes. Expert-prepared PDFs, current affairs, and exam-focused content by CPS faculty."
        canonical="https://www.thecareerspathway.com/study-material"
        keywords="HPAS study material, HAS notes, Himachal GK PDF, civil services study material, HPAS prelims notes"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-yellow-300">Study Material</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Download expertly crafted HPAS, HAS, and Allied Services study materials. 
                Updated notes, Himachal GK, current affairs, and comprehensive PDFs for your exam preparation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#materials"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
                >
                  Download Materials
                </a>
                <Link 
                  href="/e-learning" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore E-Learning
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Material Highlights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Materials</span>
                    <span className="text-yellow-300 font-bold">20+ PDFs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Pages Count</span>
                    <span className="text-yellow-300 font-bold">2000+ Pages</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Last Updated</span>
                    <span className="text-yellow-300 font-bold">February 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">New Materials</span>
                    <span className="text-yellow-300 font-bold">Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">CPS Study Material</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our materials are specifically designed for HPAS, HAS, and Himachal Pradesh government exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDY MATERIALS GRID */}
      <section id="materials" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Download <span className="text-blue-600">Study Materials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, updated, and exam-focused study materials for HPAS, HAS, and government exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => {
              const Icon = material.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                    material.featured ? 'border-yellow-400 border-2' : 'border-gray-100'
                  } group overflow-hidden`}
                >
                  {material.featured && (
                    <div className="bg-yellow-400 text-blue-900 px-4 py-2 text-sm font-bold text-center">
                      ⭐ FEATURED MATERIAL
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      {material.featured && (
                        <HiStar className="w-6 h-6 text-yellow-400" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {material.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {material.desc}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <HiDocumentText className="w-4 h-4 mr-1" />
                        {material.pages}
                      </span>
                      <span className="flex items-center">
                        <HiCalendar className="w-4 h-4 mr-1" />
                        {material.updated}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        material.level === 'Prelims + Mains' 
                          ? 'bg-green-100 text-green-800'
                          : material.level === 'Mains'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {material.level}
                      </span>
                    </div>

                    <a
                      href={material.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                    >
                      <HiCloudArrowDown className="w-5 h-5 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Why Our Materials?
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designed for <span className="text-blue-600">HPAS & HAS Success</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every PDF and study material at <strong>The Career Pathway</strong> is meticulously 
                  designed by subject experts with a focus on the latest exam patterns, HPAS/HAS syllabus 
                  requirements, and Himachal-specific content.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our materials incorporate <strong>previous year questions, conceptual clarity, 
                  current affairs integration, and answer writing frameworks</strong> that have 
                  proven successful for hundreds of CPS students.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Updated Content</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Exam Focused</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">HP Specific Content</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Expert Reviewed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Material Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <HiBookOpen className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Comprehensive Coverage</h4>
                    <p className="text-blue-100 text-sm">Complete syllabus with no topic left behind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HiCalendar className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Monthly Updates</h4>
                    <p className="text-blue-100 text-sm">Regular content updates with current affairs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HiShieldCheck className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Quality Assured</h4>
                    <p className="text-blue-100 text-sm">Reviewed by experienced HPAS/HAS faculty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HiAcademicCap className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Exam Ready</h4>
                    <p className="text-blue-100 text-sm">Designed specifically for HP state exams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-yellow-300">Ace Your Exams</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Download our premium study materials today and take the first step towards 
            your dream government career. Join thousands of successful CPS students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/e-enrollment" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              Enroll for Full Access
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Free Samples
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Need Help with Study Materials?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our faculty is available to guide you on which materials to focus on based on your exam preparation stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <HiBookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Material Guidance</h4>
              <p className="text-gray-600">Get personalized study material recommendations</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <HiCloudArrowDown className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Download Support</h4>
              <p className="text-gray-600">Technical help with accessing and downloading materials</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
