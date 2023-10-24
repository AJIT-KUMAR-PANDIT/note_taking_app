import StylesLeftSidePannel from './LeftSidePannel.module.css';

const LeftSidePannel = () => {
    return (
        <div className={StylesLeftSidePannel.leftSidePannel}>
            <h1>Pocket Notes</h1>
            <div>
                <button className={StylesLeftSidePannel.createNotesGroup}> + Create Notes group</button>
            </div>
        </div>
    );
}

export default LeftSidePannel;