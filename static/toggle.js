let view = "dark";
const toggle = () => {
  const body = document.getElementsByTagName("body")[0];
  const links = document.getElementsByTagName("a");
  const headers = document.getElementsByTagName("h2");
  const toggle = document.getElementsByClassName("toggle")[0];
  const lines = document.getElementsByTagName("hr");
  if (view === "dark") {
    body.classList.add("light");
    toggle.classList.add("toggle-light");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("a-light");
    }
    for (let i = 0; i < headers.length; i++) {
      headers[i].classList.add("h2-light");
    }
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.add("hr-light");
    }
    view = "light";
    return;
  }
  body.classList.remove("light");
  toggle.classList.remove("toggle-light");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("a-light");
  }
  for (let i = 0; i < headers.length; i++) {
    headers[i].classList.remove("h2-light");
  }
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.remove("hr-light");
  }
  view = "dark";
  return;
};
