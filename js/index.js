
let arr = [];
let numnote = 0;
let note = document.getElementById("note");
function closeNote() {
   note.style.display = "none";
    document.getElementById("note").innerHTML = "";
  }
  function newNote() {
    numnote++;
    arr.push(numnote);
    let liitem = document.createElement("div");
    liitem.innerHTML = addnotes(numnote);
    let list = document.getElementById("notes");
    arr[Math.floor(Math.random() * arr.length)]; 
    addtoborde();
   }
   function addnotes(numnote) {
    let notes = ` <div class="note" id="notes">
    <textarea id=${numnote}> </textarea>    
    <div class="noteColor">
        <button class="btn1"> </button>
        <button class="btn2"> </button>
        <button class="btn3"> </button>
        <button class="btn4"> </button>
      </div>
      <span class="cancel" id="closeNote" onclick="closeNote()" >X</span>
</div>`
    return notes;
   }
   function addtoborde() {
    let item = document.getElementById(arr.length);
    let pos = 500;
    let id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            item.style.right = pos + "px";
        }
    }
    return 0;
  }
 