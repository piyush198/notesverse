import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<Sidebar />} />
            </Routes>
        </React.Suspense>
    );
}

export default App;
