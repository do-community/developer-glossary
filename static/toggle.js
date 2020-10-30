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

const fixMarkup = () => {
  const articleHeaders = document.querySelectorAll('.term > h3');
  articleHeaders.forEach((articleHeader) => {
    articleHeader.id = getHeaderId(articleHeader.textContent);
  });

  const examples = document.querySelectorAll('#example');
  const furtherReadings = document.querySelectorAll('#further-reading');
  [...examples, ...furtherReadings].forEach((element) => {
    const term = element.closest('.term');
    const header = term.querySelector('h3');

    const outerHTML = element.outerHTML;
    element.outerHTML = outerHTML.replace(/h2/g, 'h4');
    element.id = `${header.id}-${element.id}`;

    // sets class to example / further-reading
    element.classList.add(element.id);
  });
}

const getHeaderId = (textContent) => {
  return textContent.
    trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9:]/g, '-');
};

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
  }

  if (isLight()) {
    lighterize(elements);
  }

  fixMarkup();
};
