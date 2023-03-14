function positionAt(anchor, position, elem) {
  const cords = anchor.getBoundingClientRect();

  switch (position) {
    case "top":
      elem.style.top = cords.top - elem.clientHeight + "px";
      elem.style.left = cords.left + "px";
      break;
    case "right":
      elem.style.top = cords.top + "px";
      elem.style.left = cords.right + "px";
      break;
    case "bottom":
      elem.style.top = cords.bottom + "px";
      elem.style.left = cords.left + "px";
      break;
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");