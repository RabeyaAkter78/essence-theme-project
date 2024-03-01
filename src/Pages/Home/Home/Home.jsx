import LeftSideBar from "../LeftSideBar/LeftSideBar";
import MiddleBar from "../MiddleBar/MiddleBar";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
    return (
        <div className="flex mb-8">
            <LeftSideBar></LeftSideBar>
            <MiddleBar></MiddleBar>
            <RightSideBar></RightSideBar>
        </div>
    );
};

export default Home;