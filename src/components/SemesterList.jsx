import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const SemesterList = ({}) => {
    let { id } = useParams();
    const courseData = data[id];

    console.log(courseData);

    return (
        <div>
            <div class='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
                {courseData.map((course, index) => (
                    <div key={index}>
                        {Object.entries(course).map(([subject, units]) => (
                            <div class='py-5'>
                                <details class='group'>
                                    <summary class='flex justify-between items-center font-medium cursor-pointer list-none'>
                                        <span>{subject}</span>
                                        <span class='transition group-open:rotate-180'>
                                            <svg
                                                fill='none'
                                                height='24'
                                                shape-rendering='geometricPrecision'
                                                stroke='currentColor'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='1.5'
                                                viewBox='0 0 24 24'
                                                width='24'>
                                                <path d='M6 9l6 6 6-6'></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                                        {units.map((unit, index) => (
                                            <div key={index}>
                                                <p>{unit.name}</p>
                                                <a href={unit.url}>Link</a>
                                            </div>
                                        ))}
                                    </p>
                                </details>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SemesterList;
