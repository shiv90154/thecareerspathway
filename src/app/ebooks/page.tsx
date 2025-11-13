import SeoHead from "@/components/SeoHead";

export const metadata = {
  title: "E-Books | HPAS & HAS Preparation Books | The Career Pathway (CPS)",
  description:
    "Download and purchase HPAS, HAS and government exam E-books from CPS Shimla. Updated exam preparation books and digital material.",
  alternates: {
    canonical: "https://www.thecareerspathway.com/site/ebooks",
  },
};

export default function EBooksPage() {
  const books = [
    {
      title: "HPAS/HAS Preparation Book",
      author: "CPS Faculty",
      img: "/images/books/book1.png",
      link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20HPAS/HAS%20Book",
    },
    {
      title: "Himachal GK Complete E-Book",
      author: "CPS Experts",
      img: "/images/books/book2.png",
      link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20HP%20GK%20E-Book",
    },
    {
      title: "Indian Polity E-Book",
      author: "CPS Mentors",
      img: "/images/books/book3.png",
      link: "https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20purchase%20Indian%20Polity%20E-Book",
    },
  ];

  return (
    <>
      <SeoHead
        title="E-Books | HPAS & HAS Books | CPS Shimla"
        description="Download HPAS, HAS and government exam preparation E-Books from The Career Pathway (CPS) Shimla."
        canonical="https://www.thecareerspathway.com/site/ebooks"
      />

      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6">E-Books</h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          CPS provides premium-quality E-Books specially designed for HPAS, HAS,
          Allied Services and other government exams. These digital books include
          updated content, conceptual clarity and exam-focused topics prepared by
          expert faculty members.
        </p>

        {/* BOOKS GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {books.map((b, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-56 bg-gray-200 flex items-center justify-center">
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-full object-contain p-4"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700">{b.title}</h2>
                <p className="text-gray-600 mb-4">Author: {b.author}</p>

                <a
                  href={b.link}
                  target="_blank"
                  className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Buy on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* INFO BOX */}
        <div className="mt-16 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Why Choose CPS E-Books?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Updated for HPAS/HAS exam pattern</li>
            <li>Easy-to-understand content</li>
            <li>Prepared by experienced faculty</li>
            <li>Digital access on mobile & laptop</li>
            <li>Perfect for quick revision</li>
          </ul>
        </div>
      </div>
    </>
  );
}
