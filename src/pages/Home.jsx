import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const storyCards = [
  {
    title: "بدايتنا",
    text: "تأسست أطلس برؤية واضحة تهدف إلى إحداث نقلة نوعية في سوق الأجهزة المنزلية والديكور في ليبيا. رحلتنا بدأت بشغف كبير، واليوم نفخر بكوننا الوجهة الرائدة لكل من يبحث عن التميز."
  },
  {
    title: "رؤيتنا",
    text: "نحن لا نبيع منتجات فحسب، بل نقدم حلولاً متكاملة تجعل من منزلك مكاناً أكثر راحة وجمالاً. نؤمن بأن المنزل هو مملكة العائلة، ولذلك نكرس جهودنا لتوفير منتجات تجمع بين الفخامة والعملية."
  },
  {
    title: "التزامنا",
    text: "ننتقي منتجاتنا بعناية فائقة من كبرى الشركات العالمية لنضمن لك الجودة التي تستحقها. كل قطعة في معرضنا تم اختيارها بعناية فائقة لتروي قصة جمال في منزلك."
  }
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
    desc: 'نضمن لك منتجات أصلية 100% مع ضمان حقيقي وشامل لجميع الأجهزة الكهربائية والمنزلية.' 
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
    desc: 'خدمة توصيل سريعة وآمنة تغطي جميع المدن الليبية، مع خيارات دفع متنوعة عند الاستلام.' 
  },
  { 
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ), 
    title: 'دعم فني', 
    titleEn: '24/7 Support', 
    desc: 'فريق متخصص لخدمة العملاء جاهز للإجابة على استفساراتكم وتقديم الدعم الفني على مدار الساعة.' 
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
    desc: 'تشكيلة فريدة من التحف والديكورات التي تضفي لمسة من الأناقة والجمال على منزلك.' 
  },
]

const stats = [
  { number: '+15', label: 'سنة خبرة' },
  { number: '+50k', label: 'عميل سعيد' },
  { number: '+100', label: 'ماركة عالمية' },
  { number: '+24/7', label: 'دعم متواصل' },
]

const testimonials = [
  { 
    id: 1, 
    text: 'تجربة تسوق ممتازة، المنتجات وصلت في الموعد وبجودة عالية جداً. أنصح الجميع بالتعامل مع أطلس.', 
    author: 'محمد الفيتوري', 
    role: 'عميل مميز' 
  },
  { 
    id: 2, 
    text: 'أفضل مكان لشراء الأجهزة المنزلية في ليبيا. خدمة ما بعد البيع رائعة والأسعار منافسة.', 
    author: 'سارة الهوني', 
    role: 'مهندسة ديكور' 
  },
  { 
    id: 3, 
    text: 'التحف الموجودة عندهم لا مثيل لها، أضافت لمسة جمالية رائعة لبيتي. شكراً أطلس.', 
    author: 'أحمد الزروق', 
    role: 'رجل أعمال' 
  },
]


export default function Home() {
  useEffect(() => {
    const heroTl = gsap.timeline({ delay: 0.5 })
    heroTl
      .to('.hero-tag', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.7')
      .to('.hero-subtitle', { opacity: 0.7, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')

    // Story Cards Animation (Diagonal Scroll)
    const cards = gsap.utils.toArray('.story-card')
    cards.forEach((card, index) => {
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

    // Features animation
    gsap.utils.toArray('.reveal-text').forEach((elem) => {
      gsap.fromTo(elem,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          }
        }
      )
    })

    gsap.fromTo('.feature-item', 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top 85%',
        }
      }
    )

    // About animation
    gsap.fromTo('.about-content',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%',
        }
      }
    )

    gsap.fromTo('.about-image',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%',
        }
      }
    )

    // Stats animation
    gsap.fromTo('.stat-item',
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      }
    )

    // Contact items animation
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
        }
      }
    )

    // Form animation
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
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])


  return (
    <>
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
            وجهتك الأولى لكل ما يحتاجه منزلك من أناقة وجودة.
            نجمع بين التكنولوجيا الحديثة والتصاميم العصرية لنقدم لك تجربة استثنائية.
          </p>
          <Link to="/products" className="hero-cta">
            منتجاتنا <span className="arrow">←</span>
          </Link>
        </div>
        <div className="scroll-line">
          <span>Scroll</span>
          <div className="line"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="about-tag">قصتنا</span>
            <h2 className="about-title">أكثر من مجرد متجر،<br />نحن شريكك في المنزل.</h2>
          </div>
          
          <div className="story-cards-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            {storyCards.map((card, index) => (
              <div key={index} className="story-card" style={{ 
                background: 'var(--white)',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid var(--light-gray)',
                textAlign: 'right'
              }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>{card.text}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="product-btn" style={{ padding: '0.8rem 3rem' }}>
              منتجاتنا <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="products-header">
          <p className="section-tag">آراء العملاء</p>
          <h2 className="products-title">ماذا يقول <strong>عملاؤنا</strong></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">{item.author}</div>
              <div className="testimonial-role">{item.role}</div>
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
            <p className="contact-value">الكريميه محل رقم 250</p>
            <p className="contact-value-sub">21821 Tripoli, Libya</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">الهاتف</p>
            <div dir="ltr" className="contact-value">
              <p>011111111111</p>
              <p>012222222222</p>
            </div>
          </div>
          <div className="contact-item">
            <p className="contact-label">فيسبوك</p>
            <a href="https://www.facebook.com/atlas2026/" target="_blank" rel="noopener noreferrer" className="contact-value" style={{ textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              زيارة صفحتنا
            </a>
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
    </>
  )
}
