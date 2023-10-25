import NotesGroup from "../NotesGroup/NotesGroup";
import StylesLeftSidePannel from "./LeftSidePannel.module.css";


const LeftSidePannel = ({ handleClick }) => {




  return (
    <div className={StylesLeftSidePannel.leftSidePannel}>
      <h1>Pocket Notes</h1>
      <div className={StylesLeftSidePannel.center}>
        
        <button className={StylesLeftSidePannel.createNotesGroup} onClick={() => handleClick(true)}>
          {" "}
          <img src="assets/+.svg" alt="+" style={{ minWidth: "21px" }}/> Create Notes group
        </button>
        <div>
          <br />
          <div className={StylesLeftSidePannel.notesGroupSlected}>
          <NotesGroup  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePannel;
