import HeaderCompo from "./Components/HeaderCompo"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import ThemeContext from "./Context/ThemeContext";

export default function Layout() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={theme === 'light' ? "dark-mode" : "light-mode"}>
                <HeaderCompo />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}