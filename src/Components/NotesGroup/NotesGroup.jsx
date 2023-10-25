import StyleNotesGroup from "./NotesGroup.module.css";

const NotesGroup = ({color,groupName}) => {


const NotesImage={
    backgroundColor:"red",
    borderRadius: "50%",
    minWidth: "61px",
    minHeight: "61px",

    // text
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "1.50719rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "97.688%", /* 1.47238rem */
    letterSpacing: "0.03013rem",

    // center
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}



  return (
    <>
        <div className={StyleNotesGroup.NotesGroup}>
            <div style={NotesImage}>jhj</div>
            <div className={StyleNotesGroup.NotesName}>{groupName}jjd</div>
        </div>
    </>
  )
}

export default NotesGroup;