const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const JavaScriptObfuscator = require("javascript-obfuscator");
const { minify } = require("html-minifier-terser");

const dist = path.join(__dirname, "dist");

// حذف dist قبلی
if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}

// ساخت پوشه‌های مورد نیاز
fs.mkdirSync(path.join(dist, "src"), { recursive: true });

// -------------------------
// 1. Build Tailwind CSS
// -------------------------

console.log("Building Tailwind CSS...");

execSync(
  "npx @tailwindcss/cli -i ./src/input.css -o ./dist/src/output.css --minify",
  { stdio: "inherit" },
);

// -------------------------
// 2. Obfuscate JavaScript
// -------------------------

console.log("Obfuscating JavaScript...");

const js = fs.readFileSync("./src/main.js", "utf8");

const obfuscated = JavaScriptObfuscator.obfuscate(js, {
  compact: true,
  controlFlowFlattening: true,
  deadCodeInjection: true,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 0.75,
});

fs.writeFileSync(
  path.join(dist, "src", "main.js"),
  obfuscated.getObfuscatedCode(),
);

// -------------------------
// 3. Minify HTML
// -------------------------

console.log("Minifying HTML...");

const html = fs.readFileSync("./index.html", "utf8");

minify(html, {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeEmptyAttributes: true,
  useShortDoctype: true,
}).then((result) => {
  fs.writeFileSync(path.join(dist, "index.html"), result);

  console.log("HTML minified.");
  console.log("Build completed successfully!");
});

// -------------------------
// 4. Copy public folder
// -------------------------

if (fs.existsSync("./public")) {
  fs.cpSync("./public", path.join(dist, "public"), {
    recursive: true,
  });
}
