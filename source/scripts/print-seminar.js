document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector(".chapterstart").innerHTML = "";
  document.querySelector("#overview").remove();
  document.querySelector(".chaptersectionlist h3").innerHTML =
    "Sections in this seminar";

  Array.from(document.querySelectorAll(".angry")).forEach(
    el => (el.innerHTML = `<div class="bubble">${el.innerHTML}</div>`)
  );

  [".sectionheader h3 span", ".slide .pos", ".lookuplist div > :first-child"]
    .reduce((acc, sel) => [...acc, ...document.querySelectorAll(sel)], [])
    .forEach(el => (el.innerHTML = el.innerHTML.replace(/^1-/, "")));
});
