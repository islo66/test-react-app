import {Routes} from "../types/routes.ts";
import {AppInvetoryPage} from "../pages/AppInvetoryPage.tsx";

export const routes: Routes[] = [
    {
        path: '/',
        element: <AppInvetoryPage />
    }
];