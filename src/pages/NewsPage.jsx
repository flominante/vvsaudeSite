const news = [
  {
    title: 'Clinic extends evening consultations',
    date: '2026-01-12',
    summary: 'New opening schedule to improve convenience for working patients.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Heart health campaign launched',
    date: '2025-12-01',
    summary: 'Free blood pressure and risk assessments during preventive care week.',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'New pediatric wing inaugurated',
    date: '2025-10-20',
    summary: 'A dedicated and family-friendly area for children consultations.',
    image:
      'https://images.unsplash.com/photo-1511174511562-5f97f4f4a95a?auto=format&fit=crop&w=1200&q=80'
  }
];

function NewsPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">News</p>
        <h1>Latest updates from VV Saúde Clinic.</h1>
        <div className="news-list">
          {news.map((item) => (
            <article key={item.title} className="news-item media-card news-media-item">
              <img src={item.image} alt={item.title} loading="lazy" />
              <p className="news-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsPage;
