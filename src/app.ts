import createElement from "./lib/createElement";

const div = createElement("div");

div.text("qwelkqwel;kqw;ekl;");
div.className.set(["body", false || "ok", null]);

document.body.appendChild(div.get());
