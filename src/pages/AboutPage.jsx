const valuesGallery = [
  {
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    alt: 'Doctor in modern corridor'
  },
  {
    src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    alt: 'Healthcare team discussing results'
  }
];

function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div>
            <p className="eyebrow">About us</p>
            <h1>Committed to excellent healthcare experiences.</h1>
            <p>
              VV Saúde Clinic was created with a mission to deliver trusted care to families,
              professionals and seniors. Our medical center combines specialized consultations,
              diagnostics and preventive programs in a single ecosystem.
            </p>
            <p>
              We are guided by ethics, clinical quality and respectful communication. Every process
              is designed to ensure comfort and efficiency, from first contact to follow-up.
            </p>
          </div>
          <div className="image-grid image-grid-vertical">
            {valuesGallery.map((image) => (
              <figure key={image.alt} className="image-card">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
