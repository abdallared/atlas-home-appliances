import { useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import './App.css'
import NewsTicker from './components/NewsTicker'
import Home from './pages/Home'
import Products from './pages/Products'
import logo from './assets/logo.png'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    if (location.hash) {
      const elem = document.querySelector(location.hash)
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [location.pathname])

  return (
    <div ref={containerRef}>
      <NewsTicker />
      
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="ATLAS أطلس" className="logo-img" />
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/products">المنتجات</Link></li>
          <li><Link to="/#features">مميزاتنا</Link></li>
          <li><Link to="/#contact">تواصل معنا</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {/* Footer */}
      <footer className="footer-rich">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src={logo} alt="ATLAS أطلس" className="logo-img" style={{ height: '50px' }} />
            </Link>
            <p className="footer-desc">
              شركة أطلس لإستيراد المواد الكهربائية والمنزلية. نجمع بين التكنولوجيا الحديثة والجودة العالية لنقدم لك تجربة استثنائية.
            </p>
          </div>
          
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul className="footer-links-list">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/products">المنتجات</Link></li>
              <li><Link to="/#features">مميزاتنا</Link></li>
              <li><Link to="/#contact">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>الأقسام</h4>
            <ul className="footer-links-list">
              <li><Link to="/products">أجهزة المطبخ</Link></li>
              <li><Link to="/products">أجهزة كهربائية</Link></li>
              <li><Link to="/products">إضاءة حديثة</Link></li>
              <li><Link to="/products">أدوات منزلية</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <ul className="footer-links-list contact-list">
              <li>
                <span>📍</span>
                <span>الكريميه محل رقم 250 21821 Tripoli, Libya</span>
              </li>
              <li>
                <span>📞</span>
                <div dir="ltr" style={{ display: 'inline-block' }}>
                  <div>011111111111</div>
                  <div>012222222222</div>
                </div>
              </li>
            </ul>
            <div className="social-links">
              <a href="https://www.facebook.com/atlas2026/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 أطلس للأجهزة المنزلية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
