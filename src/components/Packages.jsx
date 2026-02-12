import Accordion from './Accordion'

const priceTable = (prices) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr className="bg-lime-50 rounded-t-lg">
          <th className="border-b-2 border-primary/20 p-3 text-primary font-bold">Jumlah Pax</th>
          <th className="border-b-2 border-primary/20 p-3 text-primary font-bold">Harga</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {prices.map((item, index) => (
          <tr key={index} className={`${item.highlight ? 'bg-primary/20 hover:bg-primary/30' : 'hover:bg-gray-50'}`}>
            <td className={`p-3 ${item.highlight ? 'font-bold text-gray-800' : 'text-gray-600'}`}>{item.pax}</td>
            <td className={`p-3 ${item.highlight ? 'font-bold text-primary' : 'font-semibold text-gray-700'}`}>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const checkIcon = <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>

const crossIcon = <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>

const packages = [
  {
    id: 1,
    image: 'images/brlng.jpeg',
    badge: 'Best Seller',
    title: 'Amazing Batam - Bintan Fun Trip',
    duration: '2 Days 1 Night',
    tableTitle: 'Harga Paket Tour Batam – Bintan 2 Hari 1 Malam',
    prices: [
      { pax: '2 – 3 pax', price: 'RM 570' },
      { pax: '4 – 6 pax', price: 'RM 470' },
      { pax: '7 – 10 pax', price: 'RM 450' },
      { pax: '11 – 15 pax', price: 'RM 420' },
      { pax: '16 – 20 pax', price: 'RM 410' },
      { pax: '21 – 30 pax', price: 'RM 390' },
      { pax: '31 – 40 pax', price: 'RM 380' },
      { pax: '41 – 50 pax', price: 'RM 370', highlight: true }
    ],
    itinerary: (
      <>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 1</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Arrival</li>
            <li>Photo shot at Welcome To Batam</li>
            <li>Museum Raja Ali Haji / Temple Vihara Maitry</li>
            <li>Makan siang di restaurant local</li>
            <li>Barelang Bridge</li>
            <li>Masjid Sultan Mahmud Riayat Syah</li>
            <li>Puncak Beliung</li>
            <li>Coffee Factory / Next Level / Level Up</li>
            <li>Check in Hotel</li>
            <li>Diteruskan ke shopping Mall</li>
            <li>Dinner di Seafood Restaurant</li>
            <li>Kembali ke hotel</li>
            <li>Free Program</li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary font-bold mb-2">Day 2</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sarapan pagi di Hotel</li>
            <li>Masjid Cheng – Ho</li>
            <li>Miniature House</li>
            <li>Selanjutnya Shopping Oleh-oleh</li>
            <li>Layer Cake [ kue lapis ]</li>
            <li>Makan Siang Nasi Padang</li>
            <li>Transfer ke ferry terminal</li>
          </ul>
          <div className="mt-4 font-bold text-dark italic">PROGRAM SELESAI</div>
        </div>
      </>
    ),
    included: [
      '2 Ways Ferry Tickets JB – Batam',
      'Hotel & Breakfast',
      'Port Tax',
      'Transport Batam',
      'Guide',
      'Mineral Water'
    ],
    excluded: [
      { text: 'Belanja Oleh-oleh', icon: crossIcon },
      { text: 'Keperluan Pribadi', icon: crossIcon }
    ],
    payment: [
      'Pembayaran DP / Uang muka minimal 50 persen dari total invoice untuk menggaransi bookingan.',
      'Pelunasan pada saat kedatangan, bisa cash atau transfer ke rekening kami.'
    ],
    terms: [
      '• Program tour bersifat private [ tidak digabung dengan peserta / grup lain ]',
      '• Program tour & pilihan hotel bersifat Fleksibel bisa di sesuaikan dengan permintaan',
      '• Harga paket dihitung nett / orang dewasa',
      <span className="font-bold text-dark block mt-2 mb-1">Harga paket khusus anak :</span>,
      <ul className="ml-4 space-y-1 list-disc text-gray-500">
        <li>Anak 0-2 Th RM 50</li>
        <li>Anak 3-10 Th harga 50 persen dari orang dewasa</li>
        <li>Anak 10 Th ke atas harga sama dengan orang dewasa</li>
      </ul>
    ]
  },
  {
    id: 2,
    image: 'images/tresur.jpg',
    badge: 'Popular',
    title: 'Paket Tour A (Batam – Bintan)',
    duration: '3 Days 2 Nights',
    tableTitle: 'Harga Paket Tour A (Batam – Bintan) 3 Hari 2 Malam',
    prices: [
      { pax: '2 – 3 pax', price: 'RM 780' },
      { pax: '4 – 6 pax', price: 'RM 620' },
      { pax: '7 – 10 pax', price: 'RM 590' },
      { pax: '11 – 15 pax', price: 'RM 530' },
      { pax: '16 – 20 pax', price: 'RM 490' },
      { pax: '21 – 30 pax', price: 'RM 470' },
      { pax: '31 – 40 pax', price: 'RM 450' },
      { pax: '41 – 50 pax', price: 'RM 420', highlight: true }
    ],
    itinerary: (
      <>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 1</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>ARRIVAL</li>
            <li>Welcome to Batam</li>
            <li>Museum Raja Ali Haji</li>
            <li>Makan Siang di Restaurant Local</li>
            <li>Barelang Bridge</li>
            <li>Masjid Mahmud Riayat Syah</li>
            <li>Puncak Beliung / Golden City</li>
            <li>Check in Hotel</li>
            <li>Free Program</li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 2</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sarapan Pagi di Hotel</li>
            <li>Berangkat ke Punggur</li>
            <li>Tanjung Uban</li>
            <li>Lagoi Bay</li>
            <li>TreasureBay (Excluded Tiket Masuk)</li>
            <li>Danau Biru / Gurun Pasir</li>
            <li>Patung 1000 / Masjid Penyengat</li>
            <li>Balik ke Batam</li>
            <li>Check in Hotel</li>
            <li>Free Program</li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary font-bold mb-2">Day 3</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sarapan Pagi di Hotel</li>
            <li>Check Out dari Hotel</li>
            <li>Miniatur House</li>
            <li>Mengunjungi Pasar Penguin</li>
            <li>Selanjutnya Shopping Oleh-Oleh</li>
            <li>Transfer ke Ferry Terminal</li>
          </ul>
          <div className="mt-4 font-bold text-dark italic">PROGRAM SELESAI</div>
        </div>
      </>
    ),
    included: [
      '2 Ways Ferry Tickets JB – BATAM',
      'Port Tax',
      'Hotel and Breakfast',
      'Transport Batam',
      'Transport Bintan',
      'Mineral Water every day'
    ],
    excluded: [
      { text: 'Treasurebay', icon: crossIcon },
      { text: 'Fee Tempat Wisata', icon: crossIcon },
      { text: 'Asuransi perjalanan', icon: crossIcon },
      { text: 'Belanja oleh oleh', icon: crossIcon },
      { text: 'Keperluan pribadi', icon: crossIcon }
    ],
    payment: [
      'Pembayaran DP / Uang muka minimal 50 persen dari total invoice untuk menggaranti bookingan.',
      'Pelunasan pada saat kedatangan, bisa cash atau transfer ke rekening kami.'
    ],
    terms: [
      '• Program tour bersifat private [ tidak digabung dengan peserta / grup lain ]',
      '• Program tour & pilihan hotel bersifat Fleksibel bisa di sesuaikan dengan permintaan',
      '• Harga paket dihitung nett / orang dewasa',
      <span className="font-bold text-dark block mt-2 mb-1">Harga paket khusus anak :</span>,
      <ul className="ml-4 space-y-1 list-disc text-gray-500">
        <li>Anak 0-2 Th RM 50</li>
        <li>Anak 3-10 Th harga 50 persen dari orang dewasa</li>
        <li>Anak 10 Th ke atas harga sama dengan orang dewasa</li>
      </ul>
    ]
  },
  {
    id: 3,
    image: 'images/goldcity.jpg',
    badge: 'New Package',
    title: 'Paket Tour B (Batam)',
    duration: '3 Days 2 Nights',
    tableTitle: 'Harga Paket Tour B (Batam – Bintan) 3 Hari 2 Malam',
    prices: [
      { pax: '2 – 3 pax', price: 'RM 670' },
      { pax: '4 – 6 pax', price: 'RM 512' },
      { pax: '7 – 10 pax', price: 'RM 490' },
      { pax: '11 – 15 pax', price: 'RM 470' },
      { pax: '16 – 20 pax', price: 'RM 460' },
      { pax: '21 – 30 pax', price: 'RM 440' },
      { pax: '31 – 40 pax', price: 'RM 420' },
      { pax: '41 – 50 pax', price: 'RM 410', highlight: true }
    ],
    itinerary: (
      <>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 1</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Arrival</li>
            <li>Photo shot at Welcome To Batam</li>
            <li>Museum Raja Ali Haji</li>
            <li>Masjid Tanjak Hang Nadim / Temple Vihara Maitry</li>
            <li>Makan Siang di Restaurant Local</li>
            <li>Barelang Bridge</li>
            <li>Masjid Mahmud Riayat Syah</li>
            <li>Puncak Beliung</li>
            <li>DC Mall</li>
            <li>Dinner di Seafood Restaurant</li>
            <li>Kembali ke hotel</li>
            <li>Free program</li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 2</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Breakfast di hotel</li>
            <li>Golden City</li>
            <li>Miniature house</li>
            <li>Dino's gate batam</li>
            <li>Makan siang nasi padang</li>
            <li>Masjid Cheng-Ho</li>
            <li>Illusion studio</li>
            <li>Ocarina</li>
            <li>Nagoya hill mall</li>
            <li>Makan malam ayam penyet</li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary font-bold mb-2">Day 3</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Breakfast hotel</li>
            <li>Check out hotel</li>
            <li>Mengunjungi pasar penguin</li>
            <li>Selanjutnya shopping oleh oleh</li>
            <li>Makan siang at harbourbay</li>
            <li>Transfer ke ferry terminal</li>
          </ul>
          <div className="mt-4 font-bold text-dark italic">PROGRAM SELESAI</div>
        </div>
      </>
    ),
    included: [
      '2 Ways ferry tickets JB – Batam',
      'Transport Batam',
      'Port tax',
      'Hotel and breakfast',
      'Mineral water everyday'
    ],
    excluded: [
      { text: 'Belanja oleh oleh', icon: crossIcon },
      { text: 'Keperluan pribadi', icon: crossIcon }
    ],
    payment: [
      'Pembayaran DP / Uang muka minimal 50 persen dari total invoice untuk menggaranti bookingan.',
      'Pelunasan pada saat kedatangan, bisa cash atau transfer ke rekening kami.'
    ],
    terms: [
      '• Program tour bersifat private [ tidak digabung dengan peserta / grup lain ]',
      '• Program tour & pilihan hotel bersifat Fleksibel bisa di sesuaikan dengan permintaan',
      '• Harga paket dihitung nett / orang dewasa',
      <span className="font-bold text-dark block mt-2 mb-1">Harga paket khusus anak :</span>,
      <ul className="ml-4 space-y-1 list-disc text-gray-500">
        <li>Anak 0-2 Th RM 50</li>
        <li>Anak 3-10 Th harga 50 persen dari orang dewasa</li>
        <li>Anak 10 Th ke atas harga sama dengan orang dewasa</li>
      </ul>
    ]
  },
  {
    id: 4,
    image: 'images/jmbtn.jpeg',
    badge: 'Premium',
    title: 'Paket Tour Batam',
    duration: '4 Days 3 Nights',
    tableTitle: 'Harga Paket Tour Batam 4 Hari 3 Malam',
    prices: [
      { pax: '2 – 3 pax', price: 'RM 970' },
      { pax: '4 – 6 pax', price: 'RM 760' },
      { pax: '7 – 10 pax', price: 'RM 740' },
      { pax: '11 – 15 pax', price: 'RM 670' },
      { pax: '16 – 20 pax', price: 'RM 650' },
      { pax: '21 – 30 pax', price: 'RM 630' },
      { pax: '31 – 40 pax', price: 'RM 610' },
      { pax: '41 – 50 pax', price: 'RM 570', highlight: true }
    ],
    itinerary: (
      <>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 1</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sampai Ferry Terminal Batam langsung Berangkat ke Pelabuhan Punggur Naik Ferry menuju Bintan</li>
            <li>Sampai Ferry Terminal Bintan /Tanjung Uban Langsung menuju Tanjung Pinang</li>
            <li>Tugu Keong / Gong-gong</li>
            <li>Patung 1000</li>
            <li>Pulau Penyengat</li>
            <li>Masjid Raya Sultan Riau/ Lohan Temple</li>
            <li>Patung Sleeping Budha / Patung Penyu</li>
            <li>Check in Hotel di Bintan</li>
            <li>Melihat Bintan Malam Hari</li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 2</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Breakfast di Hotel</li>
            <li>Check Out Hotel</li>
            <li>Mengunjungi Lagoi Bay</li>
            <li>Mengunjungi TreasureBay ( Excluded Tiket Masuk )</li>
            <li>Mengunjungi Danau Biru</li>
            <li>Gurun Pasir</li>
            <li>Menuju Tanjung Uban Shopping Oleh-Oleh di Bintan</li>
            <li>Naik Ferry Menuju batam</li>
            <li>cek in hotel</li>
            <li>Makan malam</li>
            <li>Jalan2 Malam hari di Golden City</li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 3</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Breakfast di Hotel</li>
            <li>Mengunjungi Welcome To Batam</li>
            <li>Museum Raja Ali Haji</li>
            <li>Masjid Tanjak / Temple Vihara maitry</li>
            <li>Mengunjungi Barelang Bridge</li>
            <li>Masjid Sultan mahmud riyat syah</li>
            <li>Puncak Beliung</li>
            <li>Next lavel Cafe</li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary font-bold mb-2">Day 4</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Breakfast di hotel</li>
            <li>Check Out dari Hotel</li>
            <li>Miniature Indonesia Park</li>
            <li>Mengunjungi Pasar Penguin</li>
            <li>Mengunjungi Nagoya Hill Beli Oleh-Oleh Batam</li>
            <li>Balik Ke Ferry Terminal</li>
          </ul>
          <div className="mt-4 font-bold text-dark italic">TOur Selesai</div>
        </div>
      </>
    ),
    included: [
      '2 Ways Ferry Tickets',
      'Port Tax',
      'Hotel and Breakfast',
      'Ticket ferry Batam-Bintan',
      'Transport Batam',
      'Transport Bintan',
      'Mineral Water every day'
    ],
    excluded: [
      { text: 'Belanja oleh oleh', icon: crossIcon },
      { text: 'Keperluan pribadi', icon: crossIcon }
    ],
    payment: [
      'Pembayaran DP / Uang muka minimal 50 persen dari total invoice untuk menggaranti bookingan.',
      'Pelunasan pada saat kedatangan, bisa cash atau transfer ke rekening kami.'
    ],
    terms: [
      '• Program tour bersifat private [ tidak digabung dengan peserta / grup lain ]',
      '• Program tour & pilihan hotel bersifat Fleksibel bisa di sesuaikan dengan permintaan',
      '• Harga paket dihitung nett / orang dewasa',
      <span className="font-bold text-dark block mt-2 mb-1">Harga paket khusus anak :</span>,
      <ul className="ml-4 space-y-1 list-disc text-gray-500">
        <li>Anak 0-2 Th RM 50</li>
        <li>Anak 3-10 Th harga 50 persen dari orang dewasa</li>
        <li>Anak 10 Th ke atas harga sama dengan orang dewasa</li>
      </ul>
    ]
  },
  {
    id: 5,
    image: 'images/masjidbtm.jpg',
    badge: 'Best Value',
    title: 'Paket Tour B (Batam – Bintan)',
    duration: '4 Days 3 Nights',
    tableTitle: 'Harga Paket Tour B (Batam – Bintan) 4 Hari 3 Malam',
    prices: [
      { pax: '2 – 3 pax', price: 'RM 790' },
      { pax: '4 – 6 pax', price: 'RM 630' },
      { pax: '7 – 10 pax', price: 'RM 620' },
      { pax: '11 – 15 pax', price: 'RM 580' },
      { pax: '16 – 20 pax', price: 'RM 560' },
      { pax: '21 – 30 pax', price: 'RM 530' },
      { pax: '31 – 40 pax', price: 'RM 510' },
      { pax: '41 – 50 pax', price: 'RM 490', highlight: true }
    ],
    itinerary: (
      <>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 1</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>ARRIVAL</li>
            <li>Foto Shot at Welcome To Batam</li>
            <li>Museum Raja Ali Haji</li>
            <li>Masjid Tanjak Hang Nadim /Temple Vihara maitry</li>
            <li>Makan Siang di Restoran lokal</li>
            <li>Barelang Bridge</li>
            <li>Masjid Mahmud Riayat Syah</li>
            <li>Puncak Beliung</li>
            <li>Dc Mall</li>
            <li>Dinner di Seafood Restaurant</li>
            <li>Kembali ke Hotel</li>
            <li>Free Program</li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 2</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sarapan Pagi di Hotel</li>
            <li>Golden City</li>
            <li>Miniature House</li>
            <li>Dino's Gate Batam</li>
            <li>Makan Siang Nasi Padang</li>
            <li>Masjid Cheng-Ho</li>
            <li>Ilusion Studio</li>
            <li>Ocarina</li>
            <li>Next Level</li>
            <li>Makan Malam Ayam Penyet</li>
          </ul>
        </div>
        <div className="mb-6">
          <h5 className="text-primary font-bold mb-2">Day 3</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sarapan pagi di hotel</li>
            <li>Mengunjungi pohon jambu Marina</li>
            <li>Taman rusa</li>
            <li>Makan siang di Mie Tarempa</li>
            <li>Masjid Jabal Arafah</li>
            <li>Nagoya hill</li>
            <li>Dinner in Restaurant Local</li>
          </ul>
        </div>
        <div>
          <h5 className="text-primary font-bold mb-2">Day 4</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li>Sarapan Pagi di Hotel</li>
            <li>Check Out dari Hotel</li>
            <li>Mengunjungi Pasar Penguin</li>
            <li>Selanjutnya Shopping Oleh-Oleh</li>
            <li>Makan Siang at Harbourbay</li>
            <li>Transfer ke Feri Terminal</li>
          </ul>
          <div className="mt-4 font-bold text-dark italic">Program Selesai</div>
        </div>
      </>
    ),
    included: [
      '2 Ways Ferry Tickets JB – BATAM',
      'Land Transport BATAM',
      'Port Tax',
      'Guide',
      'Hotel and Breakfast',
      'Mineral Water Everyday'
    ],
    excluded: [
      { text: 'Belanja oleh oleh', icon: crossIcon },
      { text: 'Keperluan pribadi', icon: crossIcon },
      { text: 'Asuransi perjalanan', icon: crossIcon }
    ],
    payment: [
      'Pembayaran DP / Uang muka minimal 50 persen dari total invoice untuk menggaranti bookingan.',
      'Pelunasan pada saat kedatangan, bisa cash atau transfer ke rekening kami.'
    ],
    terms: [
      '• Program tour bersifat private [ tidak digabung dengan peserta / grup lain ]',
      '• Program tour & pilihan hotel bersifat Fleksibel bisa di sesuaikan dengan permintaan',
      '• Harga paket dihitung nett / orang dewasa',
      <span className="font-bold text-dark block mt-2 mb-1">Harga paket khusus anak :</span>,
      <ul className="ml-4 space-y-1 list-disc text-gray-500">
        <li>Anak 0-2 Th RM 50</li>
        <li>Anak 3-10 Th harga 50 persen dari orang dewasa</li>
        <li>Anak 10 Th ke atas harga sama dengan orang dewasa</li>
      </ul>
    ]
  },
  {
    id: 6,
    image: 'images/sgpr.webp',
    badge: 'Day Trip',
    title: 'Paket Tour One Day Trip Singapore',
    duration: '1 Day',
    tableTitle: 'Harga Paket One Day Trip Singapore',
    prices: [
      { pax: '2 – 3 pax', price: 'RM 450' },
      { pax: '4 – 6 pax', price: 'RM 380' },
      { pax: '7 – 10 pax', price: 'RM 350' },
      { pax: '11 – 15 pax', price: 'RM 320' },
      { pax: '16 – 20 pax', price: 'RM 300' },
      { pax: '21 – 30 pax', price: 'RM 280' },
      { pax: '31 – 40 pax', price: 'RM 260' },
      { pax: '41 – 50 pax', price: 'RM 240', highlight: true }
    ],
    itinerary: (
      <>
        <div>
          <h5 className="text-primary font-bold mb-2">Itinerary</h5>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li><strong>08:00</strong> - Batam – Singapore</li>
            <li><strong>10:00</strong> - Proses Imigrasi</li>
            <li><strong>10:40</strong> - Jewel Changi</li>
            <li><strong>11:20</strong> - Merlion Park</li>
            <li><strong>12:00</strong> - Makan Siang</li>
            <li><strong>13:30</strong> - Shopping Bugis</li>
            <li><strong>15:00</strong> - Gardens by The Bay</li>
            <li><strong>15:30</strong> - Sentosa Island</li>
            <li><strong>15:40</strong> - Universal Studio Singapore, Hard Rock Cafe, Candylicious</li>
            <li><strong>16:20</strong> - Bonus 1X Naik Monorail</li>
            <li><strong>16:30</strong> - Vivo City Mall terbesar di Singapore</li>
            <li><strong>17:30</strong> - Check In, Boarding, Imigrasi</li>
            <li><strong>18:30</strong> - Ferry Singapore ke Batam</li>
          </ul>
        </div>
      </>
    ),
    included: [
      '2 Way Ferry Ticket Batam - Singapore',
      'Seaport Tax Batam & Singapore',
      'Transport Full AC',
      'Tour Guide',
      'Makan Siang',
      'Monorail Ticket'
    ],
    excluded: [
      { text: 'Personal Expenses', icon: crossIcon },
      { text: 'Insurance', icon: crossIcon },
      { text: 'Tips Guide / Driver', icon: crossIcon }
    ],
    payment: [
      'Pembayaran DP / Uang muka minimal 50 persen dari total invoice untuk menggaranti bookingan.',
      'Pelunasan pada saat kedatangan, bisa cash atau transfer ke rekening kami.'
    ],
    terms: [
      '• Program tour bersifat private [ tidak digabung dengan peserta / grup lain ]',
      '• Itinerary dapat berubah sewaktu-waktu tergantung kondisi lapangan',
      '• Wajib membawa Passport yang masih berlaku minimal 6 bulan'
    ]
  }
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Our Destinations</h4>
          <h2 className="text-4xl font-bold text-dark">Popular Tour Packages</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 group"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={pkg.image} alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute top-4 right-4 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {pkg.badge}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark/90 to-transparent p-6 pt-20">
                  <h3 className="text-3xl font-bold text-white mb-1">{pkg.title}</h3>
                  <p className="text-gray-200">{pkg.duration}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-dark mb-4 text-center">{pkg.tableTitle}</h4>
                  {priceTable(pkg.prices)}
                </div>

                <div className="space-y-3">
                  <Accordion title="Tour Itinerary">
                    {pkg.itinerary}
                  </Accordion>

                  <Accordion title="Included">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {pkg.included.map((item, index) => (
                        <li key={index} className="flex items-center">
                          {checkIcon} {item}
                        </li>
                      ))}
                    </ul>
                  </Accordion>

                  <Accordion title="Excluded">
                    <ul className="space-y-1">
                      {pkg.excluded.map((item, index) => (
                        <li key={index} className="flex items-center text-red-500">
                          {item.icon || crossIcon} {item.text || item}
                        </li>
                      ))}
                    </ul>
                  </Accordion>

                  <Accordion title="Sistem Pembayaran">
                    <ul className="list-disc list-inside space-y-2">
                      {pkg.payment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </Accordion>

                  <Accordion title="Ketentuan">
                    <ul className="space-y-2">
                      {pkg.terms.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </Accordion>
                </div>

                <a
                  href={`https://wa.me/6287821136966?text=${encodeURIComponent(`Halo, saya ingin booking paket tour: ${pkg.title} (${pkg.duration}). Mohon informasinya lebih lanjut. Terima kasih.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-dark text-white font-medium py-4 mt-8 rounded-lg hover:bg-primary transition shadow-lg text-lg">
                  Book This Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
