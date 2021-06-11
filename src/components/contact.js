import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact" className="contact-map">
      <div className="contact">
        <span className="contact__details">
          <FontAwesomeIcon className="icon-phn fw" icon={faPhone} />
          <p>+45-71665956</p>
        </span>
        <span className="contact__details">
          <FontAwesomeIcon className="icon-mail fw" icon={faEnvelope} />
          <p>sv@gmail.com</p>
        </span>
        <a
          className="contact__details fw-links"
          href="https://www.linkedin.com/in/sreelatha-vallabhaneni-37a406b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon-linkedin fw" icon={faLinkedin} />
          <p>Linkedin (sreelatha vallabhaneni)</p>
        </a>
        <a
          className="contact__details fw-links"
          href="https://github.com/Sreelatha-Vallabhaneni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon-github fw" icon={faGithub} />
          <p>Github (Sreelatha-Vallabhaneni)</p>
        </a>
      </div>
      <div class="map">
        <iframe
          title="map"
          width="700"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=taastrup&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
    </div>
  );
}

export default Contact;
