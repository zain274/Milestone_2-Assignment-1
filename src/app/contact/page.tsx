import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => (
  <div className="wrapper">
    <Header />
    <main className="main">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any queries or project discussions.</p>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Enter your message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
    <Footer />
  </div>
);

export default Contact;