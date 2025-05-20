function Footer() {
  return (
    <footer>
      <div className="foot-con">
        <h1>Contact</h1>

        <div className="footcon2">
          <div className="boxes">
            <div className="box name">
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="box mail">
              <input type="text" id="mail" placeholder="Your email address" />
            </div>
            <div className="box message">
              <textarea id="message" placeholder="Your message"></textarea>
            </div>
            <div className="box">
              <button className="btn">Send</button>
            </div>
          </div>

          <div className="iframe-con">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0009852226076!2d3.364662473520911!3d6.5215561934710005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4da6e7985b%3A0xcc91fa8b98376c74!2sThe%20Bulb!5e0!3m2!1sen!2sng!4v1746014618214!5m2!1sen!2sng"
              width="600"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
