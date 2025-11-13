"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin, 
  HiClock,
  HiAcademicCap,
  HiUserGroup,
  HiBookOpen,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiChatBubbleLeftRight
} from "react-icons/hi2";

// Define type for color keys
type ColorKey = 'blue' | 'green' | 'purple' | 'orange';

interface ContactMethod {
  icon: any;
  title: string;
  description: string;
  details: string;
  action: string;
  color: ColorKey;
}

const contactMethods: ContactMethod[] = [
  {
    icon: HiPhone,
    title: "Call Us",
    description: "Speak directly with our admissions team",
    details: "+91 98000 00000",
    action: "tel:+919800000000",
    color: "blue"
  },
  {
    icon: HiEnvelope,
    title: "Email Us",
    description: "Send us your queries and requirements",
    details: "info@thecareerspathway.com",
    action: "mailto:info@thecareerspathway.com",
    color: "green"
  },
  {
    icon: HiMapPin,
    title: "Visit Center",
    description: "Meet us at our Shimla coaching center",
    details: "Shimla, Himachal Pradesh",
    action: "#location",
    color: "purple"
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    details: "Available 9 AM - 7 PM",
    action: "#contact-form",
    color: "orange"
  }
];

const departments = [
  {
    icon: HiAcademicCap,
    title: "Admissions",
    description: "Course enrollment and fee structure",
    contact: "admissions@thecareerspathway.com"
  },
  {
    icon: HiBookOpen,
    title: "Study Material",
    description: "E-books and study resources support",
    contact: "study@thecareerspathway.com"
  },
  {
    icon: HiUserGroup,
    title: "Student Support",
    description: "Academic guidance and doubt resolution",
    contact: "support@thecareerspathway.com"
  },
  {
    icon: HiShieldCheck,
    title: "Career Counseling",
    description: "Free career guidance and exam strategy",
    contact: "counseling@thecareerspathway.com"
  }
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [activeTab, setActiveTab] = useState("general");

  const handleContact = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const form = new FormData(e.target);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          subject: form.get("subject"),
          message: form.get("message"),
          inquiryType: activeTab
        }),
      });

      if (res.ok) {
        setMsg("🎉 Thank you! Your message has been sent successfully. We'll contact you within 24 hours.");
        e.target.reset();
      } else {
        setMsg("❌ Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      setMsg("❌ Network error. Please check your connection and try again.");
    }

    setLoading(false);
  };

  const colorClasses: Record<ColorKey, string> = {
    blue: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
    green: "bg-green-50 border-green-200 text-green-700 hover:bg-green-100",
    purple: "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100",
    orange: "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100"
  };

  return (
    <>
      {/* HERO SECTION */}
            <section className="relative py-20 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get In <span className="text-yellow-300">Touch</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Ready to start your journey with CPS? Contact us for HPAS, HAS coaching admissions, 
                study material, or any support you need. We're here to help you succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact-form"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </a>
                <a 
                  href="tel:+919800000000"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 bg-linear-to-br from-blue-600 to-blue-700">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <HiClock className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">Response Time: Within 24 Hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiCheckCircle className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">Free Career Counseling Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiUserGroup className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">Expert Faculty Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiShieldCheck className="w-6 h-6 text-yellow-300" />
                    <span className="text-blue-100">100% Privacy Protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method to get in touch with The Career Pathway team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className={`border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group ${colorClasses[method.color]}`}
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-sm mb-3 opacity-80">{method.description}</p>
                  <p className="font-semibold text-lg">{method.details}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section id="contact-form" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {/* Inquiry Type Tabs */}
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-6">
                {["general", "admission", "support", "career"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab === 'general' && 'General Inquiry'}
                    {tab === 'admission' && 'Admission'}
                    {tab === 'support' && 'Support'}
                    {tab === 'career' && 'Career Guidance'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleContact} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Subject *
                  </label>
                  <input
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Brief subject of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Please describe your inquiry in detail..."
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
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

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Main Contact Info */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">The Career Pathway</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <HiMapPin className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Our Location</h4>
                      <p className="text-blue-100">Shimla, Himachal Pradesh</p>
                      <p className="text-blue-200 text-sm">Prime location with excellent connectivity</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiPhone className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Phone Number</h4>
                      <p className="text-blue-100">+91 98000 00000</p>
                      <p className="text-blue-200 text-sm">Available 9 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiEnvelope className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Email Address</h4>
                      <p className="text-blue-100">info@thecareerspathway.com</p>
                      <p className="text-blue-200 text-sm">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiClock className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Working Hours</h4>
                      <p className="text-blue-100">Monday - Saturday: 9 AM - 7 PM</p>
                      <p className="text-blue-200 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-6">
                  {departments.map((dept, index) => {
                    const Icon = dept.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-xl transition-colors duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{dept.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                          <a 
                            href={`mailto:${dept.contact}`}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            {dept.contact}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-blue-600">Campus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Come and experience our learning environment at our Shimla center
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map Placeholder */}
              <div className="h-96 lg:h-auto bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                <div className="text-center text-white">
                  <HiMapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">CPS Shimla Campus</p>
                  <p className="text-blue-200 mt-2">Interactive Map Coming Soon</p>
                </div>
                {/* Overlay with location details */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="font-semibold">The Career Pathway</p>
                      <p className="text-blue-200 text-sm">Shimla, Himachal Pradesh</p>
                    </div>
                    <Link 
                      href="https://maps.google.com"
                      target="_blank"
                      className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
                    >
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Campus Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">📍 Address</h4>
                    <p className="text-gray-600">The Career Pathway (CPS)<br />Shimla, Himachal Pradesh<br />India - 171001</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🚗 Transportation</h4>
                    <p className="text-gray-600">Easily accessible by public transport. Ample parking space available for students.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🏫 Facilities</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Modern Classrooms</span>
                      </div>
                      <div className="flex items-center">
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Library</span>
                      </div>
                      <div className="flex items-center">
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Wi-Fi Campus</span>
                      </div>
                      <div className="flex items-center">
                        <HiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Study Rooms</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      💡 <strong>Pro Tip:</strong> Schedule a campus visit to experience our learning environment and meet our faculty.
                    </p>
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
            Ready to Start Your <span className="text-yellow-300">Success Journey</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Don't wait to begin your preparation for HPAS, HAS, and government exams. 
            Contact us today and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/e-enrollment" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </Link>
            <a 
              href="tel:+919800000000"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Call for Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: "What are the admission procedures for HPAS coaching?",
                answer: "You can enroll online through our website, visit our center, or contact us via phone/email. We'll guide you through the entire process."
              },
              {
                question: "Do you provide demo classes?",
                answer: "Yes, we offer free demo classes for all our courses. Contact us to schedule a demo session with our faculty."
              },
              {
                question: "What are the fee structures for different courses?",
                answer: "Our fee structure varies by course duration and level. Please contact our admissions team for detailed fee information and payment plans."
              },
              {
                question: "Do you provide study material separately?",
                answer: "Yes, we offer standalone study material packages. You can purchase our E-Books and study resources separately from coaching programs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
