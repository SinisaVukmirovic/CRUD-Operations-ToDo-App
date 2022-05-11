let form = document.querySelector("#form");

let input = form.querySelector("#input");
let msg = form.querySelector("#msg");

let posts = document.querySelector("#posts");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
        </div>
    `;

    form.reset();
}