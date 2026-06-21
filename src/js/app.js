import NewPicture from "./jumper";

document.addEventListener("DOMContentLoaded", () => {
  const widget = new NewPicture(document.querySelectorAll(".cell"));

  window.widget = widget;

  const jumpImage = setInterval(() => {
    widget.addPicture();
  }, 1000);
});
