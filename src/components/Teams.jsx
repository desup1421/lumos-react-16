import Card from './Card';

const Teams = () => {
  return (
    <section className="teams-section">
      <p className="section-title">\Team\</p>
      <h2>Our Leaders</h2>
      <div className="team-cards">
        <Card name="John Doe" position="CEO" />
        <Card name="Asep" position="CEO" />
        <Card name="Budi" position="CEO" />
        <Card name="Cecep" position="CEO" />
        <Card name="Dede" position="CEO" />
        <Card name="Ema" position="CEO" />
        <Card name="Ferdi" position="CEO" />
        <Card name="Gina" position="CEO" />
      </div>
    </section>
  );
};

export default Teams;
