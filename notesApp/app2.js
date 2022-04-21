const notes = document.querySelector(".notes");
const addNote = document.querySelector(".add-note");

addNote.addEventListener("click", () => {
  addNewNote();
});

const addNewNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML += `
          <div class="tools">
              <span class="edit tools-btn"><i class="fa-solid fa-pen-to-square"></i></span>
              <span class="done tools-btn"><i class="fa-solid fa-check"></i></span>
              <span class="trash tools-btn"><i class="fa-solid fa-trash"></i></span>
          </div>
          <div class="content">
              <div class="main"></div>
              <textarea placeholder="Note"></textarea>
          </div>`;

  notes.appendChild(note);

  const trash = note.querySelector(".trash");
  trash.addEventListener("click", () => {
    note.remove();
  });

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  textArea.addEventListener("input", (e) => {
    console.log(e.target.value);
    main.innerText = e.target.value;
  });

  const edit = note.querySelector(".edit");
  const done = note.querySelector(".done");

  edit.addEventListener("click", () => {
    edit.style.display = "none";
    done.style.display = "unset";
    textArea.style.display = "unset";
    main.style.display = "none";
  });

  done.addEventListener("click", () => {
    edit.style.display = "unset";
    done.style.display = "none";
    textArea.style.display = "none";
    main.style.display = "unset";
  });
};
