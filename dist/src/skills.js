// get Elements
const slider = document.querySelector(".skillsSwiper");
const wrapper = slider.querySelector(".swiper-wrapper");
const pagination = document.querySelector(".skills-pagination");
const errorMessage = document.getElementById("error-message");

let skillsSwiper;

export async function getSkills() {
  try {
    const response = await fetch(new URL("./skills.json", import.meta.url));

    const skills = await response.json();

    if (!skills.length) return;

    wrapper.innerHTML = skills
      .map(
        (project) => `
       <div  class="swiper-slide">
              <div
                class="flex mt-8 items-center justify-center bg-black rounded-2xl text-center text-lg w-full py-4 px-2 gap-3 md:gap-7 md:flex-col md:items-start md:px-15 md:py-10 "
              >
                <img src="${project.icon}" alt="" class="w-9  sm:w-13 sm:h-12  rounded-full" />
                <h3 class="text-white text-sm sm:text-2xl">${project.name}</h3>
                <p class="text-white text-right hidden md:block">
                  ${project.description} 
                </p>
              </div>
            </div>
    `,
      )
      .join("");
    skillsSwiper?.destroy(true, true);

    skillsSwiper = new Swiper(".skillsSwiper", {
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 16,

      loop: false,

      pagination: {
        el: pagination,
        clickable: true,
        clickable: true,
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
