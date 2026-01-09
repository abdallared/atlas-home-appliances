import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './NewsTicker.css'

const newsItems = [
  "🔥 عروض خاصة لفترة محدودة على الأجهزة الكهربائية",
  "🚚 توصيل مجاني لجميع الطلبات داخل طرابلس",
  "🆕 وصول تشكيلة جديدة من أطقم المطبخ التركية",
  "❄️ تخفيضات الصيف على المكيفات والثلاجات",
  "✨ زوروا صفحتنا على فيسبوك لمعرفة المزيد من التفاصيل",
  "📞 خدمة عملاء متوفرة على مدار الساعة: 0913738963"
]

export default function NewsTicker() {
  const tickerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const ticker = tickerRef.current
    const inner = innerRef.current
    
    // Duplicate content for seamless loop
    const content = inner.innerHTML
    inner.innerHTML = content + content + content

    const totalWidth = inner.scrollWidth / 3
    
    gsap.to(inner, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    })
  }, [])

  return (
    <div className="news-ticker-wrap" ref={tickerRef}>
      <div className="news-ticker-inner" ref={innerRef}>
        {newsItems.map((item, index) => (
          <div key={index} className="ticker-item">
            <span className="ticker-dot">•</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
