// import {routes} from "./routes.tsx";
// import {Routes, Route} from "react-router-dom";

import {AppInventoryPage} from "../pages/AppInventoryPage.tsx";
import {Layout} from "../Components";

function App() {
    return (
        <>
            <Layout>
                <AppInventoryPage/>
            </Layout>
            {/*<Routes>*/}
            {/*    {routes.map(route => <Route path={route.path} element={route.element}/>)}*/}
            {/*</Routes>*/}
        </>
    )
}

export default App
