export default function Hero() {
  return (
    <section className="bg-[#0A2342] text-white py-24 px-5 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        The Career Pathway (CPS)
      </h1>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
        Best HPAS, HAS & Government Exam Coaching in Shimla, Himachal Pradesh
      </p>

      <div className="space-x-4">
        <a
          href="/site/e-enrollment"
          className="bg-[#FFD600] text-[#0A2342] px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-[#FFE44D] transition-colors duration-300"
        >
          Enroll Now
        </a>
        
        <a
          href="/site/courses"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1E3A5F] transition-colors duration-300"
        >
          View Courses
        </a>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-[#1E3A5F] p-6 rounded-lg">
          <div className="text-3xl font-bold text-[#FFD600]">95%</div>
          <div className="text-gray-300">Success Rate</div>
        </div>
        <div className="bg-[#1E3A5F] p-6 rounded-lg">
          <div className="text-3xl font-bold text-[#FFD600]">500+</div>
          <div className="text-gray-300">Students Trained</div>
        </div>
        <div className="bg-[#1E3A5F] p-6 rounded-lg">
          <div className="text-3xl font-bold text-[#FFD600]">10+</div>
          <div className="text-gray-300">Years Experience</div>
        </div>
      </div>
    </section>
  );
}