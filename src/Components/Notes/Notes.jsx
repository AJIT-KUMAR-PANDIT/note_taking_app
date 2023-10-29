import { useLocalStorage } from "@rehooks/local-storage";
import StyleNotes from "./Notes.module.css";

const Notes = () => {
  const [userIdClicked] = useLocalStorage("userIdClicked");
  const storedDataString = localStorage.getItem("notesData");
  const storedData = JSON.parse(storedDataString) || [];

  const groupName = storedData[userIdClicked - 1].groupName;
  const color = storedData[userIdClicked - 1].color;

  const imageText = groupName.length;
  const NotesImage = {
    backgroundColor: `${color}`,
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",

    maxWidth: "61px",
    maxHeight: "61px",
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
    textTransform: "uppercase",
  };

  return (
    <>
      {userIdClicked > 0 ? (
        <div className={StyleNotes.NotesGroupNotes}>
          <div className={StyleNotes.NotesGroupHeading}>
          &nbsp; &nbsp; &nbsp;<div style={NotesImage}>
              {groupName[0]}
              {groupName[imageText - 1]}
            </div>
            <div className={StyleNotes.NotesName}>{groupName}</div>
          </div>
          {/* <br/><br/><br/><br/> */}
          <div className={StyleNotes.NotesContent}>

          ajit jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>jhj<br/>
ajit
          </div>
          <div className={StyleNotes.NotesEnter}>
            <textarea
              type="text"
              placeholder="Enter your text here..........."
              className={StyleNotes.NotesInput}
            />
            <img
              src="assets/EnterArrow.svg"
              alt="Enter"
              className={StyleNotes.NotesInputButton}
            />
          </div>
        </div>
      ) : (
        ("no notes", console.log("no notes"))
      )}
    </>
  );
};

export default Notes;
