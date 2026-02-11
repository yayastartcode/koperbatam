export default function TravelPackages() {
  const packages = [
    { id: 1, image: '/kpr1.jpeg' },
    { id: 2, image: '/kpr2.jpeg' },
    { id: 3, image: '/kpr3.jpeg' }
  ]

  return (
    <section id="travel-packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Our Network</h4>
          <h2 className="text-4xl font-bold text-primary">Paket Travel</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Temukan Paket sesuai Kebutuhan Anda dan Dapatkan
            Penawaran Terbaik Kami!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <img src={pkg.image} alt={`Paket Travel ${pkg.id}`} className="w-full h-auto object-contain" />
              </div>
              <div className="p-4 bg-white mt-auto">
                <a href="#contact"
                  className="block w-full text-center bg-primary hover:bg-lime-600 text-white font-bold py-3 rounded-md transition uppercase shadow-md">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
