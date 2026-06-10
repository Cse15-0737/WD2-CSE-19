import hero from '../assets/hero.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="Promotional banner" />
    </section>
  );
}
