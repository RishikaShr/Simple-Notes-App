const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
    creatediv();
});

const savethefunc = () => {
    const notes = document.querySelectorAll(".content textarea");
    let data = [];
    notes.forEach((note) => {
        data.push(note.value);
    });
    console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

let creatediv = (text = "") => {
    let div = document.createElement("div");
    div.setAttribute("class", "content");
    div.innerHTML = `<div class="update">
    <i class="edit fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;

    const trashbtn = div.querySelector(".trash");
    trashbtn.addEventListener("click", () => {
        div.remove();
        savethefunc();
    });

    const text2=div.querySelector("textarea");
    text2.addEventListener("keyup",()=>{
        savethefunc();
    })

    const savebtn = div.querySelector(".edit");
    savebtn.addEventListener("click", () => {
        savethefunc();
    });

    container.appendChild(div);
    savethefunc();
}

(function () {
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    if (lsnotes === null) {
        creatediv();
    }
    else {
        lsnotes.forEach((lsnote) => {
            creatediv(lsnote);
        })
    }
})()
