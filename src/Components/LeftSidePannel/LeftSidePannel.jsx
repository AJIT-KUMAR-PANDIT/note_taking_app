import { writeStorage } from '@rehooks/local-storage';
import NotesGroup from "../NotesGroup/NotesGroup";
import StylesLeftSidePannel from "./LeftSidePannel.module.css";
import React, { useEffect } from "react";

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
  //   localStorage.setItem("notesData", StringDataStoreGroupNames);

  //   const storedDataString = localStorage.getItem("notesData");
  //   const storedData = JSON.parse(storedDataString);

  //   {console.log(groupName,color)}

  const storedDataString = localStorage.getItem("notesData");
  const storedData = JSON.parse(storedDataString) || [];
  // changing id
  const newId =
    storedData.length > 0 ? storedData[storedData.length - 1].id + 1 : 1;

  // Create a new data object
  const newData = {
    id: newId,
    groupName: groupName,
    color: color,
    create: create,
  };

  // Append the new data to the existing array

  const submitCheck = () => {
    if (groupName !== "" && create === true) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (submitCheck()) {
      // Append the new data to the existing array
      storedData.push(newData);

      // Store the updated array back in local storage
      localStorage.setItem("notesData", JSON.stringify(storedData));
    }
  }, [groupName, create, newData]);



  // window.addEventListener('beforeunload', () => {
  //   localStorage.setItem("userIdClicked", 0);
  //   });



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
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            {storedData.map((group) =>
              group.create ? (
                <div className={StylesLeftSidePannel.notesGroupSlected}>
                  <span
                    // onClick={() => {
                    //   localStorage.setItem("userIdClicked", group.id);
                    // }}
                    onClick={_ => writeStorage('userIdClicked', group.id)}
                    style={{
                      minWidth: "100%",
                      minHeight: "61px",
                      // border: "1px solid black",
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                  >
                    <NotesGroup
                      key={group.id}
                      groupName={group.groupName}
                      color={group.color}
                   />
                  </span>
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
