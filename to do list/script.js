
const addtask = document.querySelector(".add-btn");
const form = document.querySelector("#form");
const Edit = document.querySelector(".edit");
const Delete = document.querySelector(".delete");
const Input = document.querySelector("#head-input")
const todo_el = document.querySelector("#todo_el");

let addtodo = [];




  form.addEventListener("submit",(e)=>{

      e.preventDefault();

    });

    let objstr = localStorage.getItem("Input");
    if(objstr!=null){
      addtodo = JSON.parse(objstr);
    }
    
    addtask.addEventListener("click",()=>{    
      const data = Input.value;
    addtodo.push(
      data,
    );
    save();
    Input.value="";
  });

    function save(){
      let str = JSON.stringify(addtodo);
    localStorage.setItem("Input",str);
     displayfirst();
  }

  // addtodo.forEach((value) => {
    
    
  // });
function displayfirst(){
  if(Input.value==""){
    alert("please enter the message");
  }
  else{
  const div = document.createElement("div");
  div.classList.add("tasks");

  const input = document.createElement("input");
  input.classList.add("input");
  input.type="text";
  input.value=Input.value;
  input.setAttribute("readonly","readonly");

  div.appendChild(input);

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.classList.add("actions");
  edit.innerText= "EDIT";

  const delete_el = document.createElement("button");
  delete_el.classList.add("delete");
  delete_el.classList.add("actions");
  delete_el.innerText= "Delete";

  div.appendChild(edit);
  div.appendChild(delete_el);
  todo_el.appendChild(div);

  edit.addEventListener("click",()=>{
    if (edit.innerText.toLowerCase() == "edit") {
      edit.innerText = "Save";
      input.removeAttribute("readonly");
      input.focus();
    } else {
      edit.innerText = "EDIT";
      input.setAttribute("readonly", "readonly");
    }
  });

 delete_el.addEventListener('click', () => {
    todo_el.removeChild(div);
  });
  };
};
  


  
     function display(){
      addtodo.forEach((value) => {
      // function data_el(){
      const div = document.createElement("div");
      div.classList.add("tasks");
  
      const input = document.createElement("input");
      input.classList.add("input");
      input.type="text";
      input.value=value;
      input.setAttribute("readonly","readonly");
  
      div.appendChild(input);
  
      const edit = document.createElement("button");
      edit.classList.add("edit");
      edit.classList.add("actions");
      edit.innerText= "EDIT";
  
      const delete_el = document.createElement("button");
      delete_el.classList.add("delete");
      delete_el.classList.add("actions");
      delete_el.innerText= "Delete";
  
      div.appendChild(edit);
      div.appendChild(delete_el);
      todo_el.appendChild(div);
  
      edit.addEventListener("click",()=>{
        if (edit.innerText.toLowerCase() == "edit") {
          edit.innerText = "Save";
          input.removeAttribute("readonly");
          input.focus();
        } else {
          edit.innerText = "EDIT";
          input.setAttribute("readonly", "readonly");
        }
      });
  
     delete_el.addEventListener('click', () => {
        todo_el.removeChild(div);
      });
    // };
     });
    };

    window.addEventListener("load",()=>{
      display();
    })
   
  
  


  

    
 
 
  
 

  

    



