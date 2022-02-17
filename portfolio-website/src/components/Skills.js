import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import {skills} from "../data/data.js"

//TODO: ADD THE PROGRAMING ICONS TO THE SKILLS ARRAY USING DEVICONS
export default function Skills() {
    return (
        <section id='skills'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='text-center b-20'>
                    <ChipIcon className='w-10 inline-block mb-4' />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                        Skills & Technologies
                    </h1>
                    <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                        Here are some of the main skills, languages, and practices that I've learning during my time at the UofA.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className='p-2 sm:w-1/2 w-full'>
                            <div className='bg-gray-800 rounded flex p-5 h-full items-center'>
                                <BadgeCheckIcon className='text-green-400 w-6 g-6 flex-shrink-0 mr-4' />
                                <span className='title-font font-medium text-white'>
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}