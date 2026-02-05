import { Row, Col } from 'reactstrap'
import './announcement-contact.scss'
import LandingFooter from './LandingFooter'
const AnnouncementContactSection = () => {
  return (
    <>
    <div className="landing-contact-wrapper">

      {/* ANNOUNCEMENT */}
      <div className="announcement-bar text-center">
        <h2>ANNOUNCEMENT</h2>
        <p>
          Check out <span>Pirouette Dance Studio WordPress Theme</span> if You are
          Looking for the <br />
          <strong>Best Dance Studio WordPress Theme!</strong> (theme includes the Events Schedule plugin)
        </p>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-section">
        <Row className="g-0">

          {/* LEFT IMAGE */}
          <Col md="3" className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="contact"
            />
            <div className="contact-mini">
              <div>Email<br /><span>example@gmail.com</span></div>
              <div>Phone<br /><span>+1234 568 963</span></div>
            </div>
          </Col>

          {/* ADDRESS */}
          <Col md="3" className="contact-box">
            <div className="icon">📍</div>
            <h5>ADDRESS</h5>
            <p>
              <strong>INDIA</strong><br />
              College Road, Behind Amardeep<br />
              Bilimora 396321<br />
              Gujarat
            </p>
          </Col>

          {/* WHATSAPP */}
          <Col md="3" className="contact-box">
            <div className="icon">📱</div>
            <h5>Whats App</h5>
            <p>
              <strong>SINGAPORE</strong><br />
              37 A Hong Kong Street, 059676<br />
              Whats App: +65 9272 9897
            </p>
          </Col>

          {/* EMAIL */}
          <Col md="3" className="contact-box">
            <div className="icon">✈️</div>
            <h5>E-MAIL</h5>
            <p>enquiry@ancientyogaacademy.com</p>
          </Col>

        </Row>
      </div>

      {/* FOOTER */}
      <LandingFooter />

    </div>
    </>
  )
}

export default AnnouncementContactSection
