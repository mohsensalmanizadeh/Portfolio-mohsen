// import header

import { header, headerMenu } from "./header.js";

const headerElement = header();

document.body.prepend(headerElement);

headerMenu();

// importing hero section

import { getProfile } from "./hero.js";
getProfile();

// importing section project

import { getProject } from "./project.js";
getProject();

// importing skills

import { getSkills } from "./skills.js";
getSkills();

// import footer

import { footer } from "./footer.js";

const footerElement = await footer();

document.querySelector("main").insertAdjacentElement("afterend", footerElement);
