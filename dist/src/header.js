export function header() {
  const header = document.createElement("header");
  header.id = "header";
  header.className = "fixed right-0 left-0 bg-white z-50";

  header.innerHTML = `
    <section
        class="xl:max-w-[80%] mx-auto flex gap-1 md:flex-row-reverse justify-between items-center py-4 px-4 z-50"
      >
        <button id="menu-button" class="p-2 text-black z-50 md:hidden cursor-pointer">
          <i id="menu-icon" class="fa-solid fa-bars text-3xl"></i>
        </button>
        <div
          class="relative hidden md:flex md:flex-row-reverse py-5 w-75.5 items-center justify-around overflow-hidden rounded-[17px] bg-black px-3"
        >
          <!-- متن -->
          <span class="relative z-10 flex-1 text-center text-sm text-white">
            برای پروژه جدید در دسترسم!
          </span>
          <!-- دایره -->
          <span
            class="relative z-10 mr-1 h-5 w-5 shrink-0 rounded-full bg-pink-100"
          ></span>
        </div>
        <!--  -->
        <nav
          id="menu"
          class="absolute inset-0 flex sl:flex-col items-center justify-center gap-12 px-6 text-sm font-medium w-full bg-white shadow-sm transition-all duration-300 h-70 md:translate-0 md:rounded-2xl md:static md:h-auto md:w-112.5 md:flex-row md:bg-black md:text-white md:py-5! xl:w-157 rounded-b-4xl -translate-y-full z-40  ease-in "
        >
          <ul
            class="mt-15 flex flex-col items-center justify-center gap-7 md:flex-row md:m-auto"
          >
            <li
              class="btext-center py-2 px-3 rounded-lg md:bg-transparent md:p-0 md:w-auto"
            >
              <a
                href="#home"
                class="transition-colors text-gray-800 font-bold text-sm md:text-white"
                >خانه</a
              >
            </li>
            <li
              class="text-center py-2 px-3 rounded-lg md:bg-transparent md:p-0 md:w-auto"
            >
              <a
                href="#projects"
                class="transition-colors text-gray-800 font-bold text-sm md:text-white"
                >نمونه‌کارها</a
              >
            </li>
            <li
              class="text-center py-2 px-3 rounded-lg md:bg-transparent md:p-0 md:w-auto"
            >
              <a
                href="#about"
                class="transition-colors text-gray-800 font-bold text-sm md:text-white"
                >درباره من</a
              >
            </li>
          </ul>
        </nav>

        <button class="z-50">
          <a
            href="#contact"
            class="flex h-10 w-50 items-center gap-2 rounded-2xl justify-center bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:py-5 md:px-4 md:h-auto"
          >
            ارتباط با من
            <i
              class="fa-solid fa-arrow-up-right-from-square text-xs"
              aria-hidden="true"
            ></i>
          </a>
        </button>
      </section>
  `;

  return header;
}

export function headerMenu() {
  const menu = document.getElementById("menu");
  const menuButton = document.getElementById("menu-button");
  const menuIcon = document.getElementById("menu-icon");

  //  Toggle mobile navigation menu and its icon

  menuButton.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
    menu.classList.toggle("-translate-y-full");
  });
}
