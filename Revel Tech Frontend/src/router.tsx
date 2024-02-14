import { createBrowserRouter } from "react-router-dom";
import HomeMain from './components/Pages/Home/HomeMain';

const router = createBrowserRouter([
    {path:'/', element: <HomeMain />}
])

export default router