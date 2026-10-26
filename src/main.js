// import header

import { header, headerMenu } from "./components/header.js";

const headerElement = header();

document.body.prepend(headerElement);

headerMenu();
