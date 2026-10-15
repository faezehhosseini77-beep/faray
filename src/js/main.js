// فقط برای صفحه اصلی (index.html)
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import './panels.js' // سبد خرید و پنجره ورود

// اسلایدرها (تعداد اسلاید با عرض صفحه عوض می‌شود)
const sliderOptions = {
  slidesPerView: 1,
  spaceBetween: 12,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    380: { slidesPerView: 2, spaceBetween: 12 },
    640: { slidesPerView: 3, spaceBetween: 16 },
    1024: { slidesPerView: 2, spaceBetween: 16 },
    1536: { slidesPerView: 3, spaceBetween: 20 },
  },
}
new Swiper('.mySwiper', sliderOptions)
new Swiper('.mySwiperMardane', sliderOptions)

// عوض شدن عکس اولین محصول با رفتن ماوس روی آن
const image1 = document.querySelector('#image-1')
if (image1) {
  const original = image1.src
  const hover = new URL('../image/content/content-center/img11.JPEG', import.meta.url).href
  image1.addEventListener('mouseenter', () => {
    image1.src = hover
  })
  image1.addEventListener('mouseleave', () => {
    image1.src = original
  })
}