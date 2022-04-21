const notes = document.querySelector(".notes");
const note = document.querySelector(".note");
const textArea = document.querySelector("textArea");
const main = document.querySelector(".main");
const edit = document.querySelector(".edit");
const done = document.querySelector(".done");
const trash = document.querySelector(".trash");
const addNote = document.querySelector(".add-note");

const noteFunction = () => {
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

  textArea.addEventListener("input", (e) => {
    console.log(e.target.value);
    main.innerText = e.target.value;
  });

  trash.addEventListener("click", () => {
    note.parentNode.removeChild(note);
  });
};

noteFunction();

// Main Document

// Put bottom element into the notes element and change the script src to app.js then this script will work...

// <div class="note note-0">
//   <div class="tools">
//     <span class="edit tools-btn">
//       <i class="fa-solid fa-pen-to-square"></i>
//     </span>
//     <span class="done tools-btn">
//       <i class="fa-solid fa-check"></i>
//     </span>
//     <span class="trash tools-btn">
//       <i class="fa-solid fa-trash"></i>
//     </span>
//   </div>
//   <div class="content">
//     <div class="main"></div>
//     <textarea placeholder="Note"></textarea>
//   </div>
// </div>;
