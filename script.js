
let btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    let inputField = document.querySelector("#inputField").value;
    let selectedElem = document.querySelector("#selected");
    let output = selectedElem.value;
    
    document.querySelector("#inputField").value = "";
    e.preventDefault();
    if(inputField){
        let ol = document.querySelector(".listitems");
        let li = document.createElement("li");
        li.textContent = `${inputField} and ${output}`;
        ol.appendChild(li);
        var listbtn = document.createElement('button');
        listbtn.textContent = 'Delete'
        listbtn.addEventListener('click', () => li.remove());
        li.appendChild(listbtn); 
    }
 
})