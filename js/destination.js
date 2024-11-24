import "./navMobile";
import { readData } from "./readData";

let destinations = await readData("destinations");

const destinationNav = document.querySelector(".destinationNav");

destinationNav.addEventListener("click", e => {
    if (e.target.tagName != "A") return;
    let selected = e.target.textContent;
    Array.from(destinationNav.children).forEach(el => {
        el.querySelector("div").removeAttribute("data-active");
    });
    e.target.previousElementSibling.setAttribute("data-active", "");
    let planetData = destinations.filter((record) => {return record["name"] === selected})[0];
    for (let [key, value] of Object.entries(planetData)) {
        let el = document.querySelector("." + key);
        if (key === "images") {
            el.src = "." + value["png"];
        }
        else {
            el.textContent = value;
        }
    }
})