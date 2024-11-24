import "./navMobile.js";
import { readData } from "./readData.js";

const crewMenu = document.querySelector(".crewMenu");

const crew = await readData("crew");

crewMenu.addEventListener("click", updateActive);
crewMenu.addEventListener("click", displayCrewMember);

function updateActive(e) {
    if (! e.target.closest(".crewMenu")) return;
    Array.from(crewMenu.children).forEach(node => node.removeAttribute("data-active"));
    e.target.dataset.active = "";    
}

function displayCrewMember(e) {
    if (! e.target.closest(".crewMenu")) return;
    let selected;
    for (let cl of e.target.classList) {
        if (cl.startsWith("crew")) {
            selected = cl.split("_")[1];
            break;
        }
    }
    let crewMember = crew.filter((el, idx) => idx === Number(selected))[0];
    for (let [node, nodeVal] of Object.entries(crewMember)) {
        if (node === "images") {
            document.querySelector("." + node).src = "." + nodeVal["png"];
        }
        else {
            document.querySelector("." + node).textContent = nodeVal;
        }
    }

}