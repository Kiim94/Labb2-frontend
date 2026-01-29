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

    //loopa
    ramschema.forEach(schema => {
        scheduleListEl.innerHTML += `
        <table>
            <tr>
             <th>Kurskod</th>
             <th>Kursnamn</th>
             <th>Progression</th>
             <th>Kursplan</th>
             </tr>
             <tr>
             <td>${schema.code}</td>
             <td>${schema.coursename}</td>
             <td>${schema.progression}</td>
             <td>${schema.progression}</td>`
    })
}