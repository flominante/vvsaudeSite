const news = [
  {
    title: 'Clinic extends evening consultations',
    date: '2026-01-12',
    summary: 'New opening schedule to improve convenience for working patients.'
  },
  {
    title: 'Heart health campaign launched',
    date: '2025-12-01',
    summary: 'Free blood pressure and risk assessments during preventive care week.'
  },
  {
    title: 'New pediatric wing inaugurated',
    date: '2025-10-20',
    summary: 'A dedicated and family-friendly area for children consultations.'
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
            <article key={item.title} className="news-item">
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
