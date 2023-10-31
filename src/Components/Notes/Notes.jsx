import { useLocalStorage } from "@rehooks/local-storage";
import StyleNotes from "./Notes.module.css";
import { useState, useEffect } from "react";

const Notes = () => {
  const [displayingNotes, setDisplayingNotes] = useState({
    id: 0,
    notes: "",
    time: "",
    date: "",
  });
  const [userIdClicked] = useLocalStorage("userIdClicked");
  const storedDataString = localStorage.getItem("notesData");
  const storedData = JSON.parse(storedDataString) || [];
  const [myNotes, setMyNotes] = useState({
    id: [],
    notes: [],
    time: [],
    date: [],
  });

  // console.log(
  //   myNotes.id +
  //     " " +
  //     myNotes.notes +
  //     " notes" +
  //     "[time =]" +
  //     myNotes.time +
  //     " [date =]" +
  //     myNotes.date
  // );
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

  const myNotesFunction = (e) => {
    // ?time
    const currentNotesDate = new Date();
    const noteTimeWithSeconds = currentNotesDate.toLocaleTimeString();
    const NoteTimeWithoutSeconds = noteTimeWithSeconds.replace(/:\d{2}\s/, " ");

    // date
    const currentDate = new Date();
    const notesDay = currentDate.getDate();
    const notesMonth = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(currentDate);
    const notesYear = currentDate.getFullYear();

    const notesDate = `${notesDay} ${notesMonth} ${notesYear}`;

    // storing in state
    setMyNotes({
      ...myNotes,
      id: userIdClicked,
      notes: e.target.value,
      time: NoteTimeWithoutSeconds,
      date: notesDate,
    });
  };

  const saveMyNotes = () => {
    const existingNotesData = localStorage.getItem("myNotesSave");
    let existingNotes = JSON.parse(existingNotesData) || [];

    if (myNotes.notes !== "") {
      existingNotes.push(myNotes);
      localStorage.setItem("myNotesSave", JSON.stringify(existingNotes));
    }
  };

  const reterivingMyNotes = () => {
    const existingNotesData = localStorage.getItem("myNotesSave");

    if (existingNotesData) {
      const existingNotes = JSON.parse(existingNotesData);
      for (const note of existingNotes) {
        console.log(note.id + "= my notes");
        console.log(note.notes + "= notes");
        <div></div>
      }

      console.log(existingNotes.id + "_________");
    } else {
      console.log("Data not found in localStorage");
    }
  };

  reterivingMyNotes();

  return (
    <>
      {userIdClicked > 0 ? (
        <div className={StyleNotes.NotesGroupNotes}>
          <div className={StyleNotes.NotesGroupHeading}>
            &nbsp; &nbsp; &nbsp;
            <div style={NotesImage}>
              {groupName[0]}
              {groupName[imageText - 1]}
            </div>
            <div className={StyleNotes.NotesName}>{groupName}</div>
          </div>
          {/* <br/><br/><br/><br/> */}
          <div className={StyleNotes.NotesContent}>
            
          </div>
          <div className={StyleNotes.NotesEnter}>
            <textarea
              type="text"
              placeholder="Enter your text here..........."
              className={StyleNotes.NotesInput}
              onChange={(e) => myNotesFunction(e)}
            />
            <img
              src="assets/EnterArrow.svg"
              alt="Enter"
              className={StyleNotes.NotesInputButton}
              onClick={saveMyNotes}
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
