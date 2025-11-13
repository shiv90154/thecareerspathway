"use client";

import { useState } from "react";
import SeoHead from "@/components/SeoHead";
import Link from "next/link";
import { 
  HiCheckCircle, 
  HiAcademicCap, 
  HiUserGroup, 
  HiShieldCheck,
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiClock,
  HiBookOpen,
  HiVideoCamera
} from "react-icons/hi2";


const courses = [
  {
    id: "hpas",
    name: "HPAS Foundation Course 2025",
    duration: "12 Months",
    features: ["200+ Video Lectures", "50+ Mock Tests", "Personal Mentoring", "Study Material"],
    price: "₹25,999",
    originalPrice: "₹35,999",
    popular: true
  },
  {
    id: "has",
    name: "HAS Prelims Crash Course",
    duration: "6 Months", 
    features: ["120+ Video Lectures", "30+ Mock Tests", "Current Affairs", "Test Series"],
    price: "₹12,999",
    originalPrice: "₹18,999",
    popular: false
  },
  {
    id: "allied",
    name: "Allied Services Preparation",
    duration: "8 Months",
    features: ["150+ Video Lectures", "40+ Mock Tests", "HP GK Focus", "Interview Guidance"],
    price: "₹18,999",
    originalPrice: "₹24,999",
    popular: false
  }
];

const benefits = [
  {
    icon: HiCheckCircle,
    title: "Instant Confirmation",
    description: "Get immediate enrollment confirmation with course access details"
  },
  {
    icon: HiClock,
    title: "Quick Process", 
    description: "Complete enrollment in under 5 minutes from anywhere in Himachal"
  },
  {
    icon: HiBookOpen,
    title: "Study Material Access",
    description: "Instant access to digital study materials and resources"
  },
  {
    icon: HiVideoCamera,
    title: "Online Classes",
    description: "Start attending online classes immediately after enrollment"
  }
];

export default function EEnrollmentForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      course: form.get("course"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMsg("🎉 Enrollment submitted successfully! Our team will contact you within 24 hours.");
        e.target.reset();
        setSelectedCourse("");
      } else {
        setMsg("❌ Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      setMsg("❌ Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <SeoHead
        title="Online Enrollment for HPAS HAS Coaching | The Career Pathway (CPS) Shimla"
        description="Enroll online for HPAS, HAS, Allied Services coaching at CPS Shimla. Easy admission process, instant confirmation, and expert guidance for government exams."
        canonical="https://www.thecareerspathway.com/e-enrollment"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Online <span className="text-yellow-300">Enrollment</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join The Career Pathway (CPS) for premier HPAS, HAS, and government exam coaching. 
                Enroll online in just 5 minutes and start your journey towards a successful career.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#enrollment-form"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
                >
                  Enroll Now
                </a>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose CPS?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <HiAcademicCap className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">Expert HPAS/HAS Faculty</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiUserGroup className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">1000+ Successful Students</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiShieldCheck className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">Proven Results & Selections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiBookOpen className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">Comprehensive Study Material</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE SELECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-blue-600">Course</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our range of comprehensive coaching programs designed for HPAS, HAS, and government exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  course.popular ? 'border-yellow-400 border-2' : 'border-gray-100'
                } overflow-hidden group cursor-pointer`}
                onClick={() => setSelectedCourse(course.id)}
              >
                {course.popular && (
                  <div className="bg-yellow-400 text-blue-900 px-4 py-3 text-center font-bold">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {course.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <HiCheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course.id)}
                    className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      selectedCourse === course.id
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {selectedCourse === course.id ? 'Selected ✓' : 'Select Course'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT FORM */}
      <section id="enrollment-form" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Enrollment Form
                </h2>
                <p className="text-gray-600">
                  Fill this form to join CPS. Our team will contact you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    name="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your full name"
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Course *
                  </label>
                  <select 
                    name="course" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    required
                  >
                    <option value="">Choose a course</option>
                    <option value="HPAS Foundation Course 2025">HPAS Foundation Course 2025</option>
                    <option value="HAS Prelims Crash Course">HAS Prelims Crash Course</option>
                    <option value="Allied Services Preparation">Allied Services Preparation</option>
                    <option value="HP Police Coaching">HP Police Coaching</option>
                    <option value="Banking Exams">Banking Exams Preparation</option>
                    <option value="Other Government Exams">Other Government Exams</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Any specific requirements or questions..."
                    rows={4}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Enrollment...
                    </span>
                  ) : (
                    "Submit Enrollment Application"
                  )}
                </button>

                {msg && (
                  <div className={`p-4 rounded-xl text-center font-semibold text-lg ${
                    msg.includes("❌") 
                      ? "bg-red-100 text-red-700 border border-red-200" 
                      : "bg-green-100 text-green-700 border border-green-200"
                  }`}>
                    {msg}
                  </div>
                )}
              </form>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Benefits</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Need Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <HiPhone className="w-5 h-5 text-yellow-300" />
                    <span>Call Admissions: Available 9 AM - 7 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiEnvelope className="w-5 h-5 text-yellow-300" />
                    <span>Email: admissions@thecareerspathway.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiMapPin className="w-5 h-5 text-yellow-300" />
                    <span>Visit: CPS Center, Shimla</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Contact Us Directly
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSURANCE SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <HiShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Enrollment is <span className="text-blue-600">100% Secure</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We protect your personal information and ensure a smooth enrollment process. 
            Your data is safe with us and will only be used for admission purposes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Data Protection</h4>
              <p className="text-gray-600 text-sm">Your information is encrypted and secure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">No Spam</h4>
              <p className="text-gray-600 text-sm">We respect your privacy and communication preferences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiCheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Instant Support</h4>
              <p className="text-gray-600 text-sm">Quick resolution of any enrollment issues</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
