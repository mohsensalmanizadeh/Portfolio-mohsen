const sliderElement = document.querySelector(".mySwiper");
const wrapper = sliderElement.querySelector(".swiper-wrapper");
const pagination = document.querySelector(".my-pagination");
const errorMessage = document.getElementById("error-message");

let swiper;

export async function getProject() {
  try {
    const response = await fetch(new URL("./project.json", import.meta.url));

    const projects = response.json();

    if (!projects.length) return;

    wrapper.innerHTML = projects
      .map(
        (project) => `
          <div class="swiper-slide">
            <div
              class="flex items-center justify-center bg-black
              rounded-2xl text-center text-lg w-full py-7 px-5"
            >
              <div class="sm:px-5 w-full">

                <div class="text-white flex items-center justify-between">
                  <h2 class="font-bold text-lg sm:text-2xl">
                    ${project.name}
                  </h2>

                  <img
                    src="${project.image}"
                    alt="${project.name}"
                    class="w-15 h-15 lg:w-20 lg:h-20"
                  />
                </div>

                <div class="flex items-center justify-around gap-1
                  text-white mt-10">

                  <div class="flex flex-col items-center gap-2">
                    <p class="text-sm lg:text-lg">مدت زمان</p>
                    <h3 class="font-bold text-lg lg:text-2xl">
                      ${project.duration}
                    </h3>
                  </div>

                  <div class="h-12 w-px bg-gray-300"></div>

                  <div class="flex flex-col items-center gap-2">
                    <p class="text-sm lg:text-lg">کارفرما</p>
                    <h3 class="font-bold text-lg lg:text-2xl">
                      ${project.client}
                    </h3>
                  </div>

                  <div class="h-12 w-px bg-gray-300"></div>

                  <div class="flex flex-col items-center gap-2">
                    <p class="text-sm lg:text-lg">نوع پروژه</p>
                    <h3 class="font-bold text-lg lg:text-2xl">
                      ${project.project_type}
                    </h3>
                  </div>
                </div>

                <div class="text-white mt-10 flex flex-col items-end">
                  <p class="text-right">
                    ${project.description}
                  </p>

                  <a
                    href="#"
                    class="bg-[#7E7E7E] py-3 px-10 rounded-2xl mt-5"
                  >
                    بیشتر
                    <i class="fa fa-arrow-left"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        `,
      )
      .join("");

    swiper?.destroy(true, true);

    swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 16,

      loop: false,
      loopAddBlankSlides: false,

      pagination: {
        el: pagination,
        clickable: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 24,
        },
      },
    });
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
