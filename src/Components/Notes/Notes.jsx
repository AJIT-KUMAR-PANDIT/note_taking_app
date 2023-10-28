import StyleNotes from "./Notes.module.css";

const Notes = (groupId, groupGroupName, groupColor) => {




  const imageText = groupGroupName.length;
  const NotesImage = {
    backgroundColor: `${groupColor}`,
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",

    // text
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "1.50719rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "97.688%" /* 1.47238rem */,
    letterSpacing: "0.03013rem",

    // center
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // UpperCase
    textTransform: "uppercase"
  };







  return (
    <>
      
        <div className={StyleNotes.NotesGroupContainer}>
          <div className={StyleNotes.NotesGroupHeading}>
          <div style={NotesImage}>
          {
          
           groupGroupName[0]}
          { groupGroupName[imageText-1]
          
          }
        </div>
          
          </div>
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
