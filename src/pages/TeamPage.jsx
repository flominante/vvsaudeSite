const team = [
  { name: 'Dr. Ana Martins', role: 'Medical Director' },
  { name: 'Dr. Ricardo Silva', role: 'Cardiologist' },
  { name: 'Dr. Inês Rocha', role: 'Dermatologist' },
  { name: 'Dr. Pedro Vaz', role: 'Orthopedist' },
  { name: 'Dr. Sofia Brito', role: 'Pediatrician' },
  { name: 'Dra. Marta Leal', role: 'Nutritionist' }
];

function TeamPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Our team</p>
        <h1>Experienced professionals dedicated to your wellbeing.</h1>
        <div className="card-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <div className="avatar">{member.name.slice(0, 2).toUpperCase()}</div>
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
