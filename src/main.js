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
        scheduleListEl.innerHTML += 
            "<tr>"+
            "<td>" + schema.code + "</td>" +
            "<td>" + schema.coursename + "</td>" +
            "<td>" + schema.progression + "</td>" +
            "<td>" + "<a href='" +schema.syllabus + "'>Kursplan</a></td>" +
            "</tr>";
    })
}

//sortera vid klick på rubrik
document.getElementById("courseCode").addEventListener("click", () =>{ 

    //jämför: om den ena kommer före den andra i alfabetet
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


//sökfunktion
//keyup: när en tangent släpps börjar sökandet
document.getElementById("search").addEventListener("keyup", () => {
    const input = document.getElementById("search");

    //gör alla bokstäver till små bokstäver - value = det som skrivs in i inpput
    const searchWord = input.value.toLowerCase();

    const tableRows = document.querySelectorAll("table tr");

    //let i = 1 för att hoppa över raden med rubriker
    for(let i = 1; i < tableRows.length; i++) {
        //loopa igenom för att kolla om raden stämmer med input. Visa om ja, dölj om nej
        if (tableRows[i].innerText.toLowerCase().includes(searchWord)){
            tableRows[i].style.display = "";
        } else {
            tableRows[i].style.display = "none";
        }
    } 
});