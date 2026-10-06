//  Prevent right-click context menu
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Prevent certain key combinations (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U)
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.shiftKey && e.key === "C") ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});
