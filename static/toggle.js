const lighterize = ({ links, headers, lines, body, toggler }) => {
  body.classList.add("light");
  toggler.classList.add("toggle-light");
  [...links].forEach(({ classList }) => classList.add("a-light"));
  [...headers].forEach(({ classList }) => classList.add("h2-light"));
  [...lines].forEach(({ classList }) => classList.add("hr-light"));
};

const darkerize = ({ links, headers, lines, body, toggler }) => {
  body.classList.remove("light");
  toggler.classList.remove("toggle-light");
  [...links].forEach(({ classList }) => classList.remove("a-light"));
  [...headers].forEach(({ classList }) => classList.remove("h2-light"));
  [...lines].forEach(({ classList }) => classList.remove("hr-light"));
};

const toggle = (elements) => {
  if (isDark()) {
    localStorage.setItem("theme", "light");
    lighterize(elements);
    return;
  }
  if (isLight()) {
    localStorage.setItem("theme", "dark");
    darkerize(elements);
    return;
  }
};

const isDark = () => localStorage.getItem("theme") === "dark";
const isLight = () => localStorage.getItem("theme") === "light";

window.onload = () => {
  const elements = {
    body: document.getElementsByTagName("body")[0],
    links: document.getElementsByTagName("a"),
    headers: document.getElementsByTagName("h2"),
    toggler: document.getElementsByClassName("toggle")[0],
    lines: document.getElementsByTagName("hr"),
  };

  const toggleButton = document.getElementById("toggler");
  toggleButton.onclick = () => toggle(elements);

  // If the theme is not light or dark, set it to dark by default
  if (!['light', 'dark'].includes(localStorage.getItem('theme'))) {
    localStorage.setItem('theme', 'dark');
  }

  if (isDark()) {
    darkerize(elements);
    return;
  }
  
  if (isLight()) {
    lighterize(elements);
    return;
  }
};


