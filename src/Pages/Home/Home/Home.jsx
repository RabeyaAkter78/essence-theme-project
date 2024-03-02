import ShopDepartment from "../../ShopDepartment/ShopDepartment";
import BottomBar from "../BottomBar/BottomBar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import MiddleBar from "../MiddleBar/MiddleBar";
import RightSideBar from "../RightSideBar/RightSideBar";

const Home = () => {
    return (
        <div>
            <div className="flex mb-4 mt-2 ">
                <LeftSideBar></LeftSideBar>
                <MiddleBar></MiddleBar>
                <RightSideBar></RightSideBar>

            </div>
            <BottomBar></BottomBar>
            <ShopDepartment></ShopDepartment>
        </div>
    );
};

export default Home;