const team = [
  {
    name: 'Dr. Ana Martins',
    role: 'Medical Director',
    photo:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Dr. Ricardo Silva',
    role: 'Cardiologist',
    photo:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Dr. Inês Rocha',
    role: 'Dermatologist',
    photo:
      'https://images.unsplash.com/photo-1594824475544-3faad1b7a3f6?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Dr. Pedro Vaz',
    role: 'Orthopedist',
    photo:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Dr. Sofia Brito',
    role: 'Pediatrician',
    photo:
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Dra. Marta Leal',
    role: 'Nutritionist',
    photo:
      'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80'
  }
];

function TeamPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Our team</p>
        <h1>Experienced professionals dedicated to your wellbeing.</h1>
        <div className="card-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card media-card">
              <img src={member.photo} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
