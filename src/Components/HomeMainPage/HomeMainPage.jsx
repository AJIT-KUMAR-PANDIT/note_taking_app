import LeftSidePannel from '../LeftSidePannel/LeftSidePannel';
import RightSidePannel from '../RightSidePannel/RightSidePannel';
import StyleHomeMainPage from './HomeMainPage.module.css';

const HomeMainPage = () => {
    return (
        <>
        <div className={StyleHomeMainPage.homeMainPage}>
            <LeftSidePannel/>
            <RightSidePannel/>    
        </div>
        </>
    )
}

export default HomeMainPage;