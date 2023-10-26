import NotesGroup from "../NotesGroup/NotesGroup";
import StylesLeftSidePannel from "./LeftSidePannel.module.css";

const LeftSidePannel = ({ handleClick, groupName, color, create }) => {
  
//   storing data
  const dataStoreGroupNames ={
    id: 0,
    groupName: groupName,
    color: color,
    create: create
  };
  const StringDataStoreGroupNames = JSON.stringify(dataStoreGroupNames);
  localStorage.setItem("myData", StringDataStoreGroupNames);
  
// reteriving data

const storedDataString = localStorage.getItem("myData");
const storedData = JSON.parse(storedDataString);


//   {console.log(groupName,color)}
  
    return (
    <div className={StylesLeftSidePannel.leftSidePannel}>
      <h1>Pocket Notes</h1>
      <div className={StylesLeftSidePannel.center}>
        <button
          className={StylesLeftSidePannel.createNotesGroup}
          onClick={() => handleClick(true)}
        >
          {" "}
          <img src="assets/+.svg" alt="+" style={{ minWidth: "21px" }} /> Create
          Notes group
        </button>
        <div>
          <br />
          <div className={StylesLeftSidePannel.notesGroupSlected}>
            {storedData.create ? <NotesGroup groupName={storedData.groupName} color={storedData.color} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePannel;
