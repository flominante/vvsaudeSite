const specialties = [
  {
    title: 'General Medicine',
    description: 'Primary care, check-ups and longitudinal follow-up for all ages.'
  },
  {
    title: 'Cardiology',
    description: 'Screenings and treatments for cardiovascular disease prevention and care.'
  },
  {
    title: 'Dermatology',
    description: 'Clinical and aesthetic dermatology with personalized treatment plans.'
  },
  {
    title: 'Pediatrics',
    description: 'Development, vaccination and child health support in every stage.'
  },
  {
    title: 'Orthopedics',
    description: 'Diagnosis and rehabilitation for musculoskeletal conditions and injuries.'
  },
  {
    title: 'Nutrition',
    description: 'Nutritional programs for performance, prevention and healthy habits.'
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
            <article key={item.title} className="feature-card">
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
