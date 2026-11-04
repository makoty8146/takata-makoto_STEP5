const colorButton = document.getElementById("colorButton");
const textInput = document.getElementById("textInput");
const displayButton = document.getElementById("displayButton");
const addButton = document.getElementById("addButton");
const textDisplay = document.getElementById("textDisplay");
const rowCount = document.getElementById("rowCount");
const tableBody = document.getElementById("tableBody");

let dataList = [];

const colors = ["lightblue", "lightgreen", "lightcoral"];
let colorIndex = 0;

colorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length;
});

displayButton.addEventListener("click", function () {
    const text = textInput.value.trim();

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    textDisplay.textContent = text;

    textDisplay.classList.toggle("highlight");
});

function updateTable() {

    tableBody.innerHTML = "";

    dataList.forEach(function (item, index) {

        const tr = document.createElement("tr");

        const tdText = document.createElement("td");
        tdText.textContent = item;

        const tdOperation = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";

        deleteButton.addEventListener("click", function () {

            dataList.splice(index, 1);

            updateTable();
        });

        tdOperation.appendChild(deleteButton);

        tr.appendChild(tdText);
        tr.appendChild(tdOperation);

        tableBody.appendChild(tr);
    });

    rowCount.textContent = "現在の行数: " + dataList.length + " 件";

    if (dataList.length >= 3) {
        displayButton.style.display = "none";
    } else {
        displayButton.style.display = "inline-block";
    }
    
}

addButton.addEventListener("click", function () {

    const text = textInput.value.trim();

    if (text === "") {
        alert("入力値が空です。");
        return;
    }

    dataList.push(text);

    if (dataList.length > 3) {
        dataList.shift();
    }

    updateTable();

    textInput.value = "";
});

for (let i = 1; i <= 5; i++) {
    console.log(i);
}