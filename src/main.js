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
