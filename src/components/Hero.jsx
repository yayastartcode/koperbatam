export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="images/jmbtn.jpeg" alt="Tropical Beach" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-secondary font-script text-4xl md:text-5xl mb-4 text-outline animate-fade-in-up">Let's Go
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-wide text-outline mb-6 leading-tight">
          Explore <br />
          <span className="text-secondary">BATAM</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto text-outline">
          With Us, Make Your Travel Memorable.
        </p>
        <a href="#packages"
          className="bg-secondary text-dark hover:bg-yellow-300 font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:scale-105 transition transform duration-300 inline-flex items-center">
          Start Journey
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
