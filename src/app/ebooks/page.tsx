import SeoHead from "@/components/SeoHead";
import Link from "next/link";
import { 
  HiBookOpen, 
  HiAcademicCap, 
  HiCloudArrowDown,      // FIXED
  HiStar,
  HiShieldCheck,
  HiDevicePhoneMobile,   // FIXED
  HiClock,
 
  HiShoppingCart
} from "react-icons/hi2";

import { FaWhatsapp } from "react-icons/fa";   // FIXED WHATSAPP

export const metadata = {
  title: "HPAS HAS E-Books & Study Material 2025 | The Career Pathway (CPS) Shimla",
  description: "Download premium HPAS, HAS, and government exam E-Books. Digital study material, practice sets, and guidebooks by CPS experts for 2025 preparation.",
  keywords: "HPAS E-books, HAS study material, digital books, government exam preparation, CPS E-books, HPAS 2025 books, HAS preparation material",
  alternates: {
    canonical: "https://www.thecareerspathway.com/ebooks",
  },
  openGraph: {
    title: "HPAS HAS E-Books & Study Material 2025 | The Career Pathway (CPS) Shimla",
    description: "Download premium HPAS, HAS, and government exam E-Books. Digital study material and guidebooks by CPS experts.",
    url: "https://www.thecareerspathway.com/ebooks",
    siteName: "The Career Pathway",
    images: [
      {
        url: '/ebooks-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HPAS HAS E-Books - The Career Pathway CPS Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const books = [
  {
    title: "HPAS/HAS Complete Preparation Guide 2025",
    author: "CPS Expert Faculty Team",
    img: "/images/books/hpas-complete-guide.jpg",
    link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20HPAS%2FHAS%20Complete%20Preparation%20Guide%202025",
    pages: "450+ Pages",
    edition: "2025 Edition",
    price: "₹599",
    originalPrice: "₹999",
    format: "PDF + EPUB",
    features: ["Complete Syllabus Coverage", "Previous Year Questions", "Practice MCQs", "Answer Writing Guide"],
    category: "HPAS/HAS",
    bestseller: true
  },
  {
    title: "Himachal GK & Current Affairs 2025",
    author: "CPS Research Team",
    img: "/images/books/hp-gk-complete.jpg",
    link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20Himachal%20GK%20%26%20Current%20Affairs%202025",
    pages: "320+ Pages",
    edition: "2025 Edition", 
    price: "₹449",
    originalPrice: "₹799",
    format: "PDF + MOBI",
    features: ["Complete HP History", "Geography & Culture", "Current Affairs", "Practice Questions"],
    category: "HP GK",
    bestseller: true
  },
  {
    title: "Indian Polity & Constitution Master Guide",
    author: "CPS Legal Experts",
    img: "/images/books/polity-master.jpg",
    link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20Indian%20Polity%20%26%20Constitution%20Master%20Guide",
    pages: "380+ Pages",
    edition: "2025 Edition",
    price: "₹499",
    originalPrice: "₹849",
    format: "PDF",
    features: ["Laxmikanth Simplified", "Current Amendments", "Case Studies", "Practice Sets"],
    category: "Polity",
    new: true
  },
  {
    title: "Geography & Environment Comprehensive Guide",
    author: "CPS Geography Faculty",
    img: "/images/books/geography-environment.jpg",
    link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20Geography%20%26%20Environment%20Comprehensive%20Guide",
    pages: "350+ Pages",
    edition: "2025 Edition",
    price: "₹479",
    originalPrice: "₹829",
    format: "PDF + EPUB",
    features: ["Physical & Human Geography", "Environmental Studies", "Maps & Diagrams", "HP Specific Content"],
    category: "Geography"
  },
  {
    title: "Economy & Budget Analysis 2025",
    author: "CPS Economics Experts",
    img: "/images/books/economy-budget.jpg",
    link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20Economy%20%26%20Budget%20Analysis%202025",
    pages: "300+ Pages",
    edition: "2025 Edition",
    price: "₹429",
    originalPrice: "₹749",
    format: "PDF",
    features: ["Indian Economy", "Budget Analysis 2025", "Economic Survey", "Current Updates"],
    category: "Economy"
  },
  {
    title: "Essay & Answer Writing Mastery",
    author: "CPS Writing Experts",
    img: "/images/books/essay-writing.jpg",
    link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20Essay%20%26%20Answer%20Writing%20Mastery",
    pages: "280+ Pages",
    edition: "2025 Edition",
    price: "₹399",
    originalPrice: "₹699",
    format: "PDF + EPUB",
    features: ["Essay Structures", "Answer Writing Techniques", "Model Answers", "Presentation Tips"],
    category: "Writing"
  }
];

const features = [
  {
    icon: HiBookOpen,
    title: "Expertly Crafted",
    description: "All E-Books prepared by experienced HPAS/HAS faculty and subject experts"
  },
  {
    icon: HiClock,
    title: "Updated Content",
    description: "Regularly updated with latest syllabus, current affairs, and exam patterns"
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Digital Format",
    description: "Access on any device - mobile, tablet, laptop with multiple format support"
  },
  {
    icon: HiShieldCheck,
    title: "Exam Focused",
    description: "Specifically designed for HPAS, HAS, and Himachal government exams"
  }
];

const stats = [
  { number: "50+", label: "E-Books Available" },
  { number: "2000+", label: "Pages of Content" },
  { number: "1000+", label: "Students Served" },
  { number: "24/7", label: "Instant Access" }
];

export default function EBooksPage() {
  return (
    <>
      <SeoHead
        title="HPAS HAS E-Books & Study Material 2025 | The Career Pathway (CPS) Shimla"
        description="Download premium HPAS, HAS, and government exam E-Books. Digital study material, practice sets, and guidebooks by CPS experts for 2025 preparation."
        canonical="https://www.thecareerspathway.com/ebooks"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-yellow-300">E-Books</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Access high-quality digital study material for HPAS, HAS, and government exams. 
                Expertly crafted E-Books with updated content, available instantly on all your devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#ebooks-collection"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
                >
                  Browse E-Books
                </a>
                <Link 
                  href="/study-material" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Free Study Material
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">E-Book Library</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                      <div className="text-blue-100 font-medium">{stat.label}</div>
                    </div>
                  ))}
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
              Why Choose <span className="text-blue-600">CPS E-Books</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital books are designed specifically for HPAS, HAS, and Himachal Pradesh government exams
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

      {/* E-BOOKS COLLECTION */}
      <section id="ebooks-collection" className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">E-Books</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our collection of premium digital books for comprehensive exam preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                {/* Book Header */}
                <div className="relative">
                  <div className="h-48 bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center p-6">
                    <div className="text-center">
                      <HiBookOpen className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                      <span className="text-blue-700 font-semibold">{book.category}</span>
                    </div>
                  </div>
                  
                  {/* Bestseller/New Badge */}
                  {book.bestseller && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ BESTSELLER
                    </div>
                  )}
                  {book.new && (
                    <div className="absolute top-4 left-4 bg-green-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </div>
                  )}
                </div>

                {/* Book Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-2">By {book.author}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{book.pages}</span>
                    <span>{book.edition}</span>
                    <span>{book.format}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    {book.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 mb-1">
                        <HiCloudArrowDown className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{book.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">{book.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save ₹{(parseInt(book.originalPrice.replace('₹', '')) - parseInt(book.price.replace('₹', ''))).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"
                  >
                    <FaWhatsapp  className="w-5 h-5 mr-2" />
                    Buy on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Why Our E-Books?
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designed for <span className="text-blue-600">HPAS & HAS Success</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every E-Book at <strong>The Career Pathway</strong> is meticulously designed 
                  by subject experts with a focus on the latest exam patterns, HPAS/HAS syllabus 
                  requirements, and Himachal-specific content.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our digital books incorporate <strong>previous year questions, conceptual clarity, 
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
              <h3 className="text-2xl font-bold mb-6 text-center">E-Book Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <HiCloudArrowDown className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Instant Delivery</h4>
                    <p className="text-blue-100 text-sm">Receive E-Books immediately after purchase</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HiDevicePhoneMobile className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Multi-Device Access</h4>
                    <p className="text-blue-100 text-sm">Read on phone, tablet, or computer</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HiShieldCheck className="w-6 h-6 text-yellow-300 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Lifetime Access</h4>
                    <p className="text-blue-100 text-sm">Keep your E-Books forever with updates</p>
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
            Start Your <span className="text-yellow-300">Digital Learning</span> Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful HPAS and HAS aspirants who have transformed 
            their preparation with CPS E-Books. Get instant access to premium content 
            and expert-crafted study material.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#ebooks-collection"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-yellow-200 transition-all duration-300 transform hover:scale-105"
            >
              Browse All E-Books
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Free Sample
            </Link>
          </div>
        </div>
      </section>

      {/* PURCHASE INFO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How to Purchase E-Books?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and secure process to get your digital study materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Choose Your E-Books</h4>
              <p className="text-gray-600">Select from our collection of premium E-Books for HPAS, HAS preparation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaWhatsapp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Contact via WhatsApp</h4>
              <p className="text-gray-600">Click Buy on WhatsApp and send your book requirements</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HiCloudArrowDown className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Instant Delivery</h4>
              <p className="text-gray-600">Receive your E-Books instantly after payment confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Need Help with E-Books?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is available to help you choose the right E-Books and provide technical support for downloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Support
            </Link>
            <a 
              href="https://wa.me/91XXXXXXXXXX"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors duration-300"
            >
              WhatsApp Help
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
