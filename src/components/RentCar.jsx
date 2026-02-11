export default function RentCar() {
  const vehicles = [
    {
      id: 1,
      name: 'Bus Tourism',
      image: '/images/cars/mediumbus.jpg',
      prices: [
        { label: 'Medium Bus', price: 'RM 325' },
        { label: 'Big Bus', price: 'RM 450' }
      ],
      note: '* Include Driver + Petrol'
    },
    {
      id: 2,
      name: 'Toyota Hiace',
      image: '/images/cars/hiace.jpg',
      price: 'RM 250',
      features: ['Driver Included', 'Petrol Included', 'Parking Included']
    },
    {
      id: 3,
      name: 'Toyota Alphard',
      image: '/images/cars/alphard.jpg',
      price: 'RM 250',
      badge: 'LUXURY',
      features: ['Driver Included', 'Petrol Included', 'Parking Included']
    },
    {
      id: 4,
      name: 'Mitsubishi Xpander',
      image: '/images/cars/xpander.jpg',
      price: 'RM 150',
      features: ['Driver Included', 'Petrol Included', 'Parking Included']
    },
    {
      id: 5,
      name: 'Toyota Rush',
      image: '/images/cars/rush.jpg',
      price: 'RM 150',
      features: ['Driver Included', 'Petrol Included', 'Parking Included']
    },
    {
      id: 6,
      name: 'Toyota Avanza',
      image: '/images/cars/avanza.jpg',
      price: 'RM 150',
      features: ['Driver Included', 'Petrol Included', 'Parking Included']
    },
    {
      id: 7,
      name: 'Honda Brio',
      image: '/images/cars/brio.jpg',
      price: 'RM 130',
      features: ['Driver Included', 'Petrol Included', 'Parking Included']
    }
  ]

  return (
    <section id="rent-car" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Transport Services</h4>
          <h2 className="text-4xl font-bold text-dark">Sewa Mobil / Kereta (12 Jam)</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Reliable and comfortable transportation for your
            journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
              <div className="h-48 overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-dark">{vehicle.name}</h3>
                  {vehicle.badge && (
                    <span className="bg-secondary text-[10px] font-bold px-2 py-1 rounded text-dark">{vehicle.badge}</span>
                  )}
                </div>

                {vehicle.prices ? (
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    {vehicle.prices.map((item, index) => (
                      <div key={index} className={`flex justify-between ${index === 0 ? 'border-b pb-1' : ''}`}>
                        <span>{item.label}</span>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                    {vehicle.note && <p className="text-xs text-gray-500 mt-2 italic">{vehicle.note}</p>}
                  </div>
                ) : (
                  <div className="text-sm text-gray-600 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>Daily Rate</span>
                      <span className="text-xl font-bold text-primary">{vehicle.price}</span>
                    </div>
                    <ul className="text-xs text-gray-500 list-disc list-inside">
                      {vehicle.features?.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href={`https://wa.me/6287821136966?text=${encodeURIComponent(`Halo, saya ingin sewa ${vehicle.name}. Mohon informasinya lebih lanjut. Terima kasih.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-100 text-dark hover:bg-primary hover:text-white font-bold py-2 rounded transition text-sm">
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
