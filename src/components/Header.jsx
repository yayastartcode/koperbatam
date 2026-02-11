import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-lg md:text-2xl font-bold text-primary flex items-center whitespace-nowrap">
            <span className="text-primary mr-1">KOPERBATAM</span> TOUR TRAVEL
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-primary transition font-medium">Home</a>
          <a href="#packages" className="text-gray-600 hover:text-primary transition font-medium">Tour Packages</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition font-medium">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition font-medium">Contact Us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a
            href="https://wa.me/6287821136966?text=Halo,%20saya%20ingin%20booking%20paket%20tour.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary hover:bg-lime-600 text-white px-5 py-2 rounded-full font-medium transition shadow-lg">Book
            Now</a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-lg absolute w-full left-0 top-full">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-primary transition font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#packages" className="text-gray-600 hover:text-primary transition font-medium" onClick={() => setIsMenuOpen(false)}>Tour Packages</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition font-medium" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <a
              href="https://wa.me/6287821136966?text=Halo,%20saya%20ingin%20booking%20paket%20tour.%20Mohon%20informasinya%20lebih%20lanjut.%20Terima%20kasih."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-lime-600 text-white px-5 py-2 rounded-full font-medium transition shadow-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
