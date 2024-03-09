import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSobre from "../pages/PageSobre";
import PageNotFound from "../pages/Notfound";
import PageLayout from "../layouts/PageLayout";

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<PageLayout/>}>
                    <Route index element={<PageHome />} />
                    <Route path={"/sobre"} element={<PageSobre />} />
                    <Route path={"/*"} element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;