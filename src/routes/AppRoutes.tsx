import { Route, Routes } from "react-router-dom";
import AnimalExplorer from "../views/AnimalExplorer";
import AnimalList from "../views/AnimalList";
import AnimalDetails from "../views/AnimalDetails";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AnimalExplorer />} />
            <Route path="/animalList/:type" element={<AnimalList />} />
            <Route path="/animalList/:type/:id" element={<AnimalDetails />} />
        </Routes>
    );
}

export default AppRoutes;