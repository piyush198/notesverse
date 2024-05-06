import React from "react";

const Homepage = ({}) => {
    return (
        <div className='h-screen flex justify-center items-center flex-col text'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-[64px] rounded-full p-5 hover:scale-105 transition-all'>
                WELCOME TO NOTESVERSE
            </div>
            <div className='text-white font-bold font-mono mt-2 text-lg'>Universe of notes</div>
        </div>
    );
};

export default Homepage;
