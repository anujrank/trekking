import React from 'react'

function Gallery() {
  const gallery = [
    { id: 1, src: '/gallery1.png', alt: 'Trek Gallery 1' },
    { id: 2, src: '/gallery2.png', alt: 'Trek Gallery 2' },
    { id: 3, src: '/gallery3.png', alt: 'Trek Gallery 3' },
    { id: 4, src: '/gallery4.png', alt: 'Trek Gallery 4' },
    { id: 5, src: '/gallery5.png', alt: 'Trek Gallery 5' },
    { id: 6, src: '/gallery6.png', alt: 'Trek Gallery 6' },
    { id: 7, src: '/gallery7.png', alt: 'Trek Gallery 7' },
    { id: 8, src: '/gallery8.png', alt: 'Trek Gallery 8' },
    { id: 9, src: '/gallery9.png', alt: 'Trek Gallery 9' },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 p-4">
      {gallery.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="w-full aspect-square object-cover rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  )
}

export default Gallery
