"use strict";
import './style.css'

document.addEventListener("DOMContentLoaded", async () => {
    getCourseData();
})

let ramschema = [];

async function getCourseData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";
    try {
        const response = await fetch(url);
        ramschema = await response.json();
        showRamSchema(ramschema);
    } catch (error) {
        console.error("Något gick fel: " + error);
    }
}

function showRamSchema(ramschema) {
    const scheduleListEl = document.querySelector("#ramschema");

    scheduleListEl.innerHTML = "";

    //loopa
    ramschema.forEach(schema => {
        scheduleListEl.innerHTML += `
            <tr>
             <td>${schema.code}</td>
             <td>${schema.coursename}</td>
             <td>${schema.progression}</td>
             <td><a href="${schema.syllabus}" target="_blank">Kursplan</a></td>
             </tr>`
    })
}

//sortera vid klick på rubrik
document.getElementById("courseCode").addEventListener("click", () =>{ 
    ramschema.sort((a, b) => a.code.localeCompare(b.code));
        showRamSchema(ramschema);
})

document.getElementById("courseName").addEventListener("click", () => {
    ramschema.sort((a, b) => a.coursename.localeCompare(b.coursename));
    showRamSchema(ramschema);
})

document.getElementById("courseProgress").addEventListener("click", () => {
    ramschema.sort((a, b) => a.progression.localeCompare(b.progression));
    showRamSchema(ramschema);
})