for (let i = 0; i < 16; i++) {
    const newRow = document.createElement("div");
    newRow.setAttribute("id", `row${i}`);
    newRow.setAttribute("class", "row");
    document.getElementById("container").appendChild(newRow);
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", `${i} ${j}`);
        newDiv.setAttribute("class", "box");
        document.getElementById(`row${i}`).appendChild(newDiv);
        newDiv.addEventListener("mouseover", changeColor);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "white";
}

document.getElementById("size").addEventListener("click", changeSize);

function changeSize() {
    let number = prompt("Put number");
    if (number > 100)
        do {
            number = prompt("Can't higher then 100");
        } while (number > 100);
    document.querySelectorAll(".row").forEach((row) => {
        row.remove();
    });

    for (let i = 0; i < number; i++) {
        const newRow = document.createElement("div");
        newRow.setAttribute("id", `row${i}`);
        newRow.setAttribute("class", "row");
        document.getElementById("container").appendChild(newRow);
        for (let j = 0; j < number; j++) {
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", `${i} ${j}`);
            newDiv.setAttribute("class", "box");
            newDiv.addEventListener("mouseover", changeColor);
            document.getElementById(`row${i}`).appendChild(newDiv);
        }
    }
}
