(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),(function(){let e=`faray-cart`,t=e=>Number(e).toLocaleString(`en-US`),n=[{id:4,title:`کت لیموناد`,size:`M`,price:298e4,oldPrice:385e4,image:new URL(`/faray/assets/img4-CPaK-yMF.jpg`,``+import.meta.url).href,qty:1},{id:2,title:`تیشرت زیپ`,size:`M`,price:298e4,oldPrice:385e4,image:new URL(`/faray/assets/img2-0rJVXw7p.JPEG`,``+import.meta.url).href,qty:1}],r;try{r=JSON.parse(localStorage.getItem(e))||n}catch{r=n}let i=()=>{try{localStorage.setItem(e,JSON.stringify(r))}catch{}},a=document.createElement(`div`);a.innerHTML=`
    <!-- overlay -->
    <div id="panel-overlay" class="fixed inset-0 z-40 bg-black/40 opacity-0 invisible transition-opacity duration-300"></div>

    <!-- cart drawer -->
    <aside
      id="cart-drawer"
      class="fixed inset-y-0 left-0 z-50 w-[90%] max-w-85 bg-white flex flex-col -translate-x-full transition-transform duration-300 shadow-2xl"
      aria-hidden="true"
    >
      <div class="h-12 bg-[#CFCFCF] flex flex-row items-center justify-between px-4 shrink-0">
        <button type="button" data-close class="flex flex-row items-center gap-x-2 font-sans font-bold text-[12px] text-[#3D3D3D] cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          ادامه خرید
        </button>
        <button type="button" data-close class="text-[#3D3D3D] text-[18px] leading-none cursor-pointer" aria-label="بستن">✕</button>
      </div>

      <div id="cart-items" class="flex-1 overflow-y-auto px-4"></div>

      <div class="shrink-0 px-4 pt-4 pb-6 border-t border-gray-300">
        <div class="flex flex-row flex-wrap justify-between items-center gap-x-3 mb-4">
          <span class="font-sans font-bold text-[14px] text-[#3D3D3D]">جمع:</span>
          <span class="font-Yekan font-bold text-[14px] text-[#3D3D3D]"><span id="cart-total">0</span> تومان</span>
        </div>
        <button type="button" id="cart-checkout" class="w-full h-11 bg-[#666666] hover:bg-black transition text-white font-sans font-bold text-[13px] cursor-pointer">
          خرید
        </button>
      </div>
    </aside>

    <!-- login modal -->
    <div
      id="login-modal"
      class="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4 py-4 opacity-0 invisible transition-opacity duration-300"
      aria-hidden="true"
    >
      <form
        id="login-form"
        class="relative w-full max-w-97.5 max-h-full overflow-y-auto bg-white px-4 sm:px-6 pt-10 sm:pt-8 pb-6 sm:pb-8 flex flex-col shadow-2xl scale-95 transition-transform duration-300"
      >
        <button type="button" data-close class="absolute top-3 left-3 text-gray-400 hover:text-black text-[16px] leading-none cursor-pointer" aria-label="بستن">✕</button>

        <h2 class="font-sans font-bold text-[15px] sm:text-[16px] text-[#3D3D3D] text-center mb-6 sm:mb-8">خوش آمدید</h2>

        <input type="tel" placeholder="شماره همراه"
          class="w-full h-10 border border-gray-300 px-3 text-[13px] font-sans text-right outline-none mb-3 placeholder:text-gray-400 focus:border-black" />

        <div class="relative mb-2">
          <input id="login-pass" type="password" placeholder="کلمه عبور"
            class="w-full h-10 border border-gray-300 pr-3 pl-10 text-[13px] font-sans text-right outline-none placeholder:text-gray-400 focus:border-black" />
          <button type="button" id="toggle-pass" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" aria-label="نمایش رمز">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          </button>
        </div>

        <a href="#" class="font-sans text-[11px] text-gray-400 underline self-start mb-5 sm:mb-6">کلمه عبور خود را فراموش کرده‌اید؟</a>

        <button type="submit" class="w-full h-10 bg-[#3F3F3F] hover:bg-black transition text-white font-sans font-bold text-[13px] mb-5 sm:mb-6 cursor-pointer">ورود</button>

        <div class="flex items-center gap-x-3 mb-4 sm:mb-5">
          <span class="flex-1 h-px bg-gray-300"></span>
          <span class="font-sans text-[11px] text-[#3D3D3D]">ورود از طریق</span>
          <span class="flex-1 h-px bg-gray-300"></span>
        </div>

        <div class="flex flex-col min-[360px]:flex-row gap-3">
          <button type="button" class="flex-1 h-9 border border-gray-300 hover:bg-[#F5F5F5] transition flex items-center justify-center gap-x-2 font-sans text-[11px] text-[#3D3D3D] cursor-pointer">
            ورود با گوگل <span class="font-bold text-[14px] leading-none">G</span>
          </button>
          <button type="button" class="flex-1 h-9 border border-gray-300 hover:bg-[#F5F5F5] transition flex items-center justify-center gap-x-2 font-sans text-[11px] text-[#3D3D3D] cursor-pointer">
            ورود با ایمیل
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
          </button>
        </div>
      </form>
    </div>
  `,document.body.appendChild(a);let o=document.getElementById(`panel-overlay`),s=document.getElementById(`cart-drawer`),c=document.getElementById(`login-modal`),l=document.getElementById(`login-form`),u=document.getElementById(`cart-items`),d=document.getElementById(`cart-total`);function f(){s.classList.add(`-translate-x-full`),s.setAttribute(`aria-hidden`,`true`),c.classList.add(`opacity-0`,`invisible`),c.setAttribute(`aria-hidden`,`true`),l.classList.add(`scale-95`),o.classList.add(`opacity-0`,`invisible`),document.body.classList.remove(`overflow-hidden`)}function p(e){f(),o.classList.remove(`opacity-0`,`invisible`),document.body.classList.add(`overflow-hidden`),e===`cart`?(s.classList.remove(`-translate-x-full`),s.setAttribute(`aria-hidden`,`false`)):e===`login`&&(c.classList.remove(`opacity-0`,`invisible`),c.setAttribute(`aria-hidden`,`false`),l.classList.remove(`scale-95`))}document.querySelectorAll(`[data-open]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),p(e.dataset.open)})}),a.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,f)),o.addEventListener(`click`,f),c.addEventListener(`click`,e=>{e.target===c&&f()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&f()}),document.getElementById(`toggle-pass`).addEventListener(`click`,()=>{let e=document.getElementById(`login-pass`);e.type=e.type===`password`?`text`:`password`}),l.addEventListener(`submit`,e=>e.preventDefault());function m(){r.length?u.innerHTML=r.map((e,n)=>`
        <div class="flex flex-row gap-x-3 py-4 border-b border-gray-300">
          <img src="${e.image}" class="w-16 h-20 object-cover shrink-0" alt="" />
          <div class="flex-1 min-w-0 flex flex-col justify-between gap-y-2">
            <div class="flex flex-row justify-between items-start gap-x-2">
              <div class="min-w-0">
                <h3 class="font-sans font-bold text-[13px] text-[#3D3D3D] mb-1">${e.title}</h3>
                <p class="font-sans text-[10px] text-gray-500">سایز: ${e.size}${e.color?` | رنگ: `+e.color:``}</p>
              </div>
              <button type="button" data-remove="${n}" class="text-gray-400 hover:text-black cursor-pointer shrink-0" aria-label="حذف">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>
              </button>
            </div>
            <div class="flex flex-row flex-wrap justify-between items-end gap-x-2 gap-y-2">
              <div class="flex flex-col">
                ${e.oldPrice?`<span class="font-Yekan text-[10px] text-gray-400 line-through">${t(e.oldPrice)} تومان</span>`:``}
                <span class="font-Yekan font-bold text-[14px] text-rose-700">${t(e.price)} تومان</span>
              </div>
              <div class="w-20 h-7 border border-gray-400 flex flex-row justify-between items-center px-2 font-Yekan text-[13px] text-[#3D3D3D]">
                <button type="button" data-plus="${n}" class="cursor-pointer">+</button>
                <span>${e.qty}</span>
                <button type="button" data-minus="${n}" class="cursor-pointer">−</button>
              </div>
            </div>
          </div>
        </div>`).join(``):u.innerHTML=`<p class="font-sans text-[13px] text-gray-500 text-center pt-16">سبد خرید شما خالی است</p>`,d.textContent=t(r.reduce((e,t)=>e+t.price*t.qty,0)),i()}u.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(t){if(t.dataset.plus!==void 0)r[t.dataset.plus].qty++;else if(t.dataset.minus!==void 0){let e=r[t.dataset.minus];e.qty>1&&e.qty--}else if(t.dataset.remove!==void 0)r.splice(t.dataset.remove,1);else return;m()}}),window.Cart={add(e){let t=Number(e.qty)||1,n=r.find(t=>t.id===e.id&&t.size===e.size&&(t.color||``)===(e.color||``));n?n.qty+=t:r.push({...e,qty:t}),m(),p(`cart`)},open:()=>p(`cart`)},document.getElementById(`cart-checkout`).addEventListener(`click`,()=>{r.length&&(location.href=`./checkout.html`)}),m(),location.hash===`#cart`&&p(`cart`)})();