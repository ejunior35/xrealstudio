import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/images/beispiele/beispiel1.jpg', alt: 'Beispielbild 1' },
    { src: '/images/beispiele/beispiel2.jpg', alt: 'Beispielbild 2' },
  ];

  return (
    <section className="gallery">
      <h2>Beispielbilder</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={200}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
