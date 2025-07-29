import { Outlet, Link } from "react-router-dom";
export default function Layout(){
    return(
        <>
        <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Profile">Profile Page</Link></li>
        </ul>
        <Outlet/>
        </>
    )
}