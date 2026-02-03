import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import lambImg from '../assets/lamb.png'
import orangeImg from '../assets/organge.png'
import purpleImg from '../assets/purple.png'
import greenImg from '../assets/green.png'

gsap.registerPlugin(ScrollTrigger)

const electricalProducts = [
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
    id: 7, 
    name: 'Modern Chandelier', 
    nameAr: 'ثريا مودرن',
    price: 'Crystal LED', 
    image: lambImg,
    color: '#1976D2',
    tagline: 'أناقة لا تنتهي',
    desc: 'ثريا بتصميم عصري جذاب تضفي لمسة من الفخامة على صالون منزلك.',
    features: ['Crystal Glass', 'LED Lights', 'Remote Control']
  },
  { 
    id: 9, 
    name: 'Table Lamp', 
    nameAr: 'أباجورة مكتب',
    price: 'Adjustable', 
    image: purpleImg,
    color: '#0277BD',
    tagline: 'إضاءة مريحة',
    desc: 'أباجورة مكتب بتصميم أنيق وإضاءة مريحة للعين للقراءة والعمل.',
    features: ['Adjustable Arm', 'Eye Protection', 'Touch Control']
  },
]

const homeProducts = [
  { 
    id: 2, 
    name: 'Deep Casserole', 
    nameAr: 'حلة عميقة',
    price: '16CM / 1.5L', 
    image: orangeImg,
    color: '#42A5F5',
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
    color: '#1565C0',
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
    color: '#0D47A1',
    tagline: 'كل ما يحتاجه منزلك',
    desc: 'تشكيلة واسعة من المنتجات المنزلية والكهرومنزلية عالية الجودة.',
    features: ['Home Appliances', 'Kitchenware', 'Decorative Items']
  },
  { 
    id: 5, 
    name: 'Smart Blender', 
    nameAr: 'خلاط ذكي',
    price: '1000W High Speed', 
    image: orangeImg,
    color: '#64B5F6',
    tagline: 'قوة وتحمل',
    desc: 'خلاط عالي السرعة لتحضير أشهى العصائر والسموثي في ثوانٍ.',
    features: ['1000W Motor', 'Glass Jar', 'Ice Crush Mode']
  },
  { 
    id: 6, 
    name: 'Coffee Maker', 
    nameAr: 'ماكينة قهوة',
    price: '1.5L Capacity', 
    image: purpleImg,
    color: '#2196F3',
    tagline: 'صباحك أجمل',
    desc: 'ماكينة تحضير القهوة المقطرة مع مؤقت مسبق لتبدأ يومك بنشاط.',
    features: ['Programmable', 'Anti-drip', 'Keep Warm']
  },
  { 
    id: 8, 
    name: 'Granite Pan', 
    nameAr: 'مقلاة جرانيت',
    price: '28CM Non-stick', 
    image: orangeImg,
    color: '#0288D1',
    tagline: 'طهي صحي',
    desc: 'مقلاة جرانيت غير لاصقة تتيح لك الطهي بأقل كمية من الدهون.',
    features: ['Non-stick Coating', 'Scratch Resistant', 'Even Heat']
  },
  { 
    id: 10, 
    name: 'Food Processor', 
    nameAr: 'محضر طعام',
    price: 'Multi-function', 
    image: greenImg,
    color: '#01579B',
    tagline: 'مساعدك الشخصي',
    desc: 'محضر طعام متعدد الوظائف يختصر عليك الوقت والجهد في المطبخ.',
    features: ['Chopping', 'Slicing', 'Kneading']
  },
  { 
    id: 11, 
    name: 'Electric Kettle', 
    nameAr: 'غلاية كهربائية',
    price: '1.7L Stainless', 
    image: orangeImg,
    color: '#039BE5',
    tagline: 'مشروبات ساخنة',
    desc: 'غلاية كهربائية سريعة الغليان بتصميم ستانلس ستيل آمن وصحي.',
    features: ['Auto Shut-off', 'Boil Dry Protection', '360 Base']
  },
  { 
    id: 12, 
    name: 'Decorative Vase', 
    nameAr: 'مزهرية ديكور',
    price: 'Ceramic', 
    image: purpleImg,
    color: '#4FC3F7',
    tagline: 'لمسة فنية',
    desc: 'مزهرية سيراميك بتصميم فني فريد يناسب جميع أنماط الديكور.',
    features: ['Handcrafted', 'Premium Ceramic', 'Unique Design']
  }
]

export default function Products() {
  const productRefs = useRef([])
  const [activeCategory, setActiveCategory] = useState('electrical') // 'electrical' or 'home'

  useEffect(() => {
    // Restore the "Old Scroll" Diagonal Animation
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="products-section" style={{ paddingTop: '120px' }}>
      <div className="products-header">
        <p className="section-tag">كتالوج المنتجات</p>
        <h2 className="products-title">تشكيلة <strong>Atlas</strong></h2>
      </div>

      {/* Category Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setActiveCategory('electrical')}
          style={{
            padding: '0.8rem 2.5rem',
            fontSize: '1rem',
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '600',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: activeCategory === 'electrical' ? 'var(--primary)' : 'var(--white)',
            color: activeCategory === 'electrical' ? 'var(--white)' : 'var(--text-dark)',
            boxShadow: activeCategory === 'electrical' 
              ? '0 4px 15px rgba(30, 136, 229, 0.3)' 
              : '0 2px 8px rgba(0,0,0,0.08)',
            transform: activeCategory === 'electrical' ? 'translateY(-2px)' : 'translateY(0)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          منتجات كهربائية
        </button>
        
        <button 
          onClick={() => setActiveCategory('home')}
          style={{
            padding: '0.8rem 2.5rem',
            fontSize: '1rem',
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '600',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: activeCategory === 'home' ? 'var(--primary)' : 'var(--white)',
            color: activeCategory === 'home' ? 'var(--white)' : 'var(--text-dark)',
            boxShadow: activeCategory === 'home' 
              ? '0 4px 15px rgba(30, 136, 229, 0.3)' 
              : '0 2px 8px rgba(0,0,0,0.08)',
            transform: activeCategory === 'home' ? 'translateY(-2px)' : 'translateY(0)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          منتجات منزلية
        </button>
      </div>

      {/* Electrical Products Section */}
      {activeCategory === 'electrical' && (
        <div>
          <div className="products-header" style={{ marginBottom: '2rem' }}>
            <h3 className="products-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              <strong>منتجات كهربائية</strong>
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              إضاءة LED وحلول كهربائية حديثة
            </p>
          </div>
          <div className="products-grid">
            {electricalProducts.map((product, index) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Home Products Section */}
      {activeCategory === 'home' && (
        <div>
          <div className="products-header" style={{ marginBottom: '2rem' }}>
            <h3 className="products-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              <strong>منتجات منزلية</strong>
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              أدوات مطبخ وأجهزة منزلية عالية الجودة
            </p>
          </div>
          <div className="products-grid">
            {homeProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card"
                ref={el => productRefs.current[electricalProducts.length + index] = el}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
