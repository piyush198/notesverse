import { Route, Routes } from "react-router-dom";
import React from "react";
import Sidebar from "./components/Sidebar";
import SemesterList from "./components/SemesterList";

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Sidebar />
            <Routes>
                <Route
                    index
                    element={<div>NotesVerse</div>}
                />
                <Route
                    path='/course/:id'
                    element={<SemesterList />}
                />
            </Routes>
        </React.Suspense>
    );
}

export default App;
