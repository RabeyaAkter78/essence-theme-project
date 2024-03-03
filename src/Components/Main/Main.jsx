import { Outlet } from 'react-router-dom';
import NavBar from '../../Pages/Shared/NavBar/NavBar';
import SecondNav from '../../Pages/Shared/SecondNav/SecondNav';
import ThirdNav from '../../Pages/Shared/ThirdNav/ThirdNav';
import FirstFooter from '../../Pages/Shared/Footer/FirstFooter';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SecondNav></SecondNav>
            <ThirdNav></ThirdNav>
            <Outlet></Outlet>
            <FirstFooter></FirstFooter>
        </div>
    );
};

export default Main;