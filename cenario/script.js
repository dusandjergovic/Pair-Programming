function createEl(tag, classList, value) {
  const el = document.createElement(`${tag}`);
  el.classList.add(`${classList}`);
  el.innerText(`${value}`);
  return el;
}

const body = document.querySelector("body");

const header = createEl("header", "header", "");
body.appendChild(header);
