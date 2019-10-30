let colors = {color1:'#d6eadf', 
color2 :'#b8e0d2',
 color3 :'#95b8d1',
  color4 :'#809bce'}
let arr = [];
let numnote = 0;
let notes = document.getElementById("notes");

function closeNote(note) {
  note.style.display = "none";
}

function newNote() {
  numnote++;
  let Note = document.createElement("div");
  Note.innerHTML = addnote(numnote);
  addtoborde(Note);
}

function addnote(numnote) {
  let top = Math.floor(Math.random() * Math.floor(1000));
  let left = Math.floor(Math.random() * Math.floor(1000));

  let note = ` <div class="note" id="note" style="top: ${top}px; left: ${left}px">
      <textarea id="note${numnote}"> </textarea>    
        <div class="noteColor">
          <button class="btn1" onclick="changecolor('color1', this.parentElement.parentElement)" > </button>
          <button class="btn2" onclick="changecolor('color2', this.parentElement.parentElement)"> </button>
          <button class="btn3" onclick="changecolor('color3', this.parentElement.parentElement)"> </button>
          <button class="btn4" onclick="changecolor('color4', this.parentElement.parentElement)"> </button>
        </div>
        <span class="cancel" id="closeNote" onclick="closeNote(this.parentElement)" >X</span>
      </div>`
  return note;
}

function addtoborde(Note) {
  notes.appendChild(Note);
}

function changecolor(color,note) {
  
  switch (color) {
    case 'color1' :
        note.firstElementChild.style.backgroundColor=colors.color1;
        break;
    case 'color2':
        note.firstElementChild.style.backgroundColor=colors.color2;
        break;
    case 'color3':
        note.firstElementChild.style.backgroundColor=colors.color3;
        break;   
    case 'color4':
        note.firstElementChild.style.backgroundColor=colors.color4;
        break; 
  }
  
}