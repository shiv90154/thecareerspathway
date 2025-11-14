import Link from "next/link";
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin, 
  HiAcademicCap,
  HiBookOpen,
  HiUserGroup,
  HiShieldCheck,
  HiArrowRight
} from "react-icons/hi2";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2342] text-[#F5F5F5]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#FFD600] rounded-xl flex items-center justify-center">
                <HiAcademicCap className="w-6 h-6 text-[#0A2342]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Career Pathway</h3>
                <p className="text-[#FFD600] text-sm">Education Hub</p>
              </div>
            </div>
            <p className="text-[#F5F5F5] mb-6 leading-relaxed">
              Premier coaching institute for HPAS, HAS, and government exams in Himachal Pradesh. 
              Empowering aspirants with expert guidance and comprehensive study resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#1E3A5F] rounded-xl flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A2342] transition-all duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1E3A5F] rounded-xl flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A2342] transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1E3A5F] rounded-xl flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A2342] transition-all duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1E3A5F] rounded-xl flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A2342] transition-all duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <HiArrowRight className="w-5 h-5 text-[#FFD600] mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Management", path: "/management" },
                { name: "Study Material", path: "/study-material" },
                { name: "E-Learning", path: "/e-learning" },
                { name: "E-Books", path: "/ebooks" },
                { name: "Job Alerts", path: "/job-alerts" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-[#F5F5F5] hover:text-[#FFD600] transition-colors duration-300 flex items-center group"
                  >
                    <HiArrowRight className="w-3 h-3 mr-2 text-[#FFD600] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <HiBookOpen className="w-5 h-5 text-[#FFD600] mr-2" />
              Our Courses
            </h3>
            <ul className="space-y-3">
              {[
                "HPAS Foundation 2025",
                "HAS Preliminary Course",
                "HP GK Special Batch",
                "Allied Services Prep",
                "Current Affairs Program",
                "Mock Test Series",
                "Interview Guidance",
                "Essay Writing Course"
              ].map((course) => (
                <li key={course}>
                  <span className="text-[#F5F5F5] hover:text-[#FFD600] transition-colors duration-300 cursor-pointer flex items-center group">
                    <HiArrowRight className="w-3 h-3 mr-2 text-[#FFD600] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <HiUserGroup className="w-5 h-5 text-[#FFD600] mr-2" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiMapPin className="w-5 h-5 text-[#FFD600] mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium">Our Location</p>
                  <p className="text-[#F5F5F5] text-sm">Shimla, Himachal Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <HiPhone className="w-5 h-5 text-[#FFD600] mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone Number</p>
                  <p className="text-[#F5F5F5] text-sm">+91 98000 00000</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <HiEnvelope className="w-5 h-5 text-[#FFD600] mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium">Email Address</p>
                  <p className="text-[#F5F5F5] text-sm">info@thecareerspathway.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HiShieldCheck className="w-5 h-5 text-[#FFD600] mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium">Support Hours</p>
                  <p className="text-[#F5F5F5] text-sm">Mon-Sat: 9AM - 7PM</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/919800000000"
                className="inline-flex items-center bg-[#25D366] text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors duration-300 mt-4"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <HiAcademicCap className="w-8 h-8 text-[#FFD600] mb-2" />
              <h4 className="text-white font-semibold">Expert Faculty</h4>
              <p className="text-[#F5F5F5] text-sm">Experienced HPAS/HAS mentors</p>
            </div>
            <div className="flex flex-col items-center">
              <HiBookOpen className="w-8 h-8 text-[#FFD600] mb-2" />
              <h4 className="text-white font-semibold">Study Material</h4>
              <p className="text-[#F5F5F5] text-sm">Updated & comprehensive</p>
            </div>
            <div className="flex flex-col items-center">
              <HiShieldCheck className="w-8 h-8 text-[#FFD600] mb-2" />
              <h4 className="text-white font-semibold">Proven Results</h4>
              <p className="text-[#F5F5F5] text-sm">100+ successful selections</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E3A5F] bg-[#0A1E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#F5F5F5] text-sm">
              © {currentYear} The Career Pathway (CPS). All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-[#F5F5F5] hover:text-[#FFD600] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#F5F5F5] hover:text-[#FFD600] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-[#F5F5F5] hover:text-[#FFD600] transition-colors duration-300">
                Refund Policy
              </Link>
              <Link href="/sitemap" className="text-[#F5F5F5] hover:text-[#FFD600] transition-colors duration-300">
                Sitemap
              </Link>
            </div>

            <div className="text-[#F5F5F5] text-sm flex items-center">
              <span className="w-2 h-2 bg-[#D62828] rounded-full mr-2 animate-pulse"></span>
              Made with ❤️ for aspirants
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}