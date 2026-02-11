export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Get In Touch</h4>
          <h2 className="text-4xl font-bold text-dark">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.7674158499402!2d103.9819786106154!3d1.0474708168848295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98dbfb97119e7%3A0x569b0624b5df4a53!2sRUKO%20CITY%20MAKMUR%2C%20Kibing%2C%20Kec.%20Batu%20Aji%2C%20Kota%20Batam%2C%20Kepulauan%20Riau!5e0!3m2!1sid!2sid!4v1770807391368!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Koperbatam Tour Travel Location"
              className="h-full min-h-[400px]"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-2">Alamat</h4>
                  <p className="text-gray-600">Ruko City Makmur Blok A/5, Kota Batam, Kepulauan Riau</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-2">Telepon / WhatsApp</h4>
                  <a href="https://wa.me/6287821136966" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-lg hover:text-primary/80 transition">
                    +62 878 2113 6966
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-2">Email</h4>
                  <a href="mailto:koperbatamtt@gmail.com" className="text-primary font-semibold text-lg hover:text-primary/80 transition">
                    koperbatamtt@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h4 className="text-lg font-bold text-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/Koperbatam-Tourtravel/61582005239663/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-[#1877F2] text-white rounded-full hover:bg-[#166fe5] transition shadow-md">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="http://instagram.com/koperbatam_tourtravel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-full hover:opacity-90 transition shadow-md">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@koperbatam.tourtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full hover:opacity-90 transition shadow-md">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
