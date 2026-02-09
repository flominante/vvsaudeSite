function ContactPage() {
  return (
    <section className="section alt">
      <div className="container grid-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>We are ready to help you.</h1>
          <p>Phone: +351 000 000 000</p>
          <p>Email: contact@vvsaude.com</p>
          <p>Address: Avenida da Saúde 100, Lisbon</p>
          <p>Hours: Mon–Fri 08:00 to 20:00 | Sat 09:00 to 14:00</p>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <h3>Send us a message</h3>
          <label>
            Name
            <input type="text" required />
          </label>
          <label>
            Phone
            <input type="tel" required />
          </label>
          <label>
            Subject
            <input type="text" required />
          </label>
          <label>
            Message
            <textarea rows="4" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
