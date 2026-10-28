//get Elements
const heroSection = document.getElementById("hero-section");
const errorMessage = document.getElementById("error-message");

export async function getProfile() {
  try {
    const response = await fetch(new URL("./data.json", import.meta.url));

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const profile = await response.json();

    if (!profile.length) return;

    heroSection.innerHTML = profile
      .map((hero) => {
        const htmlIcon = hero.technologies.find((icon) => icon.name === "HTML");
        const javascriptIcon = hero.technologies.find(
          (icon) => icon.name === "Java Script",
        );
        const tailwindcssIcon = hero.technologies.find(
          (icon) => icon.name === "TailwindCss",
        );
        const vscodeIcon = hero.technologies.find(
          (icon) => icon.name === "vsCode",
        );
        const gitIcon = hero.technologies.find((icon) => icon.name === "git");
        const wordpressIcon = hero.technologies.find(
          (icon) => icon.name === "wordpress",
        );

        return `
        <!--  Section Image -->
        <div class="hidden md:block relative">
          <!--  تصویر دسکتاپ  -->
          <img src="${hero.hero_image}" alt="" id="deskImage" class="w-75 h-120 rounded-full" />
          <!--  سابقه و پروژه های انجام شده  -->
          <p
            id="work-experiences"
            class="absolute top-20 z-10 bg-white p-5 rounded-2xl border border-gray-700 md:-right-3"
          >${hero.experience}</p>
          <p
            id="my-projrcts"
            class="absolute bottom-25 -left-6 bg-white p-5 rounded-2xl border border-gray-700"
          >${hero.completed_projects}</p>
        </div>
        <div
          class="relative isolate aspect-5/6 w-full max-w-112.5 basis-1/2 md:hidden"
        >
          <!-- شکل آبی پشت عکس -->
          <img
            src="public/img/background-accent-clip.svg"
            alt=""
            aria-hidden="true"
            class="absolute top-[-5%] -z-10 h-full w-full translate-x-[4%] translate-y-[7%]"
          />

          <!-- عکس با برش منحنی SVG -->
          <svg
            viewBox="0 0 500 600"
            class="absolute right-[-3.5%] top-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Profile photo"
          >
            <defs>
              <clipPath id="photoClip" clipPathUnits="userSpaceOnUse">
                <path
                  d="
          M247 8
          C205 7 181 72 153 122
          C127 169 92 209 73 264
          C52 323 48 397 66 458
          C82 514 113 560 158 590
          C190 612 220 587 260 573
          C315 554 352 539 392 499
          C430 461 466 427 480 385
          C494 344 482 308 455 280
          C426 249 394 234 369 202
          C345 172 329 124 310 78
          C293 36 273 9 247 8 Z
        "
                />
              </clipPath>
            </defs>

            <image
              id="heroPhoto"
              href="${hero.hero_image}"
              x="0"
              y="0"
              width="500"
              height="600"
              preserveAspectRatio="xMidYMid slice"
              clip-path="url(#photoClip)"
            />
          </svg>
        </div>

        <!--  Section text -->
        <div class="flex min-w-0 flex-col gap-1 basis-2/4">
          <div class="flex flex-col gap-1 large:gap-4 large:my-10">
            <h1
              id="name-user"
              class="font-bold sl:text-lg sd:text-2xl md:text-4xl"
            >${hero.name}</h1>
            <h2
              id="about-title"
              class="font-bold sl:text-lg sd:text-xl md:text-2xl"
            >${hero.role}</h2>
            <p id="intro-text" class="font-normal text-sm md:text-[17px]">${hero.introduction}</p>
          </div>
          <div class="relative">
            <!-- HTML -->
            <img
              src="${htmlIcon?.icon ?? ""}"
              id="html-icon"
              alt=""
              class="absolute left-0 -top-1 md:-top-80 md:right-50 sm:w-15 lg:left-9.5 lg:right-auto lg:-top-82.5 lg:w-19 xl:w-25"
            />

            <!-- JavaScript -->
            <img
              src="${javascriptIcon?.icon ?? ""}"
              id="js-icon"
              alt=""
              class="absolute sl:left-18 -bottom-15 mid:left-30 sm:-bottom-20 sm:left-35 sm:w-15 md:-top-70 md:left-0 lg:-left-37.5 lg:-top-42.5 lg:right-auto lg:w-19 xl:w-25 xl:-left-62.5"
            />

            <!-- tailwind: سمت چپ متن، نه سمت راست -->
            <img
              src="${tailwindcssIcon?.icon ?? ""}"
              id="react-icon"
              alt=""
              class="absolute right-0 sl:-right-6 w-10 sm:w-15 md:-top-50 md:right-80 lg:left-50 lg:right-auto lg:-top-87.5 lg:w-19 xl:w-25"
            />

            <!-- VS Code -->
            <img
              src="${vscodeIcon?.icon ?? ""}"
              alt=""
                class="absolute hidden md:block right-0 sl:-right-6 sm:w-15 md:-top-4 0 md:right-60 lg:-left-25 lg:right-auto lg:-top-14.5 lg:w-19 xl:w-25 xl:-left-12.5"
            />

            <!-- WordPress -->
            <img
              src="${wordpressIcon?.icon ?? ""}"
              alt=""
              class="absolute hidden md:block right-0 sl:-right-6 sm:w-15 md:-top-90 md:right-70 lg:left-8.75 lg:right-auto lg:-top-50 lg:w-19 xl:w-25 xl:left-10 xl:-top-45"
            />

            <!-- git -->
            <img
              src="${gitIcon?.icon ?? ""}"
              alt=""
              class="absolute hidden md:block sm:w-15 md:-top-10 md:-left-10 lg:left-[-150px] lg:right-auto lg:-top-80 lg:w-19 xl:w-25 xl:-left-62.5"
            />
          </div>
        </div>
    `;
      })
      .join("");
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
