import SeoHead from "@/components/SeoHead";

import { Metadata } from "next";
import Link from "next/link";
import { 
  HiAcademicCap, 
  HiBookOpen, 
  HiUserGroup, 
  HiChartBar, 
  HiCheckBadge, 
  HiLightBulb,
  HiHeart,
  HiMapPin,
  HiPhone,
  HiEnvelope
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "About CPS - Best HPAS & HAS Coaching Institute in Shimla | The Career Pathway",
  description: "Discover why The Career Pathway (CPS) is Himachal's top HPAS, HAS & government exam coaching. Expert faculty, study material, e-learning & proven results.",
  keywords: "HPAS coaching Shimla, HAS coaching, about CPS, civil services coaching, government exam preparation, Shimla coaching institute",
  alternates: {
    canonical: "https://www.thecareerspathway.com/about",
  },
  openGraph: {
    title: "About CPS - Best HPAS & HAS Coaching Institute in Shimla",
    description: "Discover why The Career Pathway (CPS) is Himachal's top HPAS, HAS & government exam coaching institute.",
    url: "https://www.thecareerspathway.com/about",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About The Career Pathway - HPAS HAS Coaching Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const features = [
  {
    icon: HiAcademicCap,
    title: "Expert Faculty",
    description: "Learn from experienced educators and retired civil servants with proven track records",
  },
  {
    icon: HiBookOpen,
    title: "Updated Study Material",
    description: "Comprehensive, Himachal-specific content regularly updated for current exam patterns",
  },
  {
    icon: HiChartBar,
    title: "Proven Results",
    description: "Consistent track record of selections in HPAS, HAS and other government exams",
  },
  {
    icon: HiUserGroup,
    title: "Personalized Guidance",
    description: "Individual attention and mentorship tailored to each student's learning needs",
  },
  {
    icon: HiLightBulb,
    title: "Smart Learning",
    description: "Combination of traditional teaching with modern e-learning technology",
  },
  {
    icon: HiHeart,
    title: "Student-First Approach",
    description: "Dedicated support system and friendly environment for optimal learning",
  }
];

const stats = [
  { number: "1000+", label: "Students Mentored" },
  { number: "100+", label: "Selections" },
  { number: "5+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" }
];

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About CPS - Best HPAS & HAS Coaching Institute in Shimla | The Career Pathway"
        description="Discover why The Career Pathway (CPS) is Himachal's top HPAS, HAS & government exam coaching. Expert faculty, study material, e-learning & proven results."
        canonical="https://www.thecareerspathway.com/about"
      />

      {/* HERO SECTION */}
      <section 
        aria-labelledby="about-heading"
        className="relative py-20 text-white overflow-hidden"
      >
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-linear-to-br from-[#0A2342]/90 via-[#1E3A5F]/90 to-[#0A2342]/90" 
          style={{
            backgroundImage: "url('/images/download.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          role="img"
          aria-label="Students attending career guidance session at The Career Pathway Institute"
        >
        </div>
        
        {/* Additional Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Content - Better Semantic Structure */}
            <header className="space-y-6">
              <h1 
                id="about-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                About <span className="text-[#FFD600]">The Career Pathway</span>
              </h1>
              
              <p className="text-xl text-[#F5F5F5] leading-relaxed">
                <strong>Himachal Pradesh Premier Coaching Institute</strong> for 
                <strong> HPAS, HAS, Allied Services</strong> and other government examinations. 
                Empowering aspirants since 2018 with comprehensive preparation strategies.
              </p>

              {/* Call to Action Buttons */}
              <nav className="flex flex-wrap gap-4" aria-label="Main navigation">
                <Link 
                  href="/e-enrollment" 
                  className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FFD600] focus:ring-opacity-50"
                  aria-label="Join Career Pathway Services today for government exam preparation"
                >
                  Join CPS Today
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                  aria-label="Contact The Career Pathway Institute"
                >
                  Contact Us
                </Link>
              </nav>
            </header>

            {/* Achievements Section */}
            <aside 
              className="relative"
              aria-labelledby="achievements-heading"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h2 
                  id="achievements-heading"
                  className="text-2xl font-bold mb-6 text-center"
                >
                  Our Achievements
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center"
                      itemScope
                      itemType="https://schema.org/QuantitativeValue"
                    >
                      <div 
                        className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-2"
                        itemProp="value"
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="text-[#F5F5F5] font-medium"
                        itemProp="name"
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#1E3A5F]/10 text-[#0A2342] rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
                Transforming Dreams into <span className="text-[#1E3A5F]">Government Careers</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-[#1E3A5F] leading-relaxed">
                  <strong>The Career Pathway (CPS)</strong> was established with a vision to create 
                  a premier coaching ecosystem in Himachal Pradesh for civil service aspirants. 
                  Located in the heart of Shimla, we have been guiding students towards successful 
                  careers in <strong>HPAS, HAS, Allied Services, Banking, HP Police, and central government exams</strong>.
                </p>
                <p className="text-lg text-[#1E3A5F] leading-relaxed">
                  Our institute stands out through its <strong>experienced mentor team, high-quality 
                  study material, student-friendly learning methodologies, and personalized support system</strong>. 
                  We believe in nurturing not just exam-takers, but future administrators and leaders.
                </p>
                <p className="text-lg text-[#1E3A5F] leading-relaxed">
                  At CPS, we combine traditional teaching excellence with modern technological tools 
                  to create a comprehensive learning environment that adapts to each students unique needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-[#0A2342] to-[#1E3A5F] rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <HiMapPin className="w-8 h-8 text-[#FFD600] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-[#F5F5F5]">Prime location in Shimla, Himachal Pradesh with excellent connectivity and learning facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiUserGroup className="w-8 h-8 text-[#FFD600] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                      <p className="text-[#F5F5F5]">Faculty comprising experienced educators, subject experts, and retired administrators</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiBookOpen className="w-8 h-8 text-[#FFD600] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Comprehensive Resources</h3>
                      <p className="text-[#F5F5F5]">Updated study material, e-learning platform, mock tests, and daily current affairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 bg-linear-to-br from-[#F5F5F5] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#F5F5F5]">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mb-6">
                <HiLightBulb className="w-8 h-8 text-[#0A2342]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our Mission</h2>
              <p className="text-lg text-[#1E3A5F] leading-relaxed mb-6">
                To empower aspirants with the right knowledge, strategic approach, and unwavering 
                confidence needed to crack competitive examinations and secure prestigious 
                government positions in Himachal Pradesh and across India.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <HiCheckBadge className="w-5 h-5 text-[#D62828] mr-3" />
                  <span className="text-[#1E3A5F]">Provide quality education accessible to all</span>
                </li>
                <li className="flex items-center">
                  <HiCheckBadge className="w-5 h-5 text-[#D62828] mr-3" />
                  <span className="text-[#1E3A5F]">Develop comprehensive exam strategies</span>
                </li>
                <li className="flex items-center">
                  <HiCheckBadge className="w-5 h-5 text-[#D62828] mr-3" />
                  <span className="text-[#1E3A5F]">Foster analytical and leadership skills</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#F5F5F5]">
              <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mb-6">
                <HiHeart className="w-8 h-8 text-[#0A2342]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Our Vision</h2>
              <p className="text-lg text-[#1E3A5F] leading-relaxed mb-6">
                To become the most result-oriented and student-focused coaching institute in 
                Northern India by offering updated study resources, expert mentorship, and 
                technologically advanced e-learning systems that transform aspirations into achievements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <HiCheckBadge className="w-5 h-5 text-[#D62828] mr-3" />
                  <span className="text-[#1E3A5F]">Set benchmarks in coaching excellence</span>
                </li>
                <li className="flex items-center">
                  <HiCheckBadge className="w-5 h-5 text-[#D62828] mr-3" />
                  <span className="text-[#1E3A5F]">Innovate continuously in teaching methodologies</span>
                </li>
                <li className="flex items-center">
                  <HiCheckBadge className="w-5 h-5 text-[#D62828] mr-3" />
                  <span className="text-[#1E3A5F]">Produce future leaders and administrators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CPS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4">
              Why Choose <span className="text-[#1E3A5F]">The Career Pathway</span>?
            </h2>
            <p className="text-xl text-[#1E3A5F] max-w-3xl mx-auto">
              Discover what makes us the preferred choice for HPAS, HAS, and government exam preparation in Himachal Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-linear-to-br from-white to-[#F5F5F5] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#F5F5F5] group"
                >
                  <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1E3A5F]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#0A2342]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-4">{feature.title}</h3>
                  <p className="text-[#1E3A5F] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-r from-[#0A2342] to-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-[#FFD600]">Success Journey</span>?
          </h2>
          <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed">
            Join the ranks of successful CPS students who have achieved their dream government careers. 
            Let us guide you towards your HPAS, HAS, or government exam success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/e-enrollment" 
              className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <HiMapPin className="w-12 h-12 text-[#0A2342] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0A2342] mb-2">Visit Us</h3>
              <p className="text-[#1E3A5F]">Shimla, Himachal Pradesh</p>
            </div>
            <div className="text-center">
              <HiPhone className="w-12 h-12 text-[#0A2342] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0A2342] mb-2">Call Us</h3>
              <p className="text-[#1E3A5F]">Available during institute hours</p>
            </div>
            <div className="text-center">
              <HiEnvelope className="w-12 h-12 text-[#0A2342] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0A2342] mb-2">Email Us</h3>
              <p className="text-[#1E3A5F]">Get detailed information</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}