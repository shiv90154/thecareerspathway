import SeoHead from "@/components/SeoHead";
import Link from "next/link";
import { 
  HiBellAlert, 
  HiCalendar, 
  HiMapPin, 
  HiAcademicCap,
  HiShieldCheck,
  HiBookOpen,
  HiClock,
  HiUserGroup,
  HiArrowRight,
  HiStar
} from "react-icons/hi2";
import type { IconType } from "react-icons";

// ⭐ Correct Public API URL (no admin here)
export interface Alert {
  _id: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  category?: string;
  deadline?: string;
  vacancies?: string;
  urgency?: 'high' | 'medium' | 'low' | string;
}

async function getAlerts(): Promise<{ alerts: Alert[] }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job-alerts`, {
    cache: "no-store",
  });

  // If API failed
  if (!res.ok) {
    return { alerts: [] };
  }

  const data = await res.json();
  // Normalize shape to ensure alerts is always an array
  return { alerts: Array.isArray(data?.alerts) ? data.alerts : [] };
}

// Mock data for when API is not available
const mockAlerts = [
  {
    _id: "1",
    slug: "hpas-notification-2025",
    title: "HPAS Notification 2025 - Himachal Pradesh Administrative Services",
    description: "Official notification for HPAS 2025 examination. Complete details about eligibility, syllabus, exam dates, and application process for Himachal Pradesh Administrative Services.",
    createdAt: "2025-01-15",
    category: "HPAS",
    deadline: "2025-03-15",
    vacancies: "45",
    urgency: "high"
  },
  {
    _id: "2", 
    slug: "has-prelims-2025",
    title: "HAS Preliminary Examination 2025 - Notification Released",
    description: "Himachal Administrative Services preliminary exam notification with complete schedule, syllabus pattern, and eligibility criteria for 2025 batch.",
    createdAt: "2025-01-10",
    category: "HAS",
    deadline: "2025-02-28",
    vacancies: "120",
    urgency: "high"
  },
  {
    _id: "3",
    slug: "allied-services-2025",
    title: "Allied Services Combined Exam 2025 - HP Government",
    description: "Combined Allied Services examination notification for various posts in Himachal Pradesh government departments. Multiple vacancies available.",
    createdAt: "2025-01-05",
    category: "Allied Services",
    deadline: "2025-03-01",
    vacancies: "200+",
    urgency: "medium"
  },
  {
    _id: "4",
    slug: "hp-police-si-2025",
    title: "HP Police Sub Inspector Recruitment 2025 - 350 Posts",
    description: "Himachal Pradesh Police SI recruitment notification with physical eligibility criteria and selection process details.",
    createdAt: "2024-12-20",
    category: "Police",
    deadline: "2025-02-15",
    vacancies: "350",
    urgency: "medium"
  },
  {
    _id: "5",
    slug: "forest-guard-hp-2025",
    title: "Forest Guard & Forest Worker Recruitment 2025",
    description: "Himachal Pradesh Forest Department recruitment for guard and worker positions across various forest ranges in the state.",
    createdAt: "2024-12-15",
    category: "Forest",
    deadline: "2025-01-31",
    vacancies: "500+",
    urgency: "low"
  },
  {
    _id: "6",
    slug: "bank-clerk-2025",
    title: "Bank Clerk & PO Recruitment 2025 - HP Regional Rural Banks",
    description: "Various banking sector vacancies in Himachal Pradesh regional rural banks for clerk and probationary officer positions.",
    createdAt: "2024-12-10",
    category: "Banking",
    deadline: "2025-02-20",
    vacancies: "180",
    urgency: "medium"
  }
];

const categories: {
  name: string;
  icon: IconType;
  color: 'blue' | 'green' | 'purple' | 'red' | 'emerald' | 'orange';
  count: number;
}[] = [
  { name: "HPAS", icon: HiAcademicCap, color: "blue", count: 12 },
  { name: "HAS", icon: HiBookOpen, color: "green", count: 8 },
  { name: "Allied Services", icon: HiUserGroup, color: "purple", count: 15 },
  { name: "Police", icon: HiShieldCheck, color: "red", count: 25 },
  { name: "Forest", icon: HiMapPin, color: "emerald", count: 18 },
  { name: "Banking", icon: HiClock, color: "orange", count: 10 }
];

const stats = [
  { number: "1000+", label: "Job Alerts Sent" },
  { number: "50+", label: "Successful Selections" },
  { number: "24/7", label: "Alert Monitoring" },
  { number: "100%", label: "Official Sources" }
];

export default async function JobAlertsPage() {
  let { alerts } = await getAlerts();
  
  // Use mock data if no alerts from API
  if (!alerts || alerts.length === 0) {
    alerts = mockAlerts;
  }

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'high': return 'bg-[#D62828]/10 text-[#D62828] border-[#D62828]/20';
      case 'medium': return 'bg-[#FFD600]/10 text-[#0A2342] border-[#FFD600]/20';
      case 'low': return 'bg-[#1E3A5F]/10 text-[#1E3A5F] border-[#1E3A5F]/20';
      default: return 'bg-[#F5F5F5] text-[#1E3A5F] border-[#F5F5F5]';
    }
  };

  const getUrgencyText = (urgency?: string) => {
    switch (urgency) {
      case 'high': return 'Urgent';
      case 'medium': return 'Important';
      case 'low': return 'Regular';
      default: return 'New';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'HPAS': return 'bg-[#1E3A5F]/10 text-[#0A2342] border-[#1E3A5F]/20';
      case 'HAS': return 'bg-[#1E3A5F]/10 text-[#0A2342] border-[#1E3A5F]/20';
      case 'Allied Services': return 'bg-[#1E3A5F]/10 text-[#0A2342] border-[#1E3A5F]/20';
      case 'Police': return 'bg-[#D62828]/10 text-[#D62828] border-[#D62828]/20';
      case 'Forest': return 'bg-[#1E3A5F]/10 text-[#0A2342] border-[#1E3A5F]/20';
      case 'Banking': return 'bg-[#FFD600]/10 text-[#0A2342] border-[#FFD600]/20';
      default: return 'bg-[#F5F5F5] text-[#1E3A5F] border-[#F5F5F5]';
    }
  };

  return (
    <>
      <SeoHead
        title="Latest HP Government Job Alerts 2025 | HPAS, HAS, Allied Services Notifications"
        description="Get instant HP government job alerts for HPAS, HAS, Allied Services, Police, Forest & Banking vacancies. Latest 2025 notifications with deadlines and application links."
        canonical="https://www.thecareerspathway.com/job-alerts"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-[#0A2342] via-[#1E3A5F] to-[#0A2342] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Latest <span className="text-[#FFD600]">Job Alerts</span>
              </h1>
              <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed">
                Stay updated with real-time HP Government job notifications, 
                HPAS exams, HAS updates, Allied Services alerts and career 
                opportunities in Himachal Pradesh.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#job-alerts"
                  className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105"
                >
                  View All Alerts
                </a>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get Custom Alerts
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Alert Statistics</h3>
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

      {/* CATEGORIES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4">
              Job <span className="text-[#1E3A5F]">Categories</span>
            </h2>
            <p className="text-xl text-[#1E3A5F] max-w-3xl mx-auto">
              Browse job alerts by category and never miss an opportunity in your preferred field
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = {
                blue: "bg-[#1E3A5F]/10 border-[#1E3A5F]/20 text-[#0A2342]",
                green: "bg-[#1E3A5F]/10 border-[#1E3A5F]/20 text-[#0A2342]", 
                purple: "bg-[#1E3A5F]/10 border-[#1E3A5F]/20 text-[#0A2342]",
                red: "bg-[#D62828]/10 border-[#D62828]/20 text-[#D62828]",
                emerald: "bg-[#1E3A5F]/10 border-[#1E3A5F]/20 text-[#0A2342]",
                orange: "bg-[#FFD600]/10 border-[#FFD600]/20 text-[#0A2342]"
              };

              return (
                <div 
                  key={index}
                  className={`border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group ${colorClasses[category.color]}`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} Positions</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {alerts.length === 0 ? (
            <div className="text-center py-12 col-span-full">
              <HiBellAlert className="w-16 h-16 text-[#1E3A5F] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">No Job Alerts Available</h3>
              <p className="text-[#1E3A5F]">Check back later for new job notifications</p>
            </div>
          ) : (
            alerts.map((alert: Alert) => (
              <div
                key={alert._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#F5F5F5] overflow-hidden group"
              >
                {/* Alert Header */}
                <div className="p-6 border-b border-[#F5F5F5]">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(alert.category || 'default')}`}>
                      {alert.category}
                    </span>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyColor(alert.urgency)}`}>
                      {getUrgencyText(alert.urgency)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2342] mb-3 leading-tight group-hover:text-[#1E3A5F] transition-colors duration-300">
                    {alert.title}
                  </h3>

                  <div className="flex items-center text-sm text-[#1E3A5F] mb-2">
                    <HiCalendar className="w-4 h-4 mr-1" />
                    Posted: {new Date(alert.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>

                  {alert.deadline && (
                    <div className="flex items-center text-sm text-[#D62828] font-semibold">
                      <HiClock className="w-4 h-4 mr-1" />
                      Deadline: {new Date(alert.deadline).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  )}
                </div>

                {/* Alert Body */}
                <div className="p-6">
                  <p className="text-[#1E3A5F] mb-6 leading-relaxed">
                    {alert.description.length > 120
                      ? alert.description.slice(0, 120) + "..."
                      : alert.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    {alert.vacancies && (
                      <div className="text-sm font-semibold text-[#0A2342]">
                        Vacancies: {alert.vacancies}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/job-alerts/${alert.slug}`}
                    className="w-full bg-linear-to-r from-[#0A2342] to-[#1E3A5F] text-white py-3 rounded-xl font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"
                  >
                    View Details
                    <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* WHY FOLLOW SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#1E3A5F]/10 text-[#0A2342] rounded-full text-sm font-semibold mb-4">
                Why Choose CPS?
              </div>
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
                Never Miss a <span className="text-[#1E3A5F]">Job Opportunity</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-[#1E3A5F] leading-relaxed">
                  At The Career Pathway, we understand the importance of timely job notifications 
                  for government exam aspirants. Our job alert system is designed to keep you 
                  ahead in your career journey.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <HiStar className="w-6 h-6 text-[#D62828] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A2342] mb-1">Real-time Updates</h4>
                      <p className="text-[#1E3A5F]">Instant notifications as soon as official notifications are released</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiShieldCheck className="w-6 h-6 text-[#D62828] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A2342] mb-1">Verified Sources</h4>
                      <p className="text-[#1E3A5F]">All alerts verified from official government sources and websites</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <HiUserGroup className="w-6 h-6 text-[#D62828] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0A2342] mb-1">Expert Analysis</h4>
                      <p className="text-[#1E3A5F]">Detailed analysis of eligibility, syllabus, and exam patterns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-[#0A2342] to-[#1E3A5F] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Alert Features</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Daily HP Govt Job Alerts</span>
                  <HiStar className="w-5 h-5 text-[#FFD600]" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>HPAS / HAS Exam Notifications</span>
                  <HiStar className="w-5 h-5 text-[#FFD600]" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Allied Services Vacancies</span>
                  <HiStar className="w-5 h-5 text-[#FFD600]" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Direct Official Links</span>
                  <HiStar className="w-5 h-5 text-[#FFD600]" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                  <span>Trusted by Thousands</span>
                  <HiStar className="w-5 h-5 text-[#FFD600]" />
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
            Stay Ahead in Your <span className="text-[#FFD600]">Career Journey</span>
          </h2>
          <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed">
            Join thousands of successful aspirants who never miss a job opportunity 
            with CPS Job Alerts. Get instant notifications and expert guidance for 
            all HP government examinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/e-enrollment" 
              className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Alerts
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact for Support
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION INFO */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[#0A2342] mb-8">How to Get Job Alerts?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F5F5]">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiBellAlert className="w-6 h-6 text-[#0A2342]" />
              </div>
              <h4 className="font-bold text-[#0A2342] mb-2">Enroll with CPS</h4>
              <p className="text-[#1E3A5F] text-sm">Join our coaching program for personalized alerts</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F5F5]">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiUserGroup className="w-6 h-6 text-[#0A2342]" />
              </div>
              <h4 className="font-bold text-[#0A2342] mb-2">Follow Social Media</h4>
              <p className="text-[#1E3A5F] text-sm">Get instant updates on our social media channels</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#F5F5F5]">
              <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiBookOpen className="w-6 h-6 text-[#0A2342]" />
              </div>
              <h4 className="font-bold text-[#0A2342] mb-2">Visit Regularly</h4>
              <p className="text-[#1E3A5F] text-sm">Check this page daily for new notifications</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}