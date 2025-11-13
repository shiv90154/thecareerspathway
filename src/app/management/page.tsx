import SeoHead from "@/components/SeoHead";
import Image from "next/image";
import Link from "next/link";
import { 
  HiAcademicCap, 
  HiUserGroup, 
  HiChartBar, 
  HiLightBulb, 
  HiStar,
  HiShieldCheck,
  HiBookOpen,
  HiPhone,
  HiEnvelope
} from "react-icons/hi2";

export const metadata = {
  title: "Management & Faculty Team | The Career Pathway (CPS) Shimla - HPAS HAS Coaching",
  description: "Meet our expert faculty & management team at CPS Shimla. Experienced HPAS, HAS subject experts, retired administrators & dedicated mentors guiding your success.",
  keywords: "CPS faculty, HPAS coaching faculty, HAS mentors, management team, Shimla coaching experts, civil services teachers",
  alternates: {
    canonical: "https://www.thecareerspathway.com/management",
  },
  openGraph: {
    title: "Management & Faculty Team | The Career Pathway (CPS) Shimla",
    description: "Meet our expert faculty & management team at CPS Shimla. Experienced HPAS, HAS subject experts guiding your success.",
    url: "https://www.thecareerspathway.com/management",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/management-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CPS Management & Faculty Team - HPAS HAS Coaching Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const faculty = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Founder & Chief Mentor",
    image: "/images/faculty/director.jpg",
    experience: "15+ Years",
    specialization: "HPAS Strategy & Mentoring",
    qualifications: "PhD in Public Administration, Former Administrative Officer",
    achievements: ["100+ HPAS Selections", "Expert in Himachal Administration", "Author of HPAS Guidebook"],
    contact: "director@thecareerspathway.com"
  },
  {
    name: "Prof. Anjali Verma",
    role: "Senior Faculty - HAS/HPAS",
    image: "/images/faculty/senior-faculty.jpg",
    experience: "12+ Years",
    specialization: "General Studies & Essay Writing",
    qualifications: "Masters in Political Science, UGC NET Qualified",
    achievements: ["Expert in Current Affairs", "Specialized in HP GK", "Interview Preparation Specialist"],
    contact: "anjali@thecareerspathway.com"
  },
  {
    name: "Mr. Vikram Thakur",
    role: "HP GK & History Expert",
    image: "/images/faculty/hp-gk-expert.jpg",
    experience: "10+ Years",
    specialization: "Himachal Pradesh Specific Subjects",
    qualifications: "Masters in History, HPAS Consultant",
    achievements: ["HP GK Book Author", "Cultural Expert", "Documentation Specialist"],
    contact: "vikram@thecareerspathway.com"
  },
];

const managementStats = [
  { icon: HiAcademicCap, number: "50+", label: "Years Combined Experience" },
  { icon: HiUserGroup, number: "1000+", label: "Students Mentored" },
  { icon: HiChartBar, number: "100+", label: "Successful Selections" },
  { icon: HiStar, number: "4.9/5", label: "Student Satisfaction" },
];

const coreValues = [
  {
    icon: HiLightBulb,
    title: "Expert Guidance",
    description: "Learn from the best in the industry with proven track records"
  },
  {
    icon: HiShieldCheck,
    title: "Quality Education",
    description: "Comprehensive and updated curriculum for all exams"
  },
  {
    icon: HiBookOpen,
    title: "Personal Mentoring",
    description: "Individual attention and customized study plans"
  },
  {
    icon: HiStar,
    title: "Result Orientation",
    description: "Focus on outcomes and success in competitive exams"
  }
];

export default function ManagementPage() {
  return (
    <>
      <SeoHead
        title="Management & Faculty Team | The Career Pathway (CPS) Shimla - HPAS HAS Coaching"
        description="Meet our expert faculty & management team at CPS Shimla. Experienced HPAS, HAS subject experts, retired administrators & dedicated mentors guiding your success."
        canonical="https://www.thecareerspathway.com/management"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Meet Our <span className="text-yellow-300">Expert Team</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn from Himachal Pradesh's most experienced faculty team dedicated to 
            your success in HPAS, HAS, and government examinations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/e-enrollment" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Program
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {managementStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACULTY GRID */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Expert Faculty</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who bring years of experience and proven success in guiding aspirants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Faculty Image */}
                <div className="relative h-80 bg-linear-to-br from-blue-500 to-blue-700 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-200 font-medium">{member.role}</p>
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {member.experience}
                  </div>
                </div>

                {/* Faculty Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Specialization</h4>
                    <p className="text-blue-600 font-medium">{member.specialization}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualifications</h4>
                    <p className="text-gray-600">{member.qualifications}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <HiStar className="w-4 h-4 text-yellow-500 mr-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Contact:</span>
                      <a 
                        href={`mailto:${member.contact}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        <HiEnvelope className="w-4 h-4 mr-1" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our teaching methodology and student approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <HiShieldCheck className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Commitment to <span className="text-yellow-300">Your Success</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            At The Career Pathway, we ensure that every student receives personalized guidance, 
            structured preparation strategies, and comprehensive support to excel in HPAS, HAS, 
            and other competitive examinations. Our faculty is committed to transforming aspirations 
            into achievements through dedicated mentoring and proven methodologies.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">What Sets Us Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <HiStar className="w-5 h-5 text-yellow-300 mr-3 shrink-0" />
                <span>Experienced Faculty with Administrative Background</span>
              </div>
              <div className="flex items-center">
                <HiStar className="w-5 h-5 text-yellow-300 mr-3 shrink-0" />
                <span>Personalized Mentoring for Each Student</span>
              </div>
              <div className="flex items-center">
                <HiStar className="w-5 h-5 text-yellow-300 mr-3 shrink-0" />
                <span>Updated & Relevant Study Material</span>
              </div>
              <div className="flex items-center">
                <HiStar className="w-5 h-5 text-yellow-300 mr-3 shrink-0" />
                <span>Regular Performance Tracking & Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Learn from the <span className="text-blue-600">Best?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join CPS today and get mentored by experienced faculty who have helped hundreds 
            of students achieve their dream government careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/e-enrollment" 
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch with Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <HiPhone className="w-6 h-6 text-blue-600" />
              <span>Institute Helpline</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <HiEnvelope className="w-6 h-6 text-blue-600" />
              <span>info@thecareerspathway.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <HiUserGroup className="w-6 h-6 text-blue-600" />
              <span>Faculty Consultation</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
