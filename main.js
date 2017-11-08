const buttonAdd = document.getElementById("button-add");
const input = document.getElementById("new-entry");
const list = document.getElementById("list");
const buttonDelete = document.getElementById("button-delete");

buttonAdd.addEventListener("click", () => {
    let entry = input.value;

    if (validar(entry)) {
        let newEntry = document.createElement("li");
        newEntry.appendChild(document.createTextNode(entry));
        list.appendChild(newEntry);
    }
});

buttonDelete.addEventListener("click", () => {
    let childs = list.children;
    
    for (let i = 0; i < childs.length; i++) {
        childs[i].textContent == input.value ? list.removeChild(childs[i]) : "";
    }
});

const validar = text => {
    return text.length > 2 && text.length < 9 ? true : false;
}

