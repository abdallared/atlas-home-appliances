import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import './App.css'
import logo from './assets/logo.png'
import lambImg from './assets/lamb.png'
import orangeImg from './assets/organge.png'
import purpleImg from './assets/purple.png'
import greenImg from './assets/green.png'

gsap.registerPlugin(ScrollTrigger)

const products = [
  { 
    id: 1, 
    name: 'LED Bulb', 
    nameAr: 'لمبات LED',
    price: '40W - 720 Lumens', 
    image: lambImg,
    color: '#1E88E5',
    tagline: 'إضاءة موفرة للطاقة',
    desc: 'لمبات LED عالية الجودة توفر إضاءة ساطعة مع استهلاك منخفض للطاقة وعمر افتراضي طويل.',
    features: ['Real Watt 40W', '720 Lumens', 'Energy Efficient']
  },
  { 
    id: 2, 
    name: 'Deep Casserole', 
    nameAr: 'حلة عميقة',
    price: '16CM / 1.5L', 
    image: orangeImg,
    color: '#E07B39',
    tagline: 'ستانلس ستيل فاخر',
    desc: 'حلل ستانلس ستيل 18/10 Cr-Ni بقاعدة كبسولة للتوزيع المثالي للحرارة.',
    features: ['Capsule Bottom', '18/10 Cr-Ni Stainless Steel', 'Premium Quality']
  },
  { 
    id: 3, 
    name: 'Cookware Set', 
    nameAr: 'طقم أواني طبخ',
    price: 'Multiple Sizes', 
    image: purpleImg,
    color: '#7C4DFF',
    tagline: 'جودة لا تضاهى',
    desc: 'مجموعة متكاملة من أواني الطبخ الستانلس ستيل بأحجام متعددة لتلبية جميع احتياجات مطبخك.',
    features: ['Various Sizes', 'Durable Build', 'Easy to Clean']
  },
  { 
    id: 4, 
    name: 'Kitchen Essentials', 
    nameAr: 'أساسيات المطبخ',
    price: 'Premium Collection', 
    image: greenImg,
    color: '#4CAF50',
    tagline: 'كل ما يحتاجه منزلك',
    desc: 'تشكيلة واسعة من المنتجات المنزلية والكهرومنزلية عالية الجودة.',
    features: ['Home Appliances', 'Kitchenware', 'Decorative Items']
  },
]

const features = [
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ), 
    title: 'جودة مضمونة', 
    titleEn: 'Quality Guaranteed', 
    desc: 'منتجات عالية الجودة' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
        <path d="M8 18h8"/>
      </svg>
    ), 
    title: 'توصيل سريع', 
    titleEn: 'Fast Delivery', 
    desc: 'شحن لجميع أنحاء ليبيا' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ), 
    title: 'دعم فني', 
    titleEn: '24/7 Support', 
    desc: 'خدمة عملاء متميزة' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z"/>
        <path d="M11 3l1 6h10"/>
        <path d="M2 9h20"/>
        <path d="M12 9l-1 13"/>
      </svg>
    ), 
    title: 'تحف وديكور', 
    titleEn: 'Home Decor', 
    desc: 'تشكيلة متنوعة' 
  },
]

function App() {
  const containerRef = useRef(null)
  const productRefs = useRef([])

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

    const heroTl = gsap.timeline({ delay: 0.5 })
    heroTl
      .to('.hero-tag', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.7')
      .to('.hero-subtitle', { opacity: 0.7, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')

    // Product cards diagonal animation with smooth scrub
    const productCards = gsap.utils.toArray('.product-card')
    productCards.forEach((card, index) => {
      const isEven = index % 2 === 0
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          x: isEven ? -100 : 100,
          y: 60,
          rotation: isEven ? -3 : 3,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,
          }
        }
      )
    })

    gsap.utils.toArray('.reveal-text').forEach((elem) => {
      gsap.to(elem, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // Features animation with scrub
    gsap.fromTo('.feature-item', 
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top 85%',
          end: 'top 50%',
          scrub: 0.8,
        }
      }
    )

    // Contact items animation with scrub
    gsap.fromTo('.contact-item', 
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.8,
        }
      }
    )

    // Form animation with scrub
    gsap.fromTo('.form-group', 
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 85%',
          end: 'top 55%',
          scrub: 0.8,
        }
      }
    )

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">
          <img src={logo} alt="ATLAS أطلس" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#products">المنتجات</a></li>
          <li><a href="#features">مميزاتنا</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="section hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <p className="hero-tag">أطلس للمنزلية والكهرومنزلية والتحف</p>
          <h1 className="hero-title">
            <strong>Atlas</strong> أطلس<br />
            <span className="hero-title-sub">Home Appliances</span>
          </h1>
          <p className="hero-subtitle">
            اكتشف تشكيلتنا المتميزة من المنتجات المنزلية والكهرومنزلية والتحف.
            جودة عالية وأسعار منافسة.
          </p>
          <a href="#products" className="hero-cta">
            تصفح المنتجات <span className="arrow">←</span>
          </a>
        </div>
        <div className="scroll-line">
          <span>Scroll</span>
          <div className="line"></div>
        </div>
      </section>

      {/* Products Vertical Section */}
      <section className="products-section" id="products">
        <div className="products-header">
          <p className="section-tag">منتجاتنا</p>
          <h2 className="products-title">تشكيلة <strong>Atlas</strong></h2>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              ref={el => productRefs.current[index] = el}
              style={{ '--product-color': product.color }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              
              <div className="product-content">
                <p className="product-tagline">{product.tagline}</p>
                <h3 className="product-name">{product.name}</h3>
                <h4 className="product-name-ar">{product.nameAr}</h4>
                <p className="product-desc">{product.desc}</p>
                
                <div className="product-features">
                  {product.features.map((feature, i) => (
                    <span key={i} className="product-feature">
                      <span className="feature-dot" style={{ background: product.color }}></span>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="product-btn" style={{ background: product.color }}>
                    التفاصيل <span>←</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-dark" id="features">
        <div className="features-header">
          <p className="section-number reveal-text">لماذا أطلس؟</p>
          <h2 className="section-title reveal-text">مميزات <strong>Atlas</strong></h2>
        </div>
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-title-en">{feature.titleEn}</p>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-info">
          <div>
            <p className="section-number">تواصل معنا</p>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>
              Contact<br /><strong>Us</strong>
            </h2>
          </div>
          <div className="contact-item">
            <p className="contact-label">العنوان</p>
            <p className="contact-value">طريق السياحي - الكريمية</p>
            <p className="contact-value-sub">شارع المدينة بالقرب المحل (D45) - ليبيا</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">الهاتف</p>
            <p className="contact-value" dir="ltr">+218 91 373 8963</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">البريد الإلكتروني</p>
            <p className="contact-value" dir="ltr">INFO@ATLAS.COM.LY</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">الموقع الإلكتروني</p>
            <p className="contact-value" dir="ltr">WWW.ATLAS.COM.LY</p>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="الاسم" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="البريد الإلكتروني" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="الموضوع" />
            </div>
            <div className="form-group">
              <textarea placeholder="رسالتك" required></textarea>
            </div>
            <button type="submit" className="submit-btn">إرسال</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} alt="ATLAS أطلس" className="footer-logo-img" />
        </div>
        <div className="footer-content">
          <p className="footer-tagline">أطلس للمنزلية والكهرومنزلية والتحف</p>
        </div>
        <div className="footer-links">
          <a href="#">الخصوصية</a>
          <a href="#">الشروط</a>
          <a href="#">© 2026</a>
        </div>
      </footer>
    </div>
  )
}

export default App
