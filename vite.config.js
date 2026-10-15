import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  // اسم مخزن در گیت‌هاب (آدرس سایت: https://USERNAME.github.io/faray/)
  base: '/faray/',
  build: {
    rollupOptions: {
      // Vite به‌صورت پیش‌فرض فقط index.html را می‌سازد؛ بقیه صفحه‌ها باید اینجا باشند
      input: {
        main: page('index.html'),
        new: page('new.html'),
        product: page('product.html'),
        checkout: page('checkout.html'),
      },
    },
  },
})
