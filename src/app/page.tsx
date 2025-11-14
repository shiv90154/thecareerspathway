import { Metadata } from "next";
import Image from "next/image";
import SeoHead from "@/components/SeoHead";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";
import Link from "next/link";
import { 
  HiAcademicCap, 
  HiBookOpen,
  HiCloudArrowDown,
  HiBellAlert, 
  HiCheckBadge, 
  HiUserGroup,
  HiChevronLeft,
  HiChevronRight
} from "react-icons/hi2";


export const metadata: Metadata = {
  title: "Best HPAS & HAS Coaching in Shimla | The Career Pathway (CPS)",
  description: "Top-rated HPAS, HAS & Government Exam Coaching Institute in Shimla. Get study material, job alerts, e-learning, e-books, and expert guidance for HPAS 2025 preparation.",
  keywords: "HPAS coaching, HAS coaching, Shimla coaching, government exams, HPAS 2025, HAS 2025, study material, job alerts, CPS Shimla",
  alternates: {
    canonical: "https://www.thecareerspathway.com/",
  },
  openGraph: {
    title: "Best HPAS & HAS Coaching in Shimla | The Career Pathway (CPS)",
    description: "Top-rated HPAS, HAS & Government Exam Coaching Institute in Shimla. Get study material, job alerts, e-learning and expert guidance.",
    url: "https://www.thecareerspathway.com/",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Career Pathway - HPAS HAS Coaching Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best HPAS & HAS Coaching in Shimla | The Career Pathway",
    description: "Top-rated HPAS, HAS & Government Exam Coaching Institute in Shimla.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const features = [
  {
    icon: HiAcademicCap,
    title: "Expert Faculty",
    description: "Learn from experienced educators and subject matter experts",
    color: "blue"
  },
  {
    icon: HiBookOpen,
    title: "Study Material",
    description: "Comprehensive and updated study resources for all exams",
    color: "green"
  },
  {
    icon: HiCloudArrowDown,
    title: "E-Learning",
    description: "Access courses anytime, anywhere with our digital platform",
    color: "purple"
  },
  {
    icon: HiBellAlert,
    title: "Job Alerts",
    description: "Never miss important government job notifications",
    color: "red"
  },
  {
    icon: HiCheckBadge,
    title: "Results Driven",
    description: "Proven track record of success in competitive exams",
    color: "orange"
  },
  {
    icon: HiUserGroup,
    title: "Personal Guidance",
    description: "Individual attention and mentorship for every student",
    color: "indigo"
  }
];

const stats = [
  { number: "500+", label: "Students Enrolled" },
  { number: "50+", label: "Selections" },
  { number: "1000+", label: "Study Materials" },
  { number: "24/7", label: "Support" }
];

// Banner slider images data
const bannerImages = [
  {
    src: "/images/banner/banner1.jpeg",
    alt: "HPAS 2025 Coaching - The Career Pathway",
    title: "HPAS 2025 Foundation Course",
    subtitle: "Start your journey to become an HPAS officer",
    ctaText: "Enroll Now",
    ctaLink: "/hpas-foundation"
  },
  {
    src: "/images/banner/banner2.jpeg",
    alt: "HAS Exam Preparation - CPS Shimla",
    title: "HAS Preliminary 2025",
    subtitle: "Comprehensive preparation for HAS prelims",
    ctaText: "Learn More",
    ctaLink: "/has-prelims"
  },
  {
    src: "/images/banner/banner3.jpeg",
    alt: "Study Material - The Career Pathway",
    title: "Updated Study Material",
    subtitle: "Get the latest books and resources",
    ctaText: "Browse Materials",
    ctaLink: "/study-material"
  },
  {
    src: "/images/banner/banner4.jpeg",
    alt: "E-Learning Platform - CPS",
    title: "Digital Learning Platform",
    subtitle: "Learn anytime, anywhere with our e-learning",
    ctaText: "Explore Courses",
    ctaLink: "/e-learning"
  },
  {
    src: "/images/banner/banner5.jpeg",
    alt: "Success Stories - The Career Pathway",
    title: "Our Success Stories",
    subtitle: "Join our community of successful aspirants",
    ctaText: "View Results",
    ctaLink: "/results"
  },
  {
    src: "/images/banner/banner6.jpeg",
    alt: "Free Workshop - CPS Shimla",
    title: "Free Demo Classes",
    subtitle: "Experience our teaching methodology",
    ctaText: "Register Now",
    ctaLink: "/demo-class"
  }
];

// Banner Slider Component
function BannerSlider() {
  return (
    <section className="relative py-16 bg-linear-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-yellow-300">Programs</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our comprehensive coaching programs designed for your success
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-8">
            {bannerImages.map((banner, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-2/3 lg:w-1/2 snap-center"
              >
                <div className="aspect-w-16 aspect-h-9 h-64 md:h-80 relative">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {banner.title}
                    </h3>
                    <p className="text-blue-100 text-lg mb-4">
                      {banner.subtitle}
                    </p>
                    <Link
                      href={banner.ctaLink}
                      className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                    >
                      {banner.ctaText}
                      <HiChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {bannerImages.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-white/50 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* Navigation arrows for larger screens */}
        <div className="hidden lg:flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 -mt-8 px-4">
          <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300">
            <HiChevronLeft className="w-6 h-6" />
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300">
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Best HPAS & HAS Coaching in Shimla | The Career Pathway (CPS)"
        description="Top-rated HPAS, HAS & Government Exam Coaching Institute in Shimla. Get study material, job alerts, e-learning, e-books, and expert guidance for HPAS 2025 preparation."
        canonical="https://www.thecareerspathway.com/"
      />

      {/* HERO SECTION */}
      <Hero />

      {/* BANNER SLIDER SECTION */}
      <BannerSlider />

      {/* FEATURES SECTION */}
      <section className="relative py-20 bg-linear-to-br from-blue-50 to-gray-50">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">The Career Pathway</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to crack HPAS, HAS, and other government exams with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses: Record<string, string> = {
                blue: "text-blue-600 bg-blue-100",
                green: "text-green-600 bg-green-100",
                purple: "text-purple-600 bg-purple-100",
                red: "text-red-600 bg-red-100",
                orange: "text-orange-600 bg-orange-100",
                indigo: "text-indigo-600 bg-indigo-100"
              };

              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                About CPS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Premier Coaching for <span className="text-blue-600">HPAS & HAS</span> Exams
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>The Career Pathway (CPS)</strong> is Himachal Pradesh&apos;s most trusted coaching institute 
                for <strong>HPAS, HAS, Allied Services & other government examinations</strong>. With a legacy 
                of excellence, we empower aspirants to achieve their dream careers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our comprehensive approach includes <strong>updated study material, daily job alerts, 
                modern e&apos;learning modules, expert faculty guidance, and complete exam preparation</strong> 
                strategies tailored for success.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/e-enrollment" 
                  className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-blue-300 transition-all duration-300 transform hover:scale-105"
                >
                  Enroll Now
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-linear-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-blue-100 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">Upcoming Batches</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center">
                      <HiCheckBadge className="w-5 h-5 mr-3 text-green-300" />
                      HPAS Foundation 2025 - Starting Soon
                    </li>
                    <li className="flex items-center">
                      <HiCheckBadge className="w-5 h-5 mr-3 text-green-300" />
                      HAS Prelims Crash Course - Ongoing
                    </li>
                    <li className="flex items-center">
                      <HiCheckBadge className="w-5 h-5 mr-3 text-green-300" />
                      Allied Services - New Batch Opening
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST JOB ALERTS */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-blue-600">Job Alerts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest government job notifications and exam dates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <JobCard
              title="HPAS Notification 2025"
              slug="hpas-notification-2025"
              date="January 2025"
              excerpt="Himachal Pradesh Administrative Services 2025 official notification with complete details"
              featured={true}
            />
            <JobCard
              title="HAS Preliminary 2025"
              slug="has-prelims-2025"
              date="February 2025"
              excerpt="Himachal Administrative Services Preliminary examination schedule and syllabus"
            />
            <JobCard
              title="Allied Services Exam"
              slug="allied-services-2025"
              date="March 2025"
              excerpt="Various allied services positions notification for 2025 recruitment cycle"
            />
          </div>

          <div className="text-center">
            <Link 
              href="/job-alerts" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              View All Job Alerts
              <HiBellAlert className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-yellow-300">Government Career</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of successful aspirants who achieved their dreams with The Career Pathway. 
            Get expert guidance, comprehensive study material, and personalized mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/study-material" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Browse Study Material
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}