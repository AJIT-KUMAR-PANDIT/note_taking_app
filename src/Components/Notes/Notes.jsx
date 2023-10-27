import StyleNotes from "./Notes.module.css";

const Notes = () => {
  return (
    <>
      
        <div>
          <div className={StyleNotes.NotesGroupHeading}></div>
          <div className={StyleNotes.NotesContent}>jhj</div>
          <div className={StyleNotes.NotesEnter}>
            <textarea type="text" placeholder="Enter your text here..........."
            className={StyleNotes.NotesInput}
            />
            <img src="assets/EnterArrow.svg" alt="Enter"  className={StyleNotes.NotesInputButton}/>
          </div>
        </div>
      
    </>
  );
};

export default Notes;
