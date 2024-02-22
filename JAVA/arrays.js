let array = [];

function addElement() {
    let newElement = document.getElementById("newElement").value;
    array.push(newElement);
    displayArray();
}

function removeElement() {
    if (array.length > 0) {
        array.pop();
    }
    displayArray();
}

function sortArray() {
    array.sort();
    displayArray();
}

function searchElement() {
    let searchText = document.getElementById("searchText").value;
    let position = array.indexOf(searchText);
    if (position !== -1) {
        alert("Elemento encontrado en la posición " + (position + 1));
    } else {
        alert("Elemento no encontrado");
    }
}

function displayArray() {
    let arrayList = document.getElementById("arrayList");
    arrayList.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        li.textContent = array[i];
        arrayList.appendChild(li);
    }
}