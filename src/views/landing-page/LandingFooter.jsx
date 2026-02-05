import { GitHub, Twitter, Facebook, Instagram } from 'react-feather'
import './landing-footer.scss'

const LandingFooter = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-content">

        {/* LEFT TEXT */}
        <div className="footer-left">
          © 2026 Pixinvent, Made with <span className="heart">❤️</span> for a better web.
        </div>

        {/* RIGHT ICONS */}
        <div className="footer-right">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <GitHub size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={18} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default LandingFooter
