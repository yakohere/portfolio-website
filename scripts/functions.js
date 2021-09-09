const aboutMeStats = [
    {
        name: "Projects Done",
        amount: 20
    },
    {
        name: "Cups of Coffee",
        amount: 300
    },
    {
        name: "Experience in years",
        amount: 5
    },
    {
        name: "Working Hourse",
        amount: 587
    }
]

function createStatistics() {
    let target = document.getElementById("about-me-statistics");

    for (let i of aboutMeStats) {
        let boxDiv = document.createElement("div");
        let amountDiv = document.createElement("div");
        let nameDiv = document.createElement("div");

        boxDiv.setAttribute("class", "box");
        amountDiv.setAttribute("class", "amount");
        nameDiv.setAttribute("class", "name");

        amountDiv.innerText = i.amount
        nameDiv.innerText = i.name

        boxDiv.appendChild(amountDiv);
        boxDiv.appendChild(nameDiv);

        target.appendChild(boxDiv);
    }
}

createStatistics()