import { Metadata } from "next";
import SeoHead from "@/components/SeoHead";
import Link from "next/link";
import { 
  HiPlay, 
  HiBookOpen, 
  HiAcademicCap, 
  HiCloudArrowDown,
  HiChartBar,
  HiClock,
  HiDevicePhoneMobile,
  HiUserGroup,
  HiQuestionMarkCircle,
  HiStar,
  HiShieldCheck,
  HiVideoCamera,
  HiDocumentText,
  HiClipboardDocumentList
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "HPAS HAS Online Classes & E-Learning Platform | The Career Pathway (CPS)",
  description: "Join CPS E-Learning for HD video lectures, live classes, mock tests, and digital study material for HPAS, HAS, and government exams. Learn anytime, anywhere.",
  keywords: "HPAS online classes, HAS video lectures, e-learning platform, online coaching, CPS digital classes, HPAS mock tests, HAS study material",
  alternates: {
    canonical: "https://www.thecareerspathway.com/e-learning",
  },
  openGraph: {
    title: "HPAS HAS Online Classes & E-Learning Platform | The Career Pathway (CPS)",
    description: "Join CPS E-Learning for HD video lectures, live classes, mock tests, and digital study material for HPAS, HAS exams.",
    url: "https://www.thecareerspathway.com/e-learning",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/e-learning-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CPS E-Learning Platform - HPAS HAS Online Classes',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const features = [
  {
    icon: HiVideoCamera,
    title: "HD Video Lectures",
    description: "Crystal clear topic-wise video lectures by expert faculty for complete HPAS & HAS syllabus",
    color: "blue"
  },
  {
    icon: HiDocumentText,
    title: "Digital Study Material",
    description: "Comprehensive digital notes, PDFs, and presentations available for download",
    color: "green"
  },
  {
    icon: HiClipboardDocumentList,
    title: "Online Mock Tests",
    description: "Full-length mock tests with detailed analysis and performance tracking",
    color: "purple"
  },
  {
    icon: HiClock,
    title: "Live Doubt Sessions",
    description: "Regular live interactive sessions with faculty for doubt resolution",
    color: "orange"
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Mobile App Access",
    description: "Learn on the go with our mobile-friendly platform and dedicated app",
    color: "red"
  },
  {
    icon: HiChartBar,
    title: "Performance Analytics",
    description: "Detailed performance reports and improvement suggestions",
    color: "indigo"
  }
];

const courses = [
  {
    title: "HPAS Foundation Course 2025",
    description: "Complete preparation for HPAS 2025 with video lectures, study material, and test series",
    duration: "12 Months",
    lectures: "200+ Videos",
    tests: "50+ Mock Tests",
    level: "Beginner to Advanced",
    price: "₹15,999",
    originalPrice: "₹25,999",
    featured: true
  },
  {
    title: "HAS Prelims Crash Course",
    description: "Intensive preparation for HAS Preliminary examination with focus on current affairs",
    duration: "4 Months",
    lectures: "120+ Videos",
    tests: "30+ Mock Tests",
    level: "Intermediate",
    price: "₹8,999",
    originalPrice: "₹12,999"
  },
  {
    title: "HP GK Special Course",
    description: "Comprehensive Himachal Pradesh General Knowledge and current affairs preparation",
    duration: "3 Months",
    lectures: "80+ Videos",
    tests: "20+ Mock Tests",
    level: "All Levels",
    price: "₹4,999",
    originalPrice: "₹6,999"
  }
];

const stats = [
  { number: "5000+", label: "Video Lectures" },
  { number: "1000+", label: "Active Students" },
  { number: "200+", label: "Mock Tests" },
  { number: "24/7", label: "Access" }
];

export default function ELearningPage() {
  return (
    <>
      <SeoHead
        title="HPAS HAS Online Classes & E-Learning Platform | The Career Pathway (CPS)"
        description="Join CPS E-Learning for HD video lectures, live classes, mock tests, and digital study material for HPAS, HAS, and government exams. Learn anytime, anywhere."
        canonical="https://www.thecareerspathway.com/e-learning"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-[#0A2342] via-[#1E3A5F] to-[#0A2342] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                CPS <span className="text-[#FFD600]">E-Learning</span> Platform
              </h1>
              <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed">
                Premium online learning experience for HPAS, HAS, and government exam preparation. 
                HD video lectures, live classes, mock tests, and expert guidance - all in one platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/e-enrollment" 
                  className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <a 
                  href="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center"
                >
                  <HiPlay className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Platform Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-2">{stat.number}</div>
                      <div className="text-[#F5F5F5] font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4">
              Why Choose <span className="text-[#1E3A5F]">CPS E-Learning</span>?
            </h2>
            <p className="text-xl text-[#1E3A5F] max-w-3xl mx-auto">
              Experience the future of exam preparation with our comprehensive digital learning platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses: Record<string, string> = {
                blue: "text-[#0A2342] bg-[#1E3A5F]/10",
                green: "text-[#0A2342] bg-[#1E3A5F]/10",
                purple: "text-[#0A2342] bg-[#1E3A5F]/10",
                orange: "text-[#0A2342] bg-[#FFD600]/20",
                red: "text-[#D62828] bg-[#D62828]/10",
                indigo: "text-[#0A2342] bg-[#1E3A5F]/10"
              };

              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#F5F5F5] group"
                >
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-4">{feature.title}</h3>
                  <p className="text-[#1E3A5F] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEMO VIDEO SECTION */}
      <section id="demo" className="py-20 bg-linear-to-br from-[#F5F5F5] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4">
              Experience Our <span className="text-[#1E3A5F]">Teaching Quality</span>
            </h2>
            <p className="text-xl text-[#1E3A5F] max-w-3xl mx-auto">
              Watch a sample lecture to see the quality of our video content and teaching methodology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#F5F5F5]">
              <div className="aspect-video bg-linear-to-br from-[#0A2342] to-[#1E3A5F] flex items-center justify-center relative">
                <div className="text-center text-white">
                  <HiPlay className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Sample Lecture - HPAS Preparation</p>
                  <p className="text-[#F5F5F5] mt-2">Introduction to Himachal Administration</p>
                </div>
                {/* Play button overlay */}
                <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <HiPlay className="w-12 h-12 text-white" />
                  </div>
                </button>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0A2342] mb-4">What You'll Learn in This Lecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1E3A5F]">
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-[#D62828] mr-3 shrink-0" />
                    <span>Structure of Himachal Pradesh Administration</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-[#D62828] mr-3 shrink-0" />
                    <span>Role of HPAS Officers in State Governance</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-[#D62828] mr-3 shrink-0" />
                    <span>Current Administrative Challenges in HP</span>
                  </div>
                  <div className="flex items-center">
                    <HiStar className="w-5 h-5 text-[#D62828] mr-3 shrink-0" />
                    <span>Preparation Strategy for Administrative Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4">
              Featured <span className="text-[#1E3A5F]">Online Courses</span>
            </h2>
            <p className="text-xl text-[#1E3A5F] max-w-3xl mx-auto">
              Choose from our range of comprehensive online courses designed for HPAS, HAS, and government exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  course.featured ? 'border-[#FFD600] border-2' : 'border-[#F5F5F5]'
                } overflow-hidden group`}
              >
                {course.featured && (
                  <div className="bg-[#FFD600] text-[#0A2342] px-4 py-3 text-center font-bold">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-4 leading-tight">
                    {course.title}
                  </h3>
                  
                  <p className="text-[#1E3A5F] mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-[#1E3A5F]">
                      <HiClock className="w-5 h-5 text-[#0A2342] mr-3" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    <div className="flex items-center text-[#1E3A5F]">
                      <HiVideoCamera className="w-5 h-5 text-[#0A2342] mr-3" />
                      <span><strong>Lectures:</strong> {course.lectures}</span>
                    </div>
                    <div className="flex items-center text-[#1E3A5F]">
                      <HiClipboardDocumentList className="w-5 h-5 text-[#0A2342] mr-3" />
                      <span><strong>Tests:</strong> {course.tests}</span>
                    </div>
                    <div className="flex items-center text-[#1E3A5F]">
                      <HiAcademicCap className="w-5 h-5 text-[#0A2342] mr-3" />
                      <span><strong>Level:</strong> {course.level}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-[#0A2342]">{course.price}</span>
                      <span className="text-lg text-[#1E3A5F] line-through">{course.originalPrice}</span>
                      {course.featured && (
                        <span className="bg-[#D62828]/10 text-[#D62828] px-2 py-1 rounded-full text-sm font-semibold ml-auto">
                          Save ₹10,000
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href="/e-enrollment"
                    className="w-full bg-linear-to-r from-[#0A2342] to-[#1E3A5F] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                  >
                    Enroll Now
                    <HiPlay className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-linear-to-br from-[#F5F5F5] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#1E3A5F]/10 text-[#0A2342] rounded-full text-sm font-semibold mb-4">
                Learning Benefits
              </div>
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
                Learn <span className="text-[#1E3A5F]">Anytime, Anywhere</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-[#1E3A5F] leading-relaxed">
                  Our E-Learning platform is designed to provide maximum flexibility and convenience 
                  for your HPAS and HAS preparation. Access high-quality education from the comfort 
                  of your home or on the go.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <HiShieldCheck className="w-6 h-6 text-[#D62828] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A2342] mb-1">Self-Paced Learning</h4>
                      <p className="text-[#1E3A5F]">Learn at your own pace with lifetime access to course materials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiUserGroup className="w-6 h-6 text-[#D62828] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A2342] mb-1">Expert Faculty</h4>
                      <p className="text-[#1E3A5F]">Learn from experienced HPAS/HAS faculty and retired administrators</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiQuestionMarkCircle className="w-6 h-6 text-[#D62828] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A2342] mb-1">Doubt Support</h4>
                      <p className="text-[#1E3A5F]">24/7 doubt resolution through dedicated support system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#F5F5F5]">
              <h3 className="text-2xl font-bold text-[#0A2342] mb-6 text-center">Platform Features</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-[#1E3A5F]/10 rounded-xl">
                  <span className="font-semibold text-[#0A2342]">Video Quality</span>
                  <span className="bg-[#D62828]/10 text-[#D62828] px-3 py-1 rounded-full text-sm font-semibold">HD 1080p</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#1E3A5F]/10 rounded-xl">
                  <span className="font-semibold text-[#0A2342]">Device Support</span>
                  <span className="bg-[#D62828]/10 text-[#D62828] px-3 py-1 rounded-full text-sm font-semibold">Mobile & Desktop</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#1E3A5F]/10 rounded-xl">
                  <span className="font-semibold text-[#0A2342]">Download Access</span>
                  <span className="bg-[#D62828]/10 text-[#D62828] px-3 py-1 rounded-full text-sm font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#1E3A5F]/10 rounded-xl">
                  <span className="font-semibold text-[#0A2342]">Certificate</span>
                  <span className="bg-[#D62828]/10 text-[#D62828] px-3 py-1 rounded-full text-sm font-semibold">Provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-r from-[#0A2342] to-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-[#FFD600]">Online Learning</span> Journey Today!
          </h2>
          <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed">
            Join thousands of successful HPAS and HAS aspirants who have transformed 
            their preparation with CPS E-Learning platform. Get access to premium 
            content, expert guidance, and comprehensive test series.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/e-enrollment" 
              className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now - 7 Day Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#0A2342] mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: "How long do I get access to the course materials?",
                answer: "You get lifetime access to all course materials, including future updates."
              },
              {
                question: "Can I download videos for offline viewing?",
                answer: "Yes, most courses allow video downloads for offline access on our mobile app."
              },
              {
                question: "Is there any doubt support available?",
                answer: "Yes, we provide 24/7 doubt support through live sessions, chat, and email."
              },
              {
                question: "Do you provide certificate after course completion?",
                answer: "Yes, we provide course completion certificates that can be valuable for your career."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F5F5]">
                <h4 className="text-lg font-bold text-[#0A2342] mb-2">{faq.question}</h4>
                <p className="text-[#1E3A5F]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}