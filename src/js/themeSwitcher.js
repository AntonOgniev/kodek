const siteWrapper = document.getElementsByTagName("html")[0];
const themeSelect = document.querySelector(".switcher");

const setSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    siteWrapper.setAttribute("data-theme", "dark");
  } else {
    siteWrapper.setAttribute("data-theme", "light");
  }
};

themeSelect.addEventListener("click", (event) => {
  const selectedTheme = event.target.checked;
  if (selectedTheme) {
    siteWrapper.setAttribute("data-theme", "dark");
  } else {
    siteWrapper.setAttribute("data-theme", "light");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (themeSelect.value === "system") {
      setSystemTheme();
    }
  });

document.getElementById("switch").addEventListener("click", function () {
  document.getElementsByClassName("switcher")[0].classList.toggle("switched");
});
