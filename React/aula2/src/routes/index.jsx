import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PageHome />} />
                {/* <Route path={"/sobre"} element={ } /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;