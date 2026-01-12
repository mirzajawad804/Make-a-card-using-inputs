let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let form_box = document.querySelector(".form-box");
let body=document.querySelector("body") ;


form.addEventListener("submit", function(dets){
    dets.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let span = document.createElement("span");
    span.textContent = inputs[2].value;

    let aside = document.createElement("aside");
    aside.textContent = inputs[3].value;

    let button = document.createElement("button");
    button.textContent = "Create New Card"
    button.classList.add("btn-sub");


    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(span);
    card.appendChild(aside);
    card.appendChild(button);

    body.appendChild(card);

    form.reset();
    form_box.style.display="none";

    button.addEventListener("click", function(){
        
        location.reload();

    });
});

