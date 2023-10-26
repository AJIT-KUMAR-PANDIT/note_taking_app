import LeftSidePannel from "../LeftSidePannel/LeftSidePannel";
import RightSidePannel from "../RightSidePannel/RightSidePannel";
import StyleHomeMainPage from "./HomeMainPage.module.css";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const HomeMainPage = () => {
  const [open, setOpen] = React.useState(false);
  const [createGroup, setCreateGroup] = React.useState({
    groupName: "",
    color: "",
    create: false
  });

  const {groupName, color, create} = createGroup;
  const handleClick = (open) => {
    setOpen(open);
  };


  const handleNotesChange=(e)=>{
    setCreateGroup({...createGroup,groupName:e.target.value})
  }

const handleSubmit = (e) => {
    setCreateGroup({...createGroup,create:true});
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <div className={StyleHomeMainPage.homeMainPage}>
        <LeftSidePannel handleClick={handleClick} groupName={groupName} color={color} create={create}/>
        <RightSidePannel />
      </div>
{/* {console.log(groupName,color)} */}
      {/* ?,modal  #################################################################### */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeOnOverlayClick={true}
        center={true}
        showCloseIcon={false}
      >
        <h2 className={StyleHomeMainPage.Text1}>Create New Notes group</h2>
        <form action="">
          <p>
            <label htmlFor="GroupName">
              <span className={StyleHomeMainPage.Text2}> Group Name</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <input
                type="text"
                placeholder="   Enter your group name...."
                className={StyleHomeMainPage.placeHold}
                onChange={(e) =>handleNotesChange(e)}
              />
            </label>
          </p>
          <p className={StyleHomeMainPage.Choosecolour}>
            <label htmlFor="Choosecolour">
              <span className={StyleHomeMainPage.Text2}>Choose colour</span>
              <span className="StyleHomeMainPage.ChoosecolourBreak">
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton1}
                  onClick={() => setCreateGroup({...createGroup,color:"#B38BFA"})}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton2}
                  onClick={() => setCreateGroup({...createGroup,color:"#FF79F2"})}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton3}
                  onClick={() => setCreateGroup({...createGroup,color:"#43E6FC"})}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton4}
                  onClick={() => setCreateGroup({...createGroup,color:"#F19576"})}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton5}
                  onClick={() => setCreateGroup({...createGroup,color:"#0047FF"})}
                ></button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className={StyleHomeMainPage.colorButton6}
                  onClick={() => setCreateGroup({...createGroup,color:"#6691FF"})}
                ></button>
                &nbsp;&nbsp;
              </span>
            </label>
          </p>
          <input
            type="submit"
            value="Create"
            className={StyleHomeMainPage.create}
            onClick={handleSubmit}
          />
        </form>
      </Modal>
    </>
  );
};

export default HomeMainPage;
