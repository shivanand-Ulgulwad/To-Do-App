let input = document.getElementById("Input");
let add = document.getElementById("Add");
let result = document.getElementById("result");

input.addEventListener("click",()=>{
  input.removeAttribute("placeholder")
})

add.addEventListener("click", () => {

  input.ariaPlaceholder='';
  if (input.value === "") {
    alert("You must write a To - Do");
  } else {
   
     let container = document.createElement("div");
    container.className="container"
    container.style.position = "relative";
    container.style.marginBottom = "10px";

    let check = document.createElement("input");
    check.className="check";
    check.type = "checkbox";
    check.style.position = "absolute";
    check.style.left = "5px";
    check.style.top = "10px";
    

    let h1 = document.createElement("h1");
    h1.innerHTML = input.value;
    h1.className = "todo"
    h1.style.marginLeft = "40px";
    h1.style.paddingTop = "10px";
    h1.style.fontSize = "20px";

    let span = document.createElement("span");
    span.innerHTML = "X";
    span.style.position = "relative";
    span.className = "delete"
   
    span.style.padding="11px"
    span.style.top = "-21px";
   
    span.style.cursor="pointer"

 

    check.addEventListener("change", () => {
      h1.style.textDecoration = check.checked ? "line-through" : "none";
    });

   
        container.appendChild(h1);
    container.appendChild(check);

    container.appendChild(span);
    result.appendChild(container);
   



     span.addEventListener("click",()=>{
      result.removeChild(container)
      container.removeChild(h1);
      container.removeChild(check);
      container.removeChild(span)
    })

    input.value = "";
    saveData();
  }
});


