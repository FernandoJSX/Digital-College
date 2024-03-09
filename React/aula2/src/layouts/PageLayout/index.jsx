import NavBar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default PageLayout;