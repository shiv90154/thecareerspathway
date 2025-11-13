export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10">

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
          <p>The Career Pathway (CPS)</p>
          <p>Shimla, Himachal Pradesh</p>
          <p>Phone: +91-98000-00000</p>
          <p>Email: info@thecareerspathway.com</p>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Study Material</li>
            <li>Job Alerts</li>
          </ul>
        </div>

        {/* Copyright */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">CPS</h2>
          <p>© {new Date().getFullYear()} The Career Pathway</p>
          <p>All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
