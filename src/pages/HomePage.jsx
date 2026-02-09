import HeroSlider from '../components/HeroSlider';

const specialties = [
  'General and Family Medicine',
  'Cardiology and Vascular Health',
  'Dermatology and Aesthetic Care',
  'Pediatrics',
  'Orthopedics and Rehabilitation',
  'Nutrition and Preventive Programs'
];

const partners = ['MedLab Diagnostics', 'Saúde Prime Insurance', 'City Hospital', 'Wellness+'];

function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">About the clinic</p>
            <h2>Healthcare focused on quality, trust and innovation.</h2>
            <p>
              VV Saúde Clinic was designed to offer integrated treatment with modern
              infrastructure and an exceptional patient experience. We combine a human approach
              with advanced medical resources.
            </p>
          </div>
          <div className="info-card">
            <h3>Why choose us</h3>
            <ul>
              <li>Extended opening hours and easy scheduling</li>
              <li>Digital patient records and secure communication</li>
              <li>Multidisciplinary team with recognized specialists</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <p className="eyebrow">Specialties</p>
          <h2>Comprehensive care in one place</h2>
          <div className="card-grid">
            {specialties.map((item) => (
              <article key={item} className="feature-card">
                <h3>{item}</h3>
                <p>Expert care provided by professionals with patient-centered protocols.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Partners</p>
            <h2>Network and institutions that support our care quality.</h2>
            <div className="pill-row">
              {partners.map((partner) => (
                <span key={partner} className="pill">
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <h3>Quick contact</h3>
            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="How can we help?" required />
            </label>
            <button type="submit">Send message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
