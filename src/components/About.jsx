export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-2">About Us</h4>
            <h2 className="text-4xl font-bold text-dark mb-6">Welcome to <span className="text-primary">KOPERBATAM TOUR TRAVEL</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
             PT Koperbatam Tour and Travel adalah perusahaan perjalanan yang berbasis di Pulau Batam, Indonesia, yang telah melayani pelanggan selama lebih dari sepuluh tahun. Dikenal karena layanan yang berkualitas dan pengalaman yang luas dalam industri, Koperbatam Tour and travel menawarkan paket liburan yang beragam, termasuk tur kota, paket liburan keluarga, dan layanan transportasi antar-kota. Mereka diakui karena keunggulan dalam memberikan pengalaman wisata yang tak terlupakan di Pulau Batam, dengan fokus pada kepuasan pelanggan dan keamanan perjalanan yang terjamin.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-lime-600 transition shadow-md">Read
                More</button>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="p-2 bg-yellow-100 rounded-full text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="font-medium">Call Us: +62878 - 2113 - 6966</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <img src="images/brlng.jpeg" alt="Travel Collage"
              className="rounded-lg shadow-2xl relative z-10 w-full transform hover:scale-[1.02] transition duration-500" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
