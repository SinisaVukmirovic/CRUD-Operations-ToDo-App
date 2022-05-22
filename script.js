let form = document.querySelector("#form");
let textInput = document.querySelector("#textInput");
let dateInput = document.querySelector("#dateInput");
let textarea = document.querySelector("#textarea");
let msg = document.querySelector("#msg");
let tasks = document.querySelector("#tasks");
let add = document.querySelector("#add");

form.addEventListener("submit", e => {
    e.preventDefault();

    formValidation();
});
  
let formValidation = () => {
    // if (textInput.value === "") {
    if (!textInput.value) {
      console.log("failure");
      msg.innerHTML = "Task cannot be blank";
    } else {
      console.log("success");
      msg.innerHTML = "";

      acceptData();

      add.setAttribute('data-bs-dismiss', 'modal');
      // simulating mouse click, to make the modal close after ADD btn click
      add.click();

      (() => {
        add.setAttribute('data-bs-dismiss', '');
      })()
    }
};

// let data = {};
let data = [];


let acceptData = () => {
    data.push({
      text: textInput.value,
      date: dateInput.value,
      description: textarea.value
    });

    localStorage.setItem('CRUD-App-Data', JSON.stringify(data));
    // console.log(data) 

    // data['text'] = textInput.value;
    // data['date'] = dateInput.value;
    // data['description'] = textarea.value;

    createTasks();
}

let createTasks = () => {
    tasks.innerHTML = '';

    data.map((x, y) => {

      return tasks.innerHTML += `
        <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this); createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
      `; 
    });

    form.reset();
}

let deleteTask = e => {
  e.parentElement.parentElement.remove();

  data.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem('CRUD-App-Data', JSON.stringify(data));

  // console.log(e.parentElement.parentElement.id)
}

let editTask = e => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  // selectedTask.remove();
  deleteTask(e);
}

(() => {
  data = JSON.parse(localStorage.getItem('CRUD-App-Data')) || [];

  createTasks();
  console.log(data);
})();


// logic for dummy app
// let form = document.querySelector("#form");

// let input = form.querySelector("#input");
// let msg = form.querySelector("#msg");

// let posts = document.querySelector("#posts");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     formValidation();
// });

// let formValidation = () => {
//     if (input.value === "") {
//         msg.innerHTML = "Post cannot be blank";
//         console.log("failure");
//     } else {
//         console.log("successs");
//         msg.innerHTML = "";
//         acceptData();
//     }
// }

// let data = {};

// let acceptData = () => {
//     data['text'] = input.value;
    
//     createPost();
// }

// let createPost = () => {
//     posts.innerHTML += `
//         <div>
//             <p>${data.text}</p>
//             <span class="options">
//                 <i onClick="editPost(this)" class="fas fa-edit"></i>
//                 <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
//             </span>
//         </div>
//     `;

//     form.reset();
// }

// let deletePost = (e) => {
//     e.parentElement.parentElement.remove();
// }

// let editPost = (e) => {
//     input.value = e.parentElement.previousElementSibling.innerHTML;
//     e.parentElement.parentElement.remove();
// }