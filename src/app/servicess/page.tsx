import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => (
  <div className="wrapper">
    <Header />
    <main className="main">
      <h1>Our Services</h1>
      <ul>
        <li>Custom Software Development</li>
        <li>Web Application Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
      </ul>
    </main>
    <Footer />
  </div>
);

export default Services;