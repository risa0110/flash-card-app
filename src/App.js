import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { UserDataProvider } from "./Context/UserDataContext";

export default function App() {
    return (
        <UserDataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserDataProvider>
    )
}