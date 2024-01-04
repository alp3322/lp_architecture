//couterUp
const counts = document.querySelectorAll(".counter");
const speed = 180;
counts.forEach((textInformationalMenu) => {
  function upData() {
    const target = Number(textInformationalMenu.getAttribute("number-target"));
    const counter = Number(textInformationalMenu.innerText);
    const inc = target / speed;
    if (counter < target) {
      textInformationalMenu.innerText = Math.ceil(inc + counter);
      setTimeout(upData, 1);
    } else {
      textInformationalMenu.innerText = target;
    }
  }
  upData();
});
