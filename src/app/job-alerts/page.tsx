import SeoHead from "@/components/SeoHead";

// ⭐ Correct Public API URL (no admin here)
async function getAlerts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/job-alerts`, {
    cache: "no-store",
  });

  // If API failed
  if (!res.ok) {
    return { alerts: [] };
  }

  return res.json();
}

export default async function JobAlertsPage() {
  const { alerts } = await getAlerts();

  return (
    <>
      <SeoHead
        title="Job Alerts | HP Govt Jobs | HPAS & HAS Notifications | CPS"
        description="Check the latest HP government job alerts, HPAS updates, HAS notifications and govt exam vacancies from CPS Shimla."
        canonical="https://www.thecareerspathway.com/site/job-alerts"
      />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-linear-to-br from-[#0A2342] via-[#1E3A5F] to-[#0A2342] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Latest <span className="text-[#FFD600]">Job Alerts</span>
            </h1>
            <p className="text-xl text-[#F5F5F5] mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest HP Government job notifications, HPAS exams, 
              HAS updates, Allied Services alerts and other opportunities in Himachal Pradesh.
            </p>
            <div className="inline-flex items-center bg-[#FFD600]/20 text-[#FFD600] px-4 py-2 rounded-full text-sm font-semibold">
              🔔 Live Updates | Trusted by Thousands of Students
            </div>
          </div>
        </div>
      </section>

      {/* JOB ALERTS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4">
              Current <span className="text-[#1E3A5F]">Opportunities</span>
            </h2>
            <p className="text-xl text-[#1E3A5F] max-w-3xl mx-auto">
              Browse through the latest government job notifications and exam announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alerts && alerts.length > 0 ? (
              alerts.map((alert: any) => (
                <a
                  href={`/site/job-alerts/${alert.slug}`}
                  key={alert._id}
                  className="bg-white p-6 shadow-lg hover:shadow-xl rounded-2xl border border-[#F5F5F5] hover:border-[#1E3A5F]/20 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Featured Badge */}
                  {alert.featured && (
                    <div className="inline-block bg-[#FFD600] text-[#0A2342] px-3 py-1 rounded-full text-xs font-bold mb-3">
                      ⭐ FEATURED
                    </div>
                  )}
                  
                  <h2 className="text-xl font-bold text-[#0A2342] mb-3 group-hover:text-[#1E3A5F] transition-colors duration-300">
                    {alert.title}
                  </h2>

                  <div className="flex items-center text-[#1E3A5F] text-sm mb-3">
                    <span className="bg-[#1E3A5F]/10 text-[#0A2342] px-2 py-1 rounded-full text-xs font-semibold">
                      {alert.department || "Government of HP"}
                    </span>
                    <span className="mx-2">•</span>
                    <span>
                      {alert.createdAt
                        ? new Date(alert.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })
                        : "Recently Added"}
                    </span>
                  </div>

                  <p className="text-[#1E3A5F] leading-relaxed">
                    {alert.description.length > 120
                      ? alert.description.slice(0, 120) + "..."
                      : alert.description}
                  </p>

                  {/* Read More Indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#F5F5F5]">
                    <span className="text-[#0A2342] text-sm font-semibold group-hover:text-[#1E3A5F] transition-colors duration-300">
                      View Details
                    </span>
                    <span className="w-6 h-6 bg-[#0A2342] text-white rounded-full flex items-center justify-center text-xs group-hover:bg-[#1E3A5F] transition-colors duration-300">
                      →
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-[#1E3A5F]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📭</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A2342] mb-4">No Job Alerts Available</h3>
                <p className="text-[#1E3A5F] max-w-md mx-auto">
                  We're currently updating our job alerts. Please check back later for the latest government job notifications.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-20 bg-linear-to-br from-[#F5F5F5] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Why Follow CPS Job Alerts */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#F5F5F5]">
              <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
                Why Follow <span className="text-[#1E3A5F]">CPS Job Alerts</span>?
              </h2>

              <ul className="space-y-4">
                {[
                  "Daily HP Government job notifications",
                  "HPAS / HAS exam alerts and updates",
                  "Allied Services vacancies and deadlines",
                  "Direct official notification links",
                  "Exam pattern and syllabus updates",
                  "Trusted by thousands of students across HP"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#FFD600] text-[#0A2342] rounded-full flex items-center justify-center text-xs font-bold mt-1 shrink-0">
                      ✓
                    </div>
                    <span className="text-[#1E3A5F] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="bg-linear-to-br from-[#0A2342] to-[#1E3A5F] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Job Alert Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-2">50+</div>
                  <div className="text-[#F5F5F5]">Monthly Alerts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-2">1000+</div>
                  <div className="text-[#F5F5F5]">Active Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-2">24/7</div>
                  <div className="text-[#F5F5F5]">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-2">98%</div>
                  <div className="text-[#F5F5F5]">Accuracy Rate</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <p className="text-[#F5F5F5] text-sm text-center">
                  💡 <strong>Pro Tip:</strong> Bookmark this page and check daily for latest government job updates in Himachal Pradesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-r from-[#0A2342] to-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Never Miss a <span className="text-[#FFD600]">Job Opportunity</span>!
          </h2>
          <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed">
            Stay ahead in your government job preparation with timely alerts and updates. 
            Join thousands of successful aspirants who trust CPS for accurate job notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#job-alerts"
              className="bg-[#FFD600] text-[#0A2342] px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#FFD600]/30 transition-all duration-300 transform hover:scale-105"
            >
              Check Latest Alerts
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Get Personalized Alerts
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#0A2342] mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: "How frequently are job alerts updated?",
                answer: "We update job alerts daily as soon as official notifications are released by HP Government and other recruiting bodies."
              },
              {
                question: "Do you cover all HP government departments?",
                answer: "Yes, we cover all major departments including HPAS, HAS, Allied Services, HP Police, Education, Health, and more."
              },
              {
                question: "Are these alerts free to access?",
                answer: "Absolutely! All job alerts on our platform are completely free for all aspirants."
              },
              {
                question: "Can I get personalized job alerts?",
                answer: "Yes, you can contact us for personalized alert services based on your specific exam preferences and qualifications."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-[#F5F5F5]">
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