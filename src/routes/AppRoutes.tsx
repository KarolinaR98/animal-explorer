import { Route, Routes } from "react-router-dom";
import AnimalExplorer from "../views/AnimalExplorer";
import AnimalList from "../views/AnimalList";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AnimalExplorer />} />
            <Route path="/animalList" element={<AnimalList />} />
        </Routes>
    );
}

export default AppRoutes;