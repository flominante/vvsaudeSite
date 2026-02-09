const specialties = [
  {
    title: 'General Medicine',
    description: 'Primary care, check-ups and longitudinal follow-up for all ages.',
    image:
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Cardiology',
    description: 'Screenings and treatments for cardiovascular disease prevention and care.',
    image:
      'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Dermatology',
    description: 'Clinical and aesthetic dermatology with personalized treatment plans.',
    image:
      'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Pediatrics',
    description: 'Development, vaccination and child health support in every stage.',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Orthopedics',
    description: 'Diagnosis and rehabilitation for musculoskeletal conditions and injuries.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Nutrition',
    description: 'Nutritional programs for performance, prevention and healthy habits.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80'
  }
];

function SpecialtiesPage() {
  return (
    <section className="section alt">
      <div className="container">
        <p className="eyebrow">Specialties</p>
        <h1>Clinical areas tailored to patient needs.</h1>
        <div className="card-grid">
          {specialties.map((item) => (
            <article key={item.title} className="feature-card media-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesPage;
