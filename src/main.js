import './style.css'

document.addEventListener("DOMContentLoaded", async () => {
    getCourseData();
})

async function getCourseData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";
    try {
        const response = await fetch(url);
        const ramschema = await response.json();
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