let form = document.querySelector("#form");
let textInput = document.querySelector("#textInput");
let dateInput = document.querySelector("#dateInput");
let textarea = document.querySelector("#textarea");
let msg = document.querySelector("#msg");
let tasks = document.querySelector("#tasks");
let add = document.querySelector("#add");

form.addEventListener("submit", (e) => {
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

let data = {};

let acceptData = () => {
    data['text'] = textInput.value;
    data['date'] = dateInput.value;
    data['description'] = textarea.value;

    createTast();
}

let createTast = () => {
    tasks.innerHTML += `
        <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `;

    form.reset();
}




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