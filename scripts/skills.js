const mySkills = [
    {
        name: "HTML",
        value: 80
    },
    {
        name: "CSS",
        value: 70
    },
    {
        name: "JavaScript",
        value: 80
    },
    {
        name: "SASS",
        value: 100
    },
    {
        name: "BootStrap",
        value: 90
    },
    {
        name: "React",
        value: 40
    },
    {
        name: "Java",
        value: 70
    },
    {
        name: "Spring",
        value: 20
    },
    {
        name: "PostgreSQL",
        value: 100
    }
]

function generateSkills() {
    let target = document.getElementById("skills-wrapper");


    for (let i of mySkills) {

        let skillDiv = document.createElement("div");
        let label = document.createElement("label");
        let progressDiv = document.createElement("div");
        let progress = document.createElement("progress");

        skillDiv.setAttribute("class", "skill");
        label.innerText = i.name
        progressDiv.setAttribute("class", "percentage")
        progressDiv.innerText = i.value + "%";
        progressDiv.style.width = i.value < 30 ? i.value + 20 + "%" : i.value + "%";

        progress.setAttribute("value", i.value);
        progress.setAttribute("max", 100);

        skillDiv.appendChild(label);
        skillDiv.appendChild(progressDiv);
        skillDiv.appendChild(progress)

        target.appendChild(skillDiv)
    }
}

generateSkills();