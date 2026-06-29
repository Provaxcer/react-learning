import { useState } from "react";

function TradeJournal () {


  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");


  function handleAdd() {
  setSavedNote(note);
}
  return (
    <div>
      <input 
  type="text" 
  value={note}
  onChange={(e) => setNote(e.target.value)}
/>
      <button onClick={handleAdd}>Add Note</button>
<p>{savedNote}</p>

    </div>
  )
}

export default TradeJournal;