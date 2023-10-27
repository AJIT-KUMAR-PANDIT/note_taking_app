import NotesGroup from "../NotesGroup/NotesGroup";
import StylesLeftSidePannel from "./LeftSidePannel.module.css";
import React, { useState } from "react";

const LeftSidePannel = ({ handleClick, id, groupName, color, create }) => {
//   //   storing data

//   const dataStoreGroupNames = [

//   ];

//   dataStoreGroupNames.push({
//     id:id,
//     groupName: groupName,
//     color: color,
//     create: create,
//   })

// //   const dataStoreGroupNames = [
// //     {
// //         id: 0,
// //         groupName: groupName,
// //         color: color,
// //         create: create,
// //       },
// //   ];

//   const StringDataStoreGroupNames = JSON.stringify(dataStoreGroupNames);
//   localStorage.setItem("myData", StringDataStoreGroupNames);

//   const storedDataString = localStorage.getItem("myData");
//   const storedData = JSON.parse(storedDataString);

  //   {console.log(groupName,color)}








  const storedDataString = localStorage.getItem("myData");
  const storedData = JSON.parse(storedDataString) || [];

  // Create a new data object
  const newData = {
    id: id,
    groupName: groupName,
    color: color,
    create: create,
  };

  // Append the new data to the existing array
  storedData.push(newData);

  // Store the updated array back in local storage
  localStorage.setItem("myData", JSON.stringify(storedData));



  const [isClicked, setIsClicked] = useState(false);

// handling notes section

const handleNotesClick = () => {
  
}





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
          <div style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    
                }}>
            {storedData.map((group) =>
              group.create ? (
                <div className={StylesLeftSidePannel.notesGroupSlected}>
                <NotesGroup
                  key={group.id}
                  groupName={group.groupName}
                  color={group.color}
                  onClick={handleNotesClick}
                />
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidePannel;
