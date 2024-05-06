import { Route, Routes } from "react-router-dom";
import React from "react";
import Sidebar from "./components/Sidebar";
import CourseList from "./components/CourseList";
import SemisterList from "./components/SemisterList";
import Homepage from "./components/Homepage";

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className='flex app'>
                <Sidebar />
                <div className='w-full h-screen overflow-y-scroll'>
                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route path='course/:id' element={<CourseList />}></Route>
                    </Routes>
                </div>
            </div>
        </React.Suspense>
    );
}

export default App;
