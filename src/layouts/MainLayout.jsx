import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";



const MainLayout = () => {


    return (
        <>
            <NavBar></NavBar>
            <div className="bg-base-300 min-h-screen">
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default MainLayout;