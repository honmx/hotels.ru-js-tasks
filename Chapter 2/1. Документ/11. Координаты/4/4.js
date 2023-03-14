function positionAt(anchor, position, elem) {
  const cords = anchor.getBoundingClientRect();

  switch (position) {
    case "top-out":
      elem.style.top = cords.top - elem.clientHeight + "px";
      elem.style.left = cords.left + "px";
      break;
    case "top-in":
      elem.style.top = cords.top + "px";
      elem.style.left = cords.left + "px";
      break;
    case "right-out":
      elem.style.top = cords.top + "px";
      elem.style.left = cords.right + "px";
      break;
    case "right-in":
      elem.style.top = cords.top + "px";
      elem.style.left = cords.right - elem.clientWidth + "px";
      break;
    case "bottom-out":
      elem.style.top = cords.bottom + "px";
      elem.style.left = cords.left + "px";
      break;
    case "bottom-in":
      elem.style.top = cords.bottom - elem.clientHeight + "px";
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

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "bottom-in", "note bottom-in");