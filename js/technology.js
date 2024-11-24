import "./navMobile.js";
import { readData } from "./readData.js";

const technologies = await readData("technology");

const menu = document.querySelector(".selectionMenu");

menu.addEventListener("click", switchActive);
menu.addEventListener("click", updateInfo);

function switchActive(e) {
    if (! e.target.closest(".selectionMenu")) return;
    Array.from(menu.children).forEach(node => node.removeAttribute("data-active"));
    e.target.dataset.active = "";
}

function updateInfo(e) {
    if (! e.target.closest(".selectionMenu")) return;
    let selected = e.target.textContent;
    let technologySelected = technologies.filter((th, idx) => idx === Number(selected) - 1)[0];
    for (let [node, nodeVal] of Object.entries(technologySelected)) {
        if (node === "images") {
            let container = document.querySelector("picture");
            container.querySelector("source").srcset = nodeVal["portrait"];
            container.querySelector("img").src = nodeVal["landscape"];
        }
        else {
            document.querySelector("." + node).textContent = nodeVal;
        }
    }
}