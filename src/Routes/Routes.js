import { createBrowserRouter } from "react-router-dom";
import Article from "../Pages/Article/Article";
import FirstArticle from "../Pages/Article/FirstArticle";
import SecondArticle from "../Pages/Article/SecondArticle";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Root from "../Root/Root";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/articles",
                element: <Article />
            },
            {
                path: "/articles/python",
                element: <FirstArticle />
            },
            {
                path: "/articles/node",
                element: <SecondArticle />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ]
    }
])

export default routes