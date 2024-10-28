const Footer = () => {
  return (
    <footer className="footer">
      <div className="centering">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, animi.
        </p>
        <div>
          <i className="icon bx bxl-linkedin"></i>
          <i className="icon bx bxl-instagram"></i>
          <i className="icon bx bxl-facebook"></i>
          <i className="icon bx bxl-twitter"></i>
        </div>
      </div>
      <div className="centering">
        <h2>Services</h2>
        <ul>
          <li>Web Design/Development</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>HubSpot Integration</li>
          <li>Email Marketing</li>
          <li>Website Migration</li>
        </ul>
      </div>
      <div className="centering">
        <h2>Career</h2>
        <ul>
          <li>ReactJS Dev.</li>
          <li>Wordpress Dev.</li>
          <li>Python Developer</li>
        </ul>
      </div>
      <div className="centering">
        <h2>Subscribe</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          nobis!
        </p>
        <form>
          <input type="text" />
          <button className="button">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
