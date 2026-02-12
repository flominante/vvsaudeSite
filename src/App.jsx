import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import CalendarPage from './pages/CalendarPage';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/specialties', label: 'Specialties' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
  { to: '/calendar', label: 'Calendar' }
];

function App() {
  return (
    <div className="app-shell">
      <header className="top-header">
        <div className="container header-content">
          <div className="brand">
            <span className="brand-mark">VV</span>
            <div>
              <strong>VV Saúde Clinic</strong>
              <p>Modern care, close to you.</p>
            </div>
          </div>
          <nav className="main-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h4>VV Saúde Clinic</h4>
            <p>
              A complete healthcare clinic with focused prevention, diagnosis and treatment.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+351 000 000 000</p>
            <p>contact@vvsaude.com</p>
            <p>Lisbon, Portugal</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
