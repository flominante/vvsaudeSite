import { useMemo, useState } from 'react';

const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const bookedAppointments = {
  '2026-02-03': ['09:00 - Cardiology', '14:30 - Dermatology'],
  '2026-02-05': ['10:00 - Pediatrics'],
  '2026-02-08': ['08:30 - General Medicine', '16:00 - Nutrition'],
  '2026-02-12': ['11:30 - Orthopedics'],
  '2026-02-17': ['09:30 - Follow-up'],
  '2026-02-21': ['15:00 - Family Consultation'],
  '2026-02-25': ['10:30 - Check-up']
};

function getMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const firstDayIndex = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < firstDayIndex; i += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

function formatKey(date) {
  return date.toISOString().slice(0, 10);
}

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [requestSent, setRequestSent] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const grid = useMemo(() => getMonthGrid(year, month), [year, month]);

  const monthLabel = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  const selectedKey = selectedDate ? formatKey(selectedDate) : null;
  const selectedAppointments = selectedKey ? bookedAppointments[selectedKey] || [] : [];

  const goToPreviousMonth = () => {
    setSelectedDate(null);
    setRequestSent(false);
    setCurrentDate((value) => new Date(value.getFullYear(), value.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setSelectedDate(null);
    setRequestSent(false);
    setCurrentDate((value) => new Date(value.getFullYear(), value.getMonth() + 1, 1));
  };

  return (
    <section className="section alt">
      <div className="container">
        <p className="eyebrow">Appointments Calendar</p>
        <h1>Check booked appointments and request a new consultation.</h1>

        <div className="calendar-layout">
          <div className="calendar-panel">
            <div className="calendar-header">
              <button type="button" onClick={goToPreviousMonth} aria-label="Previous month">
                ←
              </button>
              <h2>{monthLabel}</h2>
              <button type="button" onClick={goToNextMonth} aria-label="Next month">
                →
              </button>
            </div>

            <div className="calendar-weekdays">
              {weekdayLabels.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="calendar-grid">
              {grid.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} className="calendar-day empty" aria-hidden="true" />;
                }

                const key = formatKey(date);
                const isSelected = selectedKey === key;
                const hasBookings = Boolean(bookedAppointments[key]);

                return (
                  <button
                    key={key}
                    type="button"
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${
                      hasBookings ? 'booked' : ''
                    }`}
                    onClick={() => {
                      setSelectedDate(date);
                      setRequestSent(false);
                    }}
                  >
                    <span>{date.getDate()}</span>
                    {hasBookings && <small>{bookedAppointments[key].length} booked</small>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="calendar-sidebar">
            <h3>{selectedDate ? `Day details: ${selectedKey}` : 'Select a day'}</h3>
            {!selectedDate && (
              <p>Click any available day in the calendar to view current bookings and request an appointment.</p>
            )}

            {selectedDate && (
              <>
                <div className="appointments-box">
                  <h4>Already booked appointments</h4>
                  {selectedAppointments.length > 0 ? (
                    <ul>
                      {selectedAppointments.map((appointment) => (
                        <li key={appointment}>{appointment}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No appointments booked yet for this day.</p>
                  )}
                </div>

                <form
                  className="contact-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setRequestSent(true);
                  }}
                >
                  <h4>Request appointment</h4>
                  <label>
                    Full name
                    <input type="text" required placeholder="Your name" />
                  </label>
                  <label>
                    Phone
                    <input type="tel" required placeholder="+351 ..." />
                  </label>
                  <label>
                    Preferred specialty
                    <input type="text" required placeholder="e.g., Cardiology" />
                  </label>
                  <label>
                    Notes
                    <textarea rows="3" placeholder="Optional details" />
                  </label>
                  <button type="submit">Send request for {selectedKey}</button>
                </form>

                {requestSent && (
                  <p className="request-success">
                    Your appointment request was sent successfully. Our team will contact you soon.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarPage;
