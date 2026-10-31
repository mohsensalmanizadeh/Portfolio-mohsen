// get Elements
const errorMessage = document.getElementById("error-message");

export async function footer() {
  try {
    const response = await fetch(new URL("./footer.json", import.meta.url));

    const footerApi = await response.json();

    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.className = "bg-black p-3 mt-10";

    footer.innerHTML = footerApi
      .map((contact) => {
        return `
    <div class=" grid grid-cols-2 gap-2 items-center md:grid-cols-3 lg:gap-3">
        <div
          class="bg-[#686767] row-span-2 flex flex-col gap-3 p-3 items-start h-full rounded-2xl lg:rounded-none text-white"
        >
          <h3 class="font-bold text-lg">لینک های مفید</h3>
          <ul class="flex flex-col gap-3.5">
            <li class="text-lg"><a href="#">نمونه کار های من</a></li>
            <li class="text-lg"><a href="#">درباره من</a></li>
            <li class="text-lg"><a href="#">مهارت من</a></li>
            <li class="text-lg"><a href="#">بلاگ</a></li>
          </ul>
        </div>

        <div
          class="bg-[#686767] flex flex-col gap-3 p-2 rounded-2xl h-full lg:rounded-none text-white"
        >
          <h3 class="font-bold text-lg">راه های ارتباطی</h3>
          <ul class="flex flex-col gap-3">
            <li class="flex gap-1 items-center text-lg">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:09981350351">${contact.phone}</a>
            </li>
            <li class="flex gap-1 items-center text-[11px] md:text-lg">
              <i class="fa-solid fa-at"></i>
              <a href="mailto:webilio@gmail.com">${contact.email}</a>
            </li>
          </ul>
        </div>
        <div
          class="relative -left-20 top-10 bg-orange-600 h-50 w-120 rotate-30 hidden md:block xl:w-140 xl:top-10 xl:-left-50 2xl:top-20 2xl:w-100 2xl:-left-80"
        ></div>

        <div
          class="bg-[#686767] flex flex-col gap-3 p-2 rounded-2xl h-full lg:rounded-none text-white"
        >
          <h3>فضای مجازی</h3>
          <ul class="flex flex-col gap-3">
            <li class="flex gap-1 items-center text-lg">
          <a href="https://t.me/Uronik" target="_blank">
             <i class="fa-brands fa-telegram"></i>
              تلگرام
          </a>
            </li>

            <li class="flex gap-1 items-center text-lg">
          <a href="https://instagram.com/awat.dev" target="_blank">
             <i class="fa-brands fa-instagram"></i>
              اینستاگرام
          </a>

            </li>
            <li class="flex gap-1 items-center text-lg">
           <a href="https://www.linkedin.com/in/mohsen-salmanizadeh/" target="_blank">
             <i class="fa-brands fa-linkedin"></i>
              لینکدین
          </a>

            </li>
          </ul>
        </div>
      </div>
  `;
      })
      .join("");
    return footer;
  } catch (error) {
    errorMessage.classList.add(
      "fixed",
      "bottom-6",
      "left-6",
      "z-50",
      "flex",
      "flex-col",
      "gap-3",
      "bg-gray-900",
      "text-white",
      "p-4",
      "rounded-lg",
      "shadow-lg",
      "transition-opacity",
      "duration-300",
      "opacity-100",
      "border-2",
      "border-red-700",
    );
    if (!error.response) {
      errorMessage.textContent = "مشکلی در دریافت اطلاعات بوجود آمده است";
    } else if (error.response.status === 404) {
      errorMessage.textContent = "اطلاعات مورد نظر یافت نشد (کد 404)";
    } else if (error.response.status === 500) {
      errorMessage.textContent = "مشکلی در اتصال با سرور وجود دارد";
    } else {
      errorMessage.textContent = "سایر خطاهای پیش بینی نشده";
    }
  }
}
