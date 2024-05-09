import React, { useState } from "react";
import { FiCodesandbox, FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import { ReactComponent as DashboardIcon } from "../assests/ict/dashboard.svg";
import { ReactComponent as CropIcon } from "../assests/ict/crop.svg";

const Sidebar = ({}) => {
    const [search, setSearch] = useState();

    return (
        <div className='p-4  min-h-screen h-screen min-w-[300px] max-w-[300px] '>
            <div className='flex flex-col h-full w-full p-2 border-2 border-[#cde0f0] bg-white text-black rounded-lg'>
                <div className='logo-container flex items-center justify-center gap-4 w-full rounded-md py-3 px-2 bg-gradient-to-r from-[#4dd79d] to-blue-500'>
                    <FiCodesandbox className='h-10 w-10 rounded-md p-1 bg-gradient-to-bl from-blue-900 via-blue-400 to-blue-900' />
                    <div className='title text-lg font-bold space-x-2'>Notes Verse</div>
                </div>
                <div className='search-wrapper gap-2 flex border-neutral-300 border-2 rounded-md mt-4 px-2 py-1 items-center'>
                    <FiSearch className='text-neutral-400' />
                    <input type='text' placeholder='Search...' className='w-full text-sm focus:outline-none bg-transparent' onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='tabs flex flex-col gap-2 mt-4 pr-1 overflow-y-scroll h-full scrollbar'>
                    {[
                        {
                            title: "Civil Engineering",
                            link: "course/civil_engineering",
                            Icon: <CropIcon className='ml-2 h-5' />,
                        },
                        {
                            title: "Electronic Engineering",
                            link: "course/electronic_engineering",
                            Icon: <CropIcon className='ml-2 h-5' />,
                        },
                        {
                            title: "Mechanical Engineering",
                            link: "course/mechanical_engineering",
                            Icon: <CropIcon className='ml-2 h-5' />,
                        },
                    ]
                        .filter((item) => {
                            const regex = new RegExp(search, "i");
                            return regex.test(item.title);
                        })
                        .map(({ Icon, ...item }, index) => (
                            <>
                                <NavLink
                                    to={item.link}
                                    key={index}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-sm font-semibold flex gap-2 items-center px-1 py-2 rounded-sm border-l-[5px] bg-[#cde0f0] border-[#3c89cc] text-[#3c89cc] fill-[#3c89cc] hover:text-[#3c89cc]"
                                            : "text-sm text-slate-500 flex gap-2 items-center px-1 py-2 rounded-sm hover:bg-slate-200 hover:text-slate-500 fill-neutral-500"
                                    }>
                                    {Icon}
                                    {item.title}
                                </NavLink>
                            </>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
