import LeftSidePannel from "../LeftSidePannel/LeftSidePannel";
import RightSidePannel from "../RightSidePannel/RightSidePannel";
import StyleHomeMainPage from "./HomeMainPage.module.css";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const HomeMainPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={StyleHomeMainPage.homeMainPage}>
        <LeftSidePannel/>
        <RightSidePannel />
        <button className="button" onClick={() => setOpen(true)}>
          Open modal
        </button>
      </div>

      {/* ?,modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeOnOverlayClick={true}
        center={true}
        showCloseIcon={false}
      >
        <h2>Create New Notes group</h2>
        <form action="">
          <p>
            <label htmlFor="GroupName">
            Group Name
              <input type="text" />
            </label>
          </p>
          <p>
            <label htmlFor="Choosecolour">
            Choose colour
              <button type="button" className={StyleHomeMainPage.colorButton1}></button>
              <button type="button" className={StyleHomeMainPage.colorButton2}></button>
              <button type="button" className={StyleHomeMainPage.colorButton3}></button>
              <button type="button" className={StyleHomeMainPage.colorButton4}></button>
              <button type="button" className={StyleHomeMainPage.colorButton5}></button>
              <button type="button" className={StyleHomeMainPage.colorButton6}></button>
            </label>
          </p>
          <input type="submit" value="Create" />
        </form>
      </Modal>
    </>
  );
};

export default HomeMainPage;
