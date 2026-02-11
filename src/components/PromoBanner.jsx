export default function PromoBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-lime-500 to-lime-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/tour_bus_scenic.png')] opacity-20 bg-cover bg-fixed"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Make Your Best Trip Ever!</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Make Memories with Koper Batam Tour Travel.</p>
        <a
          href="https://wa.me/6287821136966?text=Halo,%20saya%20tertarik%20dengan%20promo%20special%20offer.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-lime-600 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition inline-block transform hover:-translate-y-1">
          Book Now
        </a>
      </div>
    </section>
  )
}
