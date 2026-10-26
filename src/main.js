// import header

import { header, headerMenu } from "../src/components/header.js";

const headerElement = header();

document.body.prepend(headerElement);

headerMenu();
