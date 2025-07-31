import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import MyFlashcards from './Pages/MyFlashcards';
import OpenTrivia from './Pages/OpenTrivia';
import Profile from "./Pages/Profile";
import { UserDataProvider } from "./Context/UserDataContext";
import "./style.css"
import Layout from "./Layout";
import { MenuProvider } from "./Context/MenuContext";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
    return (
        <UserDataProvider>
            <ThemeProvider>
                <MenuProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path="dashboard" element={<Dashboard />} />
                                <Route path="MyFlashcards" element={<MyFlashcards />} />
                                <Route path="OpenTrivia" element={<OpenTrivia />} />
                                <Route path="profile" element={<Profile />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </MenuProvider>
            </ThemeProvider>
        </UserDataProvider>
    )
}