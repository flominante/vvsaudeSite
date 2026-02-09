import { useEffect, useMemo, useState } from 'react';

const slides = [
  {
    title: 'Integrated Clinical Care',
    subtitle: 'Fast appointments with multidisciplinary specialists.',
    cta: 'Book a consultation'
  },
  {
    title: 'Modern Diagnostic Center',
    subtitle: 'Technology and precision for a safer clinical journey.',
    cta: 'See our specialties'
  },
  {
    title: 'Human and Preventive Medicine',
    subtitle: 'Programs for family health, prevention and long-term wellbeing.',
    cta: 'Meet our team'
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slide = useMemo(() => slides[index], [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      <div className="container hero-card">
        <p className="eyebrow">Welcome to VV Saúde Clinic</p>
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
        <button type="button">{slide.cta}</button>

        <div className="slider-indicators" aria-label="Slider controls">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              className={dotIndex === index ? 'active' : ''}
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
