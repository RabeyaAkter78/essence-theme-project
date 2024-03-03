import DailyDisCover from "../../DailyDiscover/DailyDisCover";
import DealOfTheDay from "../../DealOfTheDay/DealOfTheDay";
import DealOfTheDay2 from "../../DealOfTheDay/DealOfTheDay2";
import MostViewedItem from "../../MostViewedItem/MostViewedItem";
import TopBrand from "../../MostViewedItem/TopBrand";
import OnSellingProduct from "../../OnSellingProduct/OnSellingProduct";
import OnSellingProduct2 from "../../OnSellingProduct/OnSellingProduct2";
import ShopAllCategories from "../../ShopAllCategories/ShopAllCategories";
import ShopDepartment from "../../ShopDepartment/ShopDepartment";
import WeeklyVendor from "../../WeeklyVendor/WeeklyVendor";
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
            <DealOfTheDay></DealOfTheDay>
            <DealOfTheDay2></DealOfTheDay2>
            <OnSellingProduct></OnSellingProduct>
            <OnSellingProduct2></OnSellingProduct2>
            <ShopAllCategories></ShopAllCategories>
            <MostViewedItem></MostViewedItem>
            <TopBrand></TopBrand>
            <WeeklyVendor></WeeklyVendor>
            <DailyDisCover></DailyDisCover>
        </div>
    );
};

export default Home;